#!/usr/bin/env bash
# 一键在当前终端启用 Node 20
export PATH="$HOME/.local/node-v20.18.3-darwin-x64/bin:$PATH"
echo "node: $(which node)"
echo "version: $(node -v)"
