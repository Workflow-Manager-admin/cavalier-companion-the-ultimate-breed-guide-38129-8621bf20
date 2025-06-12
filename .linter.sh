#!/bin/bash
cd /home/kavia/workspace/code-generation/cavalier-companion-the-ultimate-breed-guide-38129-8621bf20/cavalier_companion_breed_guide
npx eslint
ESLINT_EXIT_CODE=$?
npm run build
BUILD_EXIT_CODE=$?
if [ $ESLINT_EXIT_CODE -ne 0 ] || [ $BUILD_EXIT_CODE -ne 0 ]; then
   exit 1
fi

