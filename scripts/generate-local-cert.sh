#!/usr/bin/env bash
set -euo pipefail

echo "Generating self-signed certificate for localhost..."
# On Git Bash/WSL on Windows, MSYS may rewrite the -subj path; disable path conversion
MSYS_NO_PATHCONV=1 openssl req -x509 -newkey rsa:2048 -nodes \
  -keyout localhost-key.pem -out localhost.pem -days 365 -subj "/CN=localhost"

echo "Created localhost.pem and localhost-key.pem"
