import { terser } from "rollup-plugin-terser";

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
    terser({ format: { comments: false }})
  ]
}
