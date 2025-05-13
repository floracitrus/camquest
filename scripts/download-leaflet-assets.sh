#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download Leaflet marker assets
curl -o public/marker-icon.png https://raw.githubusercontent.com/Leaflet/Leaflet/main/dist/images/marker-icon.png
curl -o public/marker-icon-2x.png https://raw.githubusercontent.com/Leaflet/Leaflet/main/dist/images/marker-icon-2x.png
curl -o public/marker-shadow.png https://raw.githubusercontent.com/Leaflet/Leaflet/main/dist/images/marker-shadow.png 