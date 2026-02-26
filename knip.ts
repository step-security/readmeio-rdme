import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['bin/dev.js', 'src/lib/help.ts'],
  ignore: ['dist-gha/**'],
  // used in `bin/dev.js`
  ignoreDependencies: ['tsx'],
};

export default config;
