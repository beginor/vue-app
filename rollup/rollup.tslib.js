import esbuild from 'rollup-plugin-esbuild';

/** @type { import('rollup').RollupOptions } */
export default {
  input: './node_modules/tslib/tslib.es6.js',
  output: {
    format: 'esm',
    exports: 'named',
    sourcemap: false,
    file: './dist/libs/tslib/tslib.min.js'
  },
  external: [],
  plugins: [
    esbuild({ minify: true, legalComments: 'none' })
  ]
}
