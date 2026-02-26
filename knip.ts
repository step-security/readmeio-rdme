import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['bin/dev.js', 'src/lib/help.ts'],
  ignore: ['dist-gha/**', 'bin/set-version-output.js'],
  // used in `bin/dev.js`
  ignoreDependencies: ['tsx'],
};

export default config;
