#!/bin/bash

# Codezuno.com - Fast Deploy Script
# Buduje lokalnie i deployuje na Cloud Run

set -e

PROJECT="codezuno-web"
REGION="europe-west1"
SERVICE="codezuno-web"
IMAGE="europe-west1-docker.pkg.dev/${PROJECT}/cloud-run-source-deploy/${SERVICE}"

echo "🔨 Buduję obraz Docker..."
docker build -t ${IMAGE} .

echo "📤 Wysyłam obraz do Artifact Registry..."
docker push ${IMAGE}

echo "🚀 Deployuję na Cloud Run..."
gcloud run deploy ${SERVICE} \
  --image ${IMAGE} \
  --region ${REGION} \
  --project ${PROJECT} \
  --allow-unauthenticated \
  --quiet

echo "✅ Deploy zakończony!"
echo "🌐 https://codezuno.com"
