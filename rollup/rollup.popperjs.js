import { terser } from "rollup-plugin-terser";

/** @type { import('rollup').RollupOptions } */
export default [
  {
    input: './node_modules/@popperjs/core/dist/esm/index.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: './dist/libs/@popperjs/core.min.js'
    },
    external: [],
    plugins: [
      terser({ format: { comments: false }})
    ]
  },
  {
    input: './node_modules/@popperjs/core/dist/esm/index.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: './dist/libs/@popperjs/core.js'
    },
    external: [],
    plugins: []
  }
]
