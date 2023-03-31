#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'
# 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
git push -f git@github.com:MissSage/ms_istar.git master:gh-pages

cd -