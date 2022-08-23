import { build } from 'esbuild';

import vue from './esbuild-plugin-vue.mjs';

const argv = process.argv;
const production = argv.indexOf('--prod') > -1;
const watching = argv.indexOf('--watch') > -1;

/**
 * create esbuild options;
 * @param {string[]} input entry points;
 * @param {string} output output file or dir (end with /)
 * @returns {import('esbuild').BuildOptions}
 */
function createOptions(entryPoints, output) {
  /** @type {import('esbuild').BuildOptions} */
  const options = {
    entryPoints,
    tsconfig: './tsconfig.json',
    format: 'esm',
    bundle: true,
    minify: production,
    sourcemap: !production,
    legalComments: 'none',
    chunkNames: "chunks/[name]",
    treeShaking: production,
    external: [
      'tslib',
      'bootstrap',
      '@popperjs/core',
      'vue*',
      'ant-design-vue',
    ],
    plugins:[
      vue(),
    ],
  };
  if (output.endsWith('/')) {
    options.outdir = output;
    options.splitting = true;
  }
  else {
    options.outfile = output;
    options.splitting = false;
  }
  return options;
}

/**
 * call esbuild
 * @param {import('esbuild').BuildOptions} options esbuild options
 */
function esbuild(options) {
  if (watching) {
    options.watch = !watching ? false : {
      onRebuild(error, result) {
        if (error) {
          console.error('watch build failed: ');
          console.error(JSON.stringify(error, undefined, 2));
        }
        else {
          console.log('watch build succeeded: ');
          console.error(JSON.stringify(result, undefined, 2));
        }
      }
    };
  }

  console.log(`start build ${JSON.stringify(options.entryPoints)} -> ${options.outdir ?? options.outfile}`);

  const start = Date.now();

  return build(options).then(result => {
    const end = Date.now();
    if (watching) {
      console.log('watching ...');
    }
    else {
      console.log(`build completed in ${end - start} ms`);
      console.log(JSON.stringify(result, undefined, 2));
    }
  }).catch(ex => {
    console.error(ex);
    process.exit(1);
  });
}

export { createOptions, esbuild };
