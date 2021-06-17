#!/bin/bash -e
rm -rf dist/libs && mkdir -p dist/libs
# tslib
mkdir dist/libs/tslib
cp -v node_modules/tslib/tslib.es6.js dist/libs/tslib/tslib.js
npx rollup -c rollup/rollup.tslib.js
# bootstrap-icons
cp -rv node_modules/bootstrap-icons/icons dist/libs/bootstrap-icons
# bootstrap
cp -rv node_modules/bootstrap/dist dist/libs/bootstrap
# @popperjs/core
npx rollup -c rollup/rollup.popperjs.js
# vue
mkdir dist/libs/vue
cp -v node_modules/vue/dist/vue.esm-browser.js dist/libs/vue/vue.js
cp -v node_modules/vue/dist/vue.esm-browser.prod.js dist/libs/vue/vue.min.js
cp -v node_modules/vue-router/dist/vue-router.esm-browser.js dist/libs/vue/vue-router.js
