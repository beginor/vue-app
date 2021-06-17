import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import replace from "@rollup/plugin-replace";

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
      replace({
        preventAssignment: false,
        values: {
          "process.env.NODE_ENV": '"production"'
        }
      }),
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
      nodeResolve(),
      replace({
        preventAssignment: false,
        values: {
          "process.env.NODE_ENV": '"development"'
        }
      })
    ]
  }
]
