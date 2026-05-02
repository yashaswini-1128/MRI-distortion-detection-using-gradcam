import torch
import numpy as np
import torch.nn.functional as F

class GradCAMPlusPlus:
    def __init__(self, model, target_layer):
        self.model = model
        self.target_layer = target_layer
        self.gradients = None
        self.activations = None

        self.target_layer.register_forward_hook(self.save_activation)
        self.target_layer.register_full_backward_hook(self.save_gradient)

    def save_activation(self, module, input, output):
        self.activations = output.detach()

    def save_gradient(self, module, grad_input, grad_output):
        self.gradients = grad_output[0].detach()

    def generate(self, input_tensor, class_idx):
        self.model.zero_grad()
        output = self.model(input_tensor)
        
        # Target score
        score = output[0, class_idx]
        score.backward(retain_graph=True)

        # Gradients and Activations
        # gradients shape: (1, C, H, W)
        # activations shape: (1, C, H, W)
        grads = self.gradients
        activations = self.activations

        # Grad-CAM++ weights calculation
        # Alpha_kc = (d^2Y/dA^2) / (2*d^2Y/dA^2 + sum(A*d^3Y/dA^3))
        
        # First order gradients
        grads_power_1 = grads[0]
        # Second order gradients
        grads_power_2 = grads_power_1.pow(2)
        # Third order gradients
        grads_power_3 = grads_power_1.pow(3)

        sum_activations = torch.sum(activations[0], dim=(1, 2))
        
        # Calculate alpha
        # Note: We need the score to be computed again to get higher order gradients if we were being rigorous,
        # but a common implementation uses the existing gradients for a faster approximation.
        # Here we use the standard Grad-CAM++ weight formula.
        
        eps = 1e-8
        alpha_numerator = grads_power_2
        alpha_denominator = 2 * grads_power_2 + sum_activations[:, None, None] * grads_power_3 + eps
        
        alpha = alpha_numerator / alpha_denominator
        
        # Calculate weights w_kc = sum_ij(alpha_kc_ij * relu(dY/dA_kc_ij))
        weights = torch.sum(alpha * torch.relu(grads_power_1), dim=(1, 2))
        
        # Weighted sum of activations
        cam = torch.sum(weights[:, None, None] * activations[0], dim=0)
        
        cam = torch.relu(cam)
        cam = cam.cpu().numpy()
        
        # Normalize
        cam = cam - np.min(cam)
        cam = cam / (np.max(cam) + eps)
        
        return cam
