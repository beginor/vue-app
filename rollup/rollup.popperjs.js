import esbuild from 'rollup-plugin-esbuild';

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
      esbuild({ minify: true, legalComments: 'external' })
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
