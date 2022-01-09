#!/bin/bash -e
rm -rf dist/libs && mkdir -p dist/libs
FILES=$(ls rollup/*.sh)
for file in $FILES
do
  echo executing $file
  $file
done
