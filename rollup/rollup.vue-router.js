import nodeResolve from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';

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
      esbuild({ minify: true, legalComments: 'none' })
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
