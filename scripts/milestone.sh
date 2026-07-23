#!/bin/bash

MESSAGE="$1"
DATE=$(date "+%Y-%m-%d %H:%M:%S")

if [ -z "$MESSAGE" ]; then
  echo "Please provide a milestone message."
  echo 'Example: ./scripts/milestone.sh "Completed database blueprint"'
  exit 1
fi

echo "" >> docs/founders-journal/daily-log.md
echo "## Milestone Update" >> docs/founders-journal/daily-log.md
echo "Date: $DATE" >> docs/founders-journal/daily-log.md
echo "Completed: $MESSAGE" >> docs/founders-journal/daily-log.md

git add .
git commit -m "$MESSAGE"

echo "Milestone captured: $MESSAGE"
