import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import scss from 'rollup-plugin-scss';
import esbuild from 'rollup-plugin-esbuild';
import vue from 'rollup-plugin-vue';

// `pnpm run build` -> `production` is true
// `pnpm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

/** @type { import('rollup').RollupOptions } */
export default {
  input: [
    './src/main.ts'
  ],
  output: {
    dir: 'dist',
    chunkFileNames: production ? "chunks/[name]-[hash].js" : "chunks/[name].js",
    format: 'es',
    sourcemap: !production
  },
  watch: { clearScreen: false },
  treeshake: production,
  external: [
    'tslib', 'bootstrap', '@popperjs/core',
    'vue', 'vue-router', 'ant-design-vue'
  ],
  plugins: [
    vue({}),
    esbuild({ tsconfig: 'tsconfig.json', sourceMap: !production, minify: production, legalComments: 'none' }),
    scss({
      output: 'dist/main.css', sass: require('sass'), sourceMap: !production,
      outputStyle: !production ? 'expanded' : 'compressed'
    }),
    alias({}),
    nodeResolve({}),
    commonjs({}),
    replace({
      preventAssignment: false,
      values: {
        'process.env.NODE_ENV': production ? '"development"' : '"production"'
      }
    })
  ],
  preserveEntrySignatures: false
}
