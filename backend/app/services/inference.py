import torch
import cv2
import numpy as np

from app.models.cnn import MRIModel
from app.core.config import settings
from app.services.gradcam import GradCAM
from app.services.gradcam_plus_plus import GradCAMPlusPlus
from app.services.localization import apply_localization
from app.utils.image import preprocess
from app.core.logger import logger


class InferenceEngine:
    def __init__(self):
        self.device = settings.DEVICE

        # Load model
        self.model = MRIModel(num_classes=3)
        self.model.load_state_dict(
            torch.load(settings.MODEL_PATH, map_location=self.device)
        )
        self.model.to(self.device)
        self.model.eval()

        print("Model loaded successfully")

        # 🔥 IMPORTANT: correct layer (ResNet)
        self.gradcam = GradCAM(self.model, self.model.backbone.layer4)

        self.labels = ["Clean", "Noise", "Blur"]
        logger.info("Model loaded successfully")

    def predict(self, image_np):
        try:
            # Preprocess
            input_tensor = preprocess(image_np).to(self.device)

            # Forward
            with torch.no_grad():
                output = self.model(input_tensor)
                probs = torch.softmax(output, dim=1)

            pred = torch.argmax(probs).item()
            confidence = float(torch.max(probs).cpu().numpy())

            # GradCAM
            heatmap = self.gradcam.generate(input_tensor, pred)
            
            # Resize and process Grad-CAM
            heatmap_resized = cv2.resize(heatmap, (image_np.shape[1], image_np.shape[0]))
            heatmap_color = cv2.applyColorMap(np.uint8(255 * heatmap_resized), cv2.COLORMAP_JET)
            heatmap_color_rgb = cv2.cvtColor(heatmap_color, cv2.COLOR_BGR2RGB)
            overlay = cv2.addWeighted(image_np, 0.5, heatmap_color_rgb, 0.5, 0)

            # Localization
            localized = apply_localization(image_np.copy(), heatmap) 

            logger.info(f"Prediction successful: {self.labels[pred]} ({confidence:.2f})")

            return {
                "label": self.labels[pred],
                "confidence": confidence,
                "gradcam": overlay,
                "localized": localized
            }

        except Exception as e:
            return {"error": str(e)}
        