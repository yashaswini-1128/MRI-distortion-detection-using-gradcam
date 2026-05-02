import requests
import numpy as np
import cv2
import tempfile
import os
import base64

# Create a simple test image (224x224, RGB)
img = np.zeros((224, 224, 3), dtype=np.uint8)
img[:, :] = (128, 64, 200)

tmp = tempfile.mktemp(suffix='.png')
cv2.imwrite(tmp, img)

print("Sending test image to /api/v1/predict ...")
try:
    with open(tmp, 'rb') as f:
        r = requests.post(
            'http://127.0.0.1:8000/api/v1/predict',
            files={'file': ('test.png', f, 'image/png')},
            timeout=30
        )
    print(f"Status: {r.status_code}")
    print(f"Raw response: {r.text[:2000]}")
except Exception as e:
    print(f"Request failed: {e}")
finally:
    if os.path.exists(tmp):
        os.unlink(tmp)
