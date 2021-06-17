import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

/** @type { import('rollup').RollupOptions } */
export default {
  input: ['./src/main.ts'],
  output: {
    dir: 'dist',
    chunkFileNames: production ? "chunks/[name]-[hash].js" : "chunks/[name].js",
    format: 'es',
    sourcemap: !production
  },
  watch: { buildDelay: 500 },
  treeshake: production,
  external: [
    'tslib', 'bootstrap', '@popperjs/core'
  ],
  plugins: [
    typescript({ tsconfig: 'tsconfig.json', sourceMap: !production }),
    css({ output: 'main.css' }),
    alias({}),
    nodeResolve({ mainFields: ['module', 'main'] }),
    commonjs({
      include: []
    }),
    production && terser({
      format: { comments: false }
    })
  ],
  preserveEntrySignatures: false
}
