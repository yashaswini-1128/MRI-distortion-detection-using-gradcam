# NeuroScan Engine: MRI Distortion Detection Framework

![NeuroScan Banner](https://img.shields.io/badge/Status-Active-brightgreen)
![Python](https://img.shields.io/badge/Python-3.9+-blue)
![React](https://img.shields.io/badge/React-18.x-cyan)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-009688)

**NeuroScan Engine** is a robust and explainable CNN framework designed for the automated detection of distortions in MRI scans. Utilizing a ResNet50 backbone and Grad-CAM interpretation, this system provides clinicians with high-accuracy diagnostic support and visual heatmaps to understand model decision-making.

---

## 🌟 Key Features

- **Automated Detection**: Rapid identification of MRI distortions using state-of-the-art Deep Learning.
- **Explainable AI (XAI)**: Integrated Grad-CAM and Grad-CAM++ visualizations for localized diagnostic interpretation.
- **Modern UI/UX**: A premium, glassmorphism-themed diagnostic workstation built with React and Vite.
- **Real-time Processing**: Fast backend inference powered by FastAPI and TensorFlow/ResNet50.
- **Comprehensive Analytics**: Dashboard for viewing historical scans, confidence scores, and diagnostic reports.

## 🛠️ Technology Stack

### Backend
- **Framework**: FastAPI
- **Model Architecture**: ResNet50 (Transfer Learning)
- **Deep Learning**: TensorFlow / Keras
- **Image Processing**: OpenCV, NumPy
- **Interpretability**: Grad-CAM, Grad-CAM++

### Frontend
- **Framework**: React.js (Vite)
- **Styling**: Vanilla CSS (Custom Glassmorphism Design System)
- **Icons**: Lucide React
- **Animations**: CSS Keyframes (X-ray scanning effects)

---

## 🚀 Getting Started

### Prerequisites
- Python 3.9+
- Node.js 16+
- Git

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/mri-distortion-detection.git
   cd mri-distortion-detection
   ```

2. **Backend Setup**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python run.py
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

---

## 📂 Project Structure

```text
├── backend/            # FastAPI Server & ML Inference
│   ├── app/            # Core logic & API routes
│   ├── weights/        # Trained ResNet50 models
│   └── run.py          # Entry point
├── frontend/           # React Web Application
│   ├── src/            # Components, Pages, & Assets
│   └── public/         # Static files
├── training/           # Notebooks & scripts for model training
└── README.md           # Documentation
```

---

## 📊 Methodology

The system employs a multi-stage pipeline:
1. **Preprocessing**: Normalization and augmentation of MRI slices.
2. **Feature Extraction**: ResNet50 pre-trained on ImageNet, fine-tuned on MRI distortion datasets.
3. **Inference**: Binary/Multi-class classification of scans.
4. **Localization**: Grad-CAM heatmaps generated from the final convolutional layer to highlight "distorted" regions.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👥 Authors

- **Yashaswini** - *Initial Work* - [@yourgithub](https://github.com/yourgithub)

---

*This project was developed as part of a B.Tech Final Year project.*
