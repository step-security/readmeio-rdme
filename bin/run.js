#!/usr/bin/env node

import fs from 'node:fs';

import * as core from '@actions/core';
import axios, { isAxiosError } from 'axios';
import stringArgv from 'string-argv';

import { normalizeStringArgvForGha } from '../dist/lib/normalizeStringArgvForGha.js';

async function validateSubscription() {
  let repoPrivate;
  const eventPath = process.env.GITHUB_EVENT_PATH;
  if (eventPath && fs.existsSync(eventPath)) {
    const payload = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
    repoPrivate = payload?.repository?.private;
  }

  const upstream = 'readmeio/rdme';
  const action = process.env.GITHUB_ACTION_REPOSITORY;
  const docsUrl = 'https://docs.stepsecurity.io/actions/stepsecurity-maintained-actions';

  core.info('');
  core.info('\u001b[1;36mStepSecurity Maintained Action\u001b[0m');
  core.info(`Secure drop-in replacement for ${upstream}`);
  if (repoPrivate === false) {
    core.info('\u001b[32m\u2713 Free for public repositories\u001b[0m');
  }
  core.info(`\u001b[36mLearn more:\u001b[0m ${docsUrl}`);
  core.info('');

  if (repoPrivate === false) return;
  const serverUrl = process.env.GITHUB_SERVER_URL || 'https://github.com';
  const body = { action: action || '' };

  if (serverUrl !== 'https://github.com') body.ghes_server = serverUrl;
  try {
    await axios.post(
      `https://agent.api.stepsecurity.io/v1/github/${process.env.GITHUB_REPOSITORY}/actions/maintained-actions-subscription`,
      body,
      { timeout: 3000 },
    );
  } catch (error) {
    if (isAxiosError(error) && error.response?.status === 403) {
      core.error(`\u001b[1;31mThis action requires a StepSecurity subscription for private repositories.\u001b[0m`);
      core.error(`\u001b[31mLearn how to enable a subscription: ${docsUrl}\u001b[0m`);
      process.exit(1);
    }
    core.info('Timeout or API not reachable. Continuing to next step.');
  }
}

async function main() {
  await validateSubscription();
  /**
   * Disables the oclif engine warning. For some reason the versions that are flagged are totally
   * separate from our engines requirements.
   *
   * @see {@link https://github.com/oclif/core/blob/70d3f192862a5adb548cbda68c6ee1ca8f724110/src/index.ts#L12}
   */
  process.env.OCLIF_DISABLE_ENGINE_WARNING = 'true';

  const { execute } = await import('@oclif/core');
  const opts = { dir: import.meta.url };
  if (process.env.INPUT_RDME) {
    opts.args = normalizeStringArgvForGha(stringArgv(process.env.INPUT_RDME));
  }
  await execute(opts).then(msg => {
    if (msg && typeof msg === 'string') {
      // oxlint-disable-next-line no-console -- This is in an executable.
      console.log(msg);
    }
  });
}

main();
