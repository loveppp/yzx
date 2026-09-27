#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
source scripts/use-node20.sh
echo "Using Node $(node -v) at $(which node)"
exec npm run dev:astro -- --host "$@"
