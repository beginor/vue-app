import rollup from 'rollup';
import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import css from 'rollup-plugin-css-only';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    input: './src/main.js',
    output: {
        format: 'iife',
        file: './dist/bundle.js',
        sourcemap: true
    },
    treeshake: false,
    external: [],
    plugins: [
        css({ output: './dist/bundle.css' }),
        alias({}),
        nodeResolve({ jsnext: true, module: true }),
        commonjs({
            include: []
        })
    ]
}
