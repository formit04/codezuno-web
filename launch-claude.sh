#!/usr/bin/env zsh

PROJECT_DIR="/Users/marcinformela/claude_project/codezuno.com/web"
SESSION_NAME="codezuno-web"

cd "$PROJECT_DIR" || exit 1

if tmux has-session -t "$SESSION_NAME" 2>/dev/null; then
    tmux attach-session -t "$SESSION_NAME"
else
    tmux new-session -s "$SESSION_NAME" -c "$PROJECT_DIR" "claude"
fi
