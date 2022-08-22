import { build } from 'esbuild';

import options from './esbuild.options.mjs';

const argv = process.argv;
const watching = argv.indexOf('--watch') > -1;

options.watch = !watching ? false : {
  onRebuild(error, result) {
    if (error) {
      console.error('Watch build failed: ');
      console.error(JSON.stringify(error, undefined, 2));
    }
    else {
      console.log('Watch build succeeded: ');
      console.error(JSON.stringify(result, undefined, 2));
    }
  }
};

const start = Date.now();

build(options).then(result => {
  const end = Date.now();
  if (watching) {
    console.log('watching ...');
  }
  else {
    console.log(`build completed in ${end - start} ms`);
    console.log(JSON.stringify(result, undefined, 2));
  }
}).catch(ex => {
  console.error(ex);
  process.exit(1);
});
