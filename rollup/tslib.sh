#!/bin/bash -e
mkdir dist/libs/tslib
cp -v node_modules/tslib/tslib.es6.js dist/libs/tslib/tslib.js
pnpm exec rollup -c rollup/rollup.tslib.js
