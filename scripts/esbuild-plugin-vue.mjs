import path from 'path';
import fs from 'fs';
import { parse, compileTemplate, compileScript, rewriteDefault } from 'vue/compiler-sfc';

const plugin = () => {
  /** @type {import('esbuild').Plugin} */
  const plugin = {
    name: 'vue',
    /**
     * plugin setup
     * @param {import('esbuild').PluginBuild} build
     */
    setup(build) {
      const absPath = path.resolve(
        process.cwd(),
        build.initialOptions.absWorkingDir ?? ''
      );

      /**
       * resolve path
       * @param {string} p
       * @param {string} resolveDir
       */
      const resolvePath = (p, resolveDir) => {
        if (p.startsWith('.')) {
          return path.resolve(resolveDir, p);
        }
        if (p.startsWith(`${absPath}/`)) {
          return p;
        }
        return path.join(absPath, p);
      };

      build.onResolve({ filter: /\.vue$/ }, args => {
        return {
          path: args.path,
          namespace: 'vue',
          pluginData: { resolveDir: args.resolveDir }
        }
      });

      build.onLoad({ filter: /\.vue$/, namespace: 'vue' }, async args => {
        const { resolveDir } = args.pluginData;
        const filePath = resolvePath(args.path, resolveDir);
        const content = await fs.promises.readFile(filePath, 'utf-8');
        const sfc = parse(content);
        const { script, scriptSetup, template } = sfc.descriptor;
        const isTs = script?.lang === 'ts' || scriptSetup?.lang === 'ts';
        const id = filePath;

        let contents = ``;
        let scriptContent = 'export default {}';

        if (!!scriptSetup) {
          scriptContent = compileScript(sfc.descriptor, { id }).content;
        }
        else if (!!script) {
          scriptContent = script.content;
        }
        contents += rewriteDefault(scriptContent, '_sfc_script');
        contents += '\n';

        if (!!template) {
          const compiledTpl = compileTemplate({
            id,
            source: template.content,
            filename: filePath,
            isProd: process.argv.indexOf('--prod') > -1,
            slotted: sfc.descriptor.slotted
          });
          contents += compiledTpl.code;

          contents += '_sfc_script.render = render\n';
          contents += `_sfc_script.__file = '${path.relative(absPath, filePath).replace(/\\/g, '/')}'\n`;
        }

        contents += 'export { _sfc_script as default }\n';

        return { contents, resolveDir, loader: isTs ? 'ts' : 'js' };
      });
    }
  };
  return plugin;
};

export default plugin;
