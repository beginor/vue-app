import uglify from 'rollup-plugin-uglify';
import config from './rollup.config';

config.sourcemap = false;
config.treeshake = true;
config.plugins.push(uglify());

export default config;
