#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'
# 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
# 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
# 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
git push -f git@github.com:MissSage/ms_istar.git master:gh-pages

cd -
