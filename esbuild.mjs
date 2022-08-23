import { createOptions, esbuild } from './esbuild.options.mjs';

const options = createOptions(
  [
    './src/main.ts'
  ],
  './dist/'
);
esbuild(options);
