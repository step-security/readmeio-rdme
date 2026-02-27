import type { OpenAPICommands } from '../index.js';
import OASNormalize from 'oas-normalize';
export type SpecFileType = OASNormalize['type'];
/**
 * Normalizes, validates, and (optionally) bundles an OpenAPI definition.
 */
export default function prepareOas(this: OpenAPICommands): Promise<{
    preparedSpec: string;
    /** A string indicating whether the spec file is a local path, a URL, etc. */
    specFileType: false | "json" | "buffer" | "path" | "string-json" | "string-yaml" | "url";
    /** The path/URL to the spec file */
    specPath: string;
    /** A string indicating whether the spec file is OpenAPI, Swagger, etc. */
    specType: "OpenAPI" | "Postman" | "Swagger" | "Unknown";
    /**
     * The `info.version` field, extracted from the normalized spec.
     * This is **not** the OpenAPI version (e.g., 3.1, 3.0),
     * this is a user input that we use to specify the version in ReadMe
     * (if they use the `useSpecVersion` flag)
     */
    specVersion: string;
    /**
     * This is the `openapi`, `swagger`, or `postman` specification version of their API definition.
     */
    definitionVersion: {
        specification: "openapi" | "postman" | "swagger";
        version: string | "unknown";
    };
}>;
