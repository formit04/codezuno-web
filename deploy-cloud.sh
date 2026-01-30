#!/bin/bash

# Codezuno.com - Cloud Build Deploy (z cache)
# Szybszy niż gcloud run deploy --source

set -e

PROJECT="codezuno-web"
REGION="europe-west1"

echo "🚀 Uruchamiam Cloud Build z cache..."
gcloud builds submit \
  --config=cloudbuild.yaml \
  --project=${PROJECT} \
  --region=${REGION}

echo "✅ Deploy zakończony!"
echo "🌐 https://codezuno.com"
