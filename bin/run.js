#!/usr/bin/env node

import * as core from '@actions/core';
import axios from 'axios';
import stringArgv from 'string-argv';

async function validateSubscription() {
  const API_URL = `https://agent.api.stepsecurity.io/v1/github/${process.env.GITHUB_REPOSITORY}/actions/subscription`;

  try {
    await axios.get(API_URL, { timeout: 3000 });
  } catch (error) {
    if (error instanceof axios.AxiosError && error.response && error.response.status === 403) {
      core.error('Subscription is not valid. Reach out to support@stepsecurity.io');
      process.exit(1);
    } else {
      core.info('Timeout or API not reachable. Continuing to next step.');
    }
  }
}

async function main() {
  await validateSubscription();
  /**
   * Disables the oclif engine warning. For some reason the versions that are flagged are totally separate from our engines requirements.
   *
   * @see {@link https://github.com/oclif/core/blob/70d3f192862a5adb548cbda68c6ee1ca8f724110/src/index.ts#L12}
   */
  process.env.OCLIF_DISABLE_ENGINE_WARNING = 'true';

  const { execute } = await import('@oclif/core');
  const opts = { dir: import.meta.url };
  if (process.env.INPUT_RDME) {
    opts.args = stringArgv(process.env.INPUT_RDME);
  }
  await execute(opts).then(msg => {
    if (msg && typeof msg === 'string') {
      // biome-ignore lint/suspicious/noConsole: This is in an executable.
      console.log(msg);
    }
  });
}

// biome-ignore lint/nursery/noFloatingPromises: We use rollup to bundle this file and it doesn't play well with top-level await.
main();
