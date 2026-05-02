import requests
import numpy as np
import cv2
import tempfile
import os

img = np.zeros((224, 224, 3), dtype=np.uint8)
img[:, :] = (128, 64, 200)

tmp = tempfile.mktemp(suffix='.png')
cv2.imwrite(tmp, img)

try:
    with open(tmp, 'rb') as f:
        r = requests.post(
            'http://127.0.0.1:8000/api/v1/predict',
            files={'file': ('test.png', f, 'image/png')},
            timeout=30
        )
    print(f"Status: {r.status_code}")
    if r.status_code == 200:
        data = r.json()
        print(f"Keys: {list(data.keys())}")
        for key in ['gradcam', 'gradcam_pp', 'localized']:
            if key in data:
                val = data[key]
                print(f"{key} starts with: {val[:50]}")
            else:
                print(f"{key} MISSING")
    else:
        print(f"Error: {r.text}")
except Exception as e:
    print(f"Request failed: {e}")
finally:
    if os.path.exists(tmp):
        os.unlink(tmp)
