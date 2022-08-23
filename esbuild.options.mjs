const argv = process.argv;
const production = argv.indexOf('--prod') > -1;

/** @type {import('esbuild').BuildOptions} */
const options = {
  entryPoints: [
    './src/main.ts',
  ],
  tsconfig: './tsconfig.json',
  outdir: 'dist',
  format: 'esm',
  bundle: true,
  minify: production,
  sourcemap: !production,
  legalComments: 'none',
  splitting: true,
  chunkNames: "chunks/[name]",
  treeShaking: production,
  external: [
    'tslib',
    'bootstrap',
    '@popperjs/core',
  ],
  plugins:[],
};

export default options;
