#!/usr/bin/env bash
set -euo pipefail

if [[ ! -x ./node_modules/.bin/strapi ]]; then
  echo "Error: ./node_modules/.bin/strapi not found. Run npm install first." >&2
  exit 1
fi

if [[ ! -f ./build/index.html ]]; then
  echo "Building Strapi admin (no build output found)..."
  ./node_modules/.bin/strapi build
else
  echo "Skipping Strapi admin build (build output exists)."
fi
echo "Starting Strapi server (port from .env, default 1337)..."
./node_modules/.bin/strapi start
