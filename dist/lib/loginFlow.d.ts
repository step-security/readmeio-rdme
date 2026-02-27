import type { Hook } from '@oclif/core';
/**
 * The prompt flow for logging a user in and writing the credentials to
 * `configstore`. This is a separate lib function because we reuse it both
 * in the `login` command as well as any time a user omits an API key.
 *
 * @returns A Promise-wrapped string with the logged-in user's credentials
 */
export default function loginFlow(this: Hook.Context, 
/**
 * An optional one-time passcode, if the user passes one in
 * via a flag to the the `login` command
 */
otp?: string): Promise<string>;
