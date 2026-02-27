import type { Hook } from '@oclif/core';
/**
 * Retrieves stored user data values from env variables or configstore,
 * with env variables taking precedent
 */
export default function getCurrentConfig(this: Hook.Context): {
    apiKey?: string;
    email?: string;
    project?: string;
};
