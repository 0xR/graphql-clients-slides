// many postcss imports...
import { cssModuleNames } from '../webpack.config.babel.js';

const rootDir = path.resolve(__dirname, '..');

const postCssProcessor = postcss([
  LocalByDefault,
  ExtractImports,
  new Scope({
    generateScopedName: genericNames(cssModuleNames, rootDir),
  }),
  ExtractExports,
]);

export function process(src, filename) { // eslint-disable-line import/prefer-default-export
  if (filename.match(/\.css$/)) {
    const result = postCssProcessor.process(src, { from: filename });
    return `module.exports = ${JSON.stringify(result.root.tokens)}`;
  }
  return babelJest.process(src, filename);
}
