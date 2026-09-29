#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/../.."
# shellcheck source=scripts/use-node20.sh
source scripts/use-node20.sh
exec npx tsx scripts/image-gen/cli.ts "$@"
