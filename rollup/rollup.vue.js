import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

/** @type { import('rollup').RollupOptions } */
export default [
  {
    input: './node_modules/vue-router/dist/vue-router.esm-browser.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: './dist/libs/vue/vue-router.min.js'
    },
    external: ["vue"],
    plugins: [
      nodeResolve(),
      terser({ format: { comments: false }})
    ]
  },
  {
    input: './node_modules/vue-router/dist/vue-router.esm-browser.js',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: false,
      file: './dist/libs/vue/vue-router.js'
    },
    external: ["vue"],
    plugins: [
      nodeResolve()
    ]
  }
]
