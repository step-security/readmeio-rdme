/**
 * This is a snapshot of the OpenAPI description for ReadMe APIv2.
 *
 * This is used both for typechecking as well as for runtime validation.
 * We use ajv to validate the user data against schemas in this document.
 *
 * @see {@link https://docs.readme.com/main/openapi/readme-api-v2-beta.json}
 */
declare const document: {
    readonly openapi: "3.1.0";
    readonly info: {
        readonly description: "Create beautiful product and API documentation with our developer friendly platform.";
        readonly version: "2.0.0";
        readonly title: "ReadMe API";
        readonly 'x-readme-deploy': "5.428.0";
        readonly termsOfService: "https://readme.com/tos";
        readonly contact: {
            readonly name: "API Support";
            readonly url: "https://docs.readme.com/main/docs/need-more-support";
            readonly email: "support@readme.io";
        };
    };
    readonly components: {
        readonly securitySchemes: {
            readonly bearer: {
                readonly type: "http";
                readonly scheme: "bearer";
                readonly description: "A bearer token that will be supplied within an `Authentication` header as `bearer <token>`.";
            };
        };
        readonly schemas: {};
    };
    readonly paths: {
        readonly '/projects/{subdomain}/apikeys': {
            readonly post: {
                readonly operationId: "createAPIKey";
                readonly summary: "Create an API key";
                readonly tags: ["API Keys"];
                readonly description: "Create an API key for your ReadMe project.";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly label: {
                                        readonly allOf: [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "string";
                                            readonly minLength: 1;
                                        }];
                                    };
                                };
                                readonly required: ["label"];
                                readonly additionalProperties: false;
                            };
                        };
                    };
                    readonly required: true;
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                        readonly maxLength: 30;
                    };
                    readonly in: "path";
                    readonly name: "subdomain";
                    readonly required: true;
                    readonly description: "The subdomain of your project.";
                }];
                readonly responses: {
                    readonly '201': {
                        readonly description: "Created";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly token: {
                                                    readonly type: "string";
                                                    readonly pattern: "rdme_\\w+";
                                                };
                                                readonly label: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly last_accessed_on: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly nullable: true;
                                                    readonly description: "An ISO 8601 formatted date for when the API key was last accessed.";
                                                };
                                                readonly created_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the API key was created.";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)\\/apikeys\\/[a-f\\d]{24}";
                                                };
                                            };
                                            readonly required: ["token", "label", "last_accessed_on", "created_at", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
            readonly get: {
                readonly operationId: "getAPIKeys";
                readonly summary: "Get your API keys";
                readonly tags: ["API Keys"];
                readonly description: "Get the API keys for your ReadMe project.";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "number";
                        readonly minimum: 1;
                        readonly default: 1;
                    };
                    readonly in: "query";
                    readonly name: "page";
                    readonly required: false;
                    readonly description: "Used to specify further pages (starts at 1).";
                }, {
                    readonly schema: {
                        readonly type: "number";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 10;
                    };
                    readonly in: "query";
                    readonly name: "per_page";
                    readonly required: false;
                    readonly description: "Number of items to include in pagination (up to 100, defaults to 10).";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                        readonly maxLength: 30;
                    };
                    readonly in: "path";
                    readonly name: "subdomain";
                    readonly required: true;
                    readonly description: "The subdomain of your project.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly total: {
                                            readonly type: "number";
                                        };
                                        readonly page: {
                                            readonly type: "number";
                                        };
                                        readonly per_page: {
                                            readonly type: "number";
                                        };
                                        readonly paging: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly next: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly previous: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly first: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly last: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                            };
                                            readonly required: ["next", "previous", "first", "last"];
                                            readonly additionalProperties: false;
                                        };
                                        readonly data: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly token: {
                                                        readonly type: "string";
                                                        readonly pattern: "rdme_\\w+";
                                                    };
                                                    readonly label: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly last_accessed_on: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                        readonly nullable: true;
                                                        readonly description: "An ISO 8601 formatted date for when the API key was last accessed.";
                                                    };
                                                    readonly created_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                        readonly description: "An ISO 8601 formatted date for when the API key was created.";
                                                    };
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)\\/apikeys\\/[a-f\\d]{24}";
                                                    };
                                                };
                                                readonly required: ["token", "label", "last_accessed_on", "created_at", "uri"];
                                                readonly additionalProperties: false;
                                            };
                                        };
                                    };
                                    readonly required: ["total", "page", "per_page", "paging", "data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/projects/{subdomain}/apikeys/{api_key_id}': {
            readonly delete: {
                readonly operationId: "deleteAPIKey";
                readonly summary: "Delete an API key";
                readonly tags: ["API Keys"];
                readonly description: "Delete an API key from your ReadMe project.";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "[a-f\\d]{24}";
                    };
                    readonly in: "path";
                    readonly name: "api_key_id";
                    readonly required: true;
                    readonly description: "The unique identifier for your API key.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                        readonly maxLength: 30;
                    };
                    readonly in: "path";
                    readonly name: "subdomain";
                    readonly required: true;
                    readonly description: "The subdomain of your project.";
                }];
                readonly responses: {
                    readonly '204': {
                        readonly description: "No Content";
                    };
                };
            };
            readonly get: {
                readonly operationId: "getAPIKey";
                readonly summary: "Get an API key";
                readonly tags: ["API Keys"];
                readonly description: "Get an API key for your ReadMe project.";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "[a-f\\d]{24}";
                    };
                    readonly in: "path";
                    readonly name: "api_key_id";
                    readonly required: true;
                    readonly description: "The unique identifier for your API key.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                        readonly maxLength: 30;
                    };
                    readonly in: "path";
                    readonly name: "subdomain";
                    readonly required: true;
                    readonly description: "The subdomain of your project.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly token: {
                                                    readonly type: "string";
                                                    readonly pattern: "rdme_\\w+";
                                                };
                                                readonly label: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly last_accessed_on: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly nullable: true;
                                                    readonly description: "An ISO 8601 formatted date for when the API key was last accessed.";
                                                };
                                                readonly created_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the API key was created.";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)\\/apikeys\\/[a-f\\d]{24}";
                                                };
                                            };
                                            readonly required: ["token", "label", "last_accessed_on", "created_at", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
            readonly patch: {
                readonly operationId: "updateAPIKey";
                readonly summary: "Update an API key";
                readonly tags: ["API Keys"];
                readonly description: "Update an API key on your ReadMe project.";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly label: {
                                        readonly allOf: [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "string";
                                            readonly minLength: 1;
                                        }];
                                    };
                                };
                                readonly required: ["label"];
                                readonly additionalProperties: false;
                            };
                        };
                    };
                    readonly required: true;
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "[a-f\\d]{24}";
                    };
                    readonly in: "path";
                    readonly name: "api_key_id";
                    readonly required: true;
                    readonly description: "The unique identifier for your API key.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                        readonly maxLength: 30;
                    };
                    readonly in: "path";
                    readonly name: "subdomain";
                    readonly required: true;
                    readonly description: "The subdomain of your project.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly token: {
                                                    readonly type: "string";
                                                    readonly pattern: "rdme_\\w+";
                                                };
                                                readonly label: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly last_accessed_on: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly nullable: true;
                                                    readonly description: "An ISO 8601 formatted date for when the API key was last accessed.";
                                                };
                                                readonly created_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the API key was created.";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)\\/apikeys\\/[a-f\\d]{24}";
                                                };
                                            };
                                            readonly required: ["token", "label", "last_accessed_on", "created_at", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches/{branch}/apis': {
            readonly get: {
                readonly operationId: "getAPIs";
                readonly summary: "Get all API definitions";
                readonly tags: ["APIs"];
                readonly description: "Get all API definitions from your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly total: {
                                            readonly type: "number";
                                        };
                                        readonly data: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly created_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                        readonly description: "An ISO 8601 formatted date for when the API definition was created.";
                                                    };
                                                    readonly filename: {
                                                        readonly type: "string";
                                                        readonly description: "This is the unique identifier, its filename, for the API definition.";
                                                    };
                                                    readonly legacy_id: {
                                                        readonly type: "string";
                                                        readonly pattern: "[a-f\\d]{24}";
                                                        readonly nullable: true;
                                                        readonly description: "The legacy ID of your API definition. This is only used for legacy rdme CLI workflows and only applies if your project, and this API definition, predates ReadMe Refactored. We consider this value to be deprecated and recommend against relying on it going forward.";
                                                    };
                                                    readonly source: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly current: {
                                                                readonly type: "string";
                                                                readonly enum: ["api", "apidesigner", "apieditor", "bidi", "form", "postman", "rdme", "rdme_github", "url"];
                                                            };
                                                            readonly original: {
                                                                readonly type: "string";
                                                                readonly enum: ["api", "apidesigner", "apieditor", "bidi", "form", "postman", "rdme", "rdme_github", "url"];
                                                            };
                                                        };
                                                        readonly required: ["current", "original"];
                                                        readonly additionalProperties: false;
                                                        readonly description: "The sources by which this API definition was ingested.";
                                                    };
                                                    readonly type: {
                                                        readonly type: "string";
                                                        readonly enum: ["openapi", "postman", "swagger", "unknown"];
                                                        readonly description: "The type of API definition. This will be `unknown` if the API definition has either not yet been processed or failed with validation errors.";
                                                    };
                                                    readonly updated_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                        readonly description: "An ISO 8601 formatted date for when the API definition was last updated.";
                                                    };
                                                    readonly upload: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly status: {
                                                                readonly type: "string";
                                                                readonly enum: ["pending", "failed", "done", "pending_update", "failed_update"];
                                                                readonly description: "The status of the API definition upload.";
                                                            };
                                                            readonly reason: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "The reason for the upload failure if it failed.";
                                                            };
                                                            readonly warnings: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "Any fixable warnings that may exist within the API definition if the upload was ingested without errors.";
                                                            };
                                                        };
                                                        readonly required: ["status", "reason", "warnings"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/apis\\/((([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+.(json|yaml|yml)))";
                                                        readonly description: "A URI to the API definition resource.";
                                                    };
                                                };
                                                readonly required: ["created_at", "filename", "legacy_id", "source", "type", "updated_at", "upload", "uri"];
                                                readonly additionalProperties: false;
                                            };
                                        };
                                    };
                                    readonly required: ["total", "data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
            readonly post: {
                readonly operationId: "createAPI";
                readonly summary: "Create an API definition";
                readonly tags: ["APIs"];
                readonly description: "Create an API definition in the API Reference section of your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly requestBody: {
                    readonly content: {
                        readonly 'multipart/form-data': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly schema: {
                                        readonly description: "The API definition.";
                                    };
                                    readonly upload_source: {
                                        readonly default: "form";
                                        readonly description: "The source that the API definition is being uploaded through.";
                                    };
                                    readonly url: {
                                        readonly description: "The URL where the API definition is hosted.";
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "The API definition to upload. We provide full support for OpenAPI 3.x and Swagger 2.0 and experimental support for Postman collections.";
                            };
                        };
                    };
                    readonly description: "The API definition to upload. We provide full support for OpenAPI 3.x and Swagger 2.0 and experimental support for Postman collections.";
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '202': {
                        readonly description: "Accepted";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly upload: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly status: {
                                                            readonly type: "string";
                                                            readonly enum: ["pending", "failed", "done", "pending_update", "failed_update"];
                                                            readonly description: "The status of the API definition upload.";
                                                        };
                                                    };
                                                    readonly required: ["status"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/apis\\/((([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+.(json|yaml|yml)))";
                                                    readonly description: "A URI to the API definition resource.";
                                                };
                                            };
                                            readonly required: ["upload", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches/{branch}/apis/{filename}': {
            readonly get: {
                readonly operationId: "getAPI";
                readonly summary: "Get an API definition";
                readonly tags: ["APIs"];
                readonly description: "Get an API definition from your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+.(json|yaml|yml))";
                    };
                    readonly in: "path";
                    readonly name: "filename";
                    readonly required: true;
                    readonly description: "The filename of the API definition to retrieve.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly created_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the API definition was created.";
                                                };
                                                readonly filename: {
                                                    readonly type: "string";
                                                    readonly description: "This is the unique identifier, its filename, for the API definition.";
                                                };
                                                readonly legacy_id: {
                                                    readonly type: "string";
                                                    readonly pattern: "[a-f\\d]{24}";
                                                    readonly nullable: true;
                                                    readonly description: "The legacy ID of your API definition. This is only used for legacy rdme CLI workflows and only applies if your project, and this API definition, predates ReadMe Refactored. We consider this value to be deprecated and recommend against relying on it going forward.";
                                                };
                                                readonly source: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly current: {
                                                            readonly type: "string";
                                                            readonly enum: ["api", "apidesigner", "apieditor", "bidi", "form", "postman", "rdme", "rdme_github", "url"];
                                                        };
                                                        readonly original: {
                                                            readonly type: "string";
                                                            readonly enum: ["api", "apidesigner", "apieditor", "bidi", "form", "postman", "rdme", "rdme_github", "url"];
                                                        };
                                                    };
                                                    readonly required: ["current", "original"];
                                                    readonly additionalProperties: false;
                                                    readonly description: "The sources by which this API definition was ingested.";
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: ["openapi", "postman", "swagger", "unknown"];
                                                    readonly description: "The type of API definition. This will be `unknown` if the API definition has either not yet been processed or failed with validation errors.";
                                                };
                                                readonly updated_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the API definition was last updated.";
                                                };
                                                readonly upload: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly status: {
                                                            readonly type: "string";
                                                            readonly enum: ["pending", "failed", "done", "pending_update", "failed_update"];
                                                            readonly description: "The status of the API definition upload.";
                                                        };
                                                        readonly reason: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "The reason for the upload failure if it failed.";
                                                        };
                                                        readonly warnings: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Any fixable warnings that may exist within the API definition if the upload was ingested without errors.";
                                                        };
                                                    };
                                                    readonly required: ["status", "reason", "warnings"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/apis\\/((([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+.(json|yaml|yml)))";
                                                    readonly description: "A URI to the API definition resource.";
                                                };
                                                readonly schema: {
                                                    readonly nullable: true;
                                                    readonly description: "The API schema.";
                                                };
                                            };
                                            readonly required: ["created_at", "filename", "legacy_id", "source", "type", "updated_at", "upload", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
            readonly delete: {
                readonly operationId: "deleteAPI";
                readonly summary: "Delete an API definition";
                readonly tags: ["APIs"];
                readonly description: "Delete an API definition from the API Reference section of your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+.(json|yaml|yml))";
                    };
                    readonly in: "path";
                    readonly name: "filename";
                    readonly required: true;
                    readonly description: "The filename of the API definition to retrieve.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '204': {
                        readonly description: "No Content";
                    };
                };
            };
            readonly put: {
                readonly operationId: "updateAPI";
                readonly summary: "Update an API definition";
                readonly tags: ["APIs"];
                readonly description: "Updates an API definition in the API Reference section of your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly requestBody: {
                    readonly content: {
                        readonly 'multipart/form-data': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly schema: {
                                        readonly description: "The API definition.";
                                    };
                                    readonly upload_source: {
                                        readonly default: "form";
                                        readonly description: "The source that the API definition is being uploaded through.";
                                    };
                                    readonly url: {
                                        readonly description: "The URL where the API definition is hosted.";
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "The API definition to upload. We provide full support for OpenAPI 3.x and Swagger 2.0 and experimental support for Postman collections.";
                            };
                        };
                    };
                    readonly description: "The API definition to upload. We provide full support for OpenAPI 3.x and Swagger 2.0 and experimental support for Postman collections.";
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+.(json|yaml|yml))";
                    };
                    readonly in: "path";
                    readonly name: "filename";
                    readonly required: true;
                    readonly description: "The filename of the API definition to retrieve.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '202': {
                        readonly description: "Accepted";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly upload: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly status: {
                                                            readonly type: "string";
                                                            readonly enum: ["pending", "failed", "done", "pending_update", "failed_update"];
                                                            readonly description: "The status of the API definition upload.";
                                                        };
                                                    };
                                                    readonly required: ["status"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/apis\\/((([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+.(json|yaml|yml)))";
                                                    readonly description: "A URI to the API definition resource.";
                                                };
                                            };
                                            readonly required: ["upload", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/apply': {
            readonly get: {
                readonly operationId: "getOpenRoles";
                readonly summary: "Get open roles";
                readonly tags: ["Apply to ReadMe"];
                readonly description: "Returns all the roles we're hiring for at ReadMe!";
                readonly security: [];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly total: {
                                            readonly type: "number";
                                        };
                                        readonly data: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly slug: {
                                                        readonly type: "string";
                                                    };
                                                    readonly title: {
                                                        readonly type: "string";
                                                    };
                                                    readonly description: {
                                                        readonly type: "string";
                                                        readonly description: "The description for this open position. This content is formatted as HTML.";
                                                    };
                                                    readonly pullquote: {
                                                        readonly type: "string";
                                                        readonly description: "A short pullquote for the open position.";
                                                    };
                                                    readonly location: {
                                                        readonly type: "string";
                                                        readonly description: "Where this position is located at.";
                                                    };
                                                    readonly department: {
                                                        readonly type: "string";
                                                        readonly description: "The internal organization you'll be working in.";
                                                    };
                                                    readonly url: {
                                                        readonly type: "string";
                                                        readonly format: "uri";
                                                        readonly description: "The place where you can apply for the position!";
                                                    };
                                                };
                                                readonly required: ["slug", "title", "description", "pullquote", "location", "department", "url"];
                                                readonly additionalProperties: false;
                                            };
                                        };
                                    };
                                    readonly required: ["total", "data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
            readonly post: {
                readonly operationId: "applyToReadMe";
                readonly summary: "Submit your application!";
                readonly tags: ["Apply to ReadMe"];
                readonly description: "This endpoint will let you apply to a job at ReadMe programatically, without having to go through our UI!";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly type: "string";
                                        readonly minLength: 1;
                                        readonly description: "Your full name";
                                    };
                                    readonly email: {
                                        readonly type: "string";
                                        readonly format: "email";
                                        readonly default: "you@example.com";
                                        readonly description: "A valid email we can reach you at.";
                                    };
                                    readonly job: {
                                        readonly type: "string";
                                        readonly description: "The job you're looking to apply for (https://readme.com/careers).";
                                    };
                                    readonly pronouns: {
                                        readonly type: "string";
                                        readonly description: "Learn more at https://lgbtlifecenter.org/pronouns/";
                                    };
                                    readonly linkedin: {
                                        readonly type: "string";
                                        readonly format: "uri";
                                        readonly description: "What have you been up to the past few years?";
                                    };
                                    readonly github: {
                                        readonly type: "string";
                                        readonly format: "uri";
                                        readonly description: "Or Bitbucket, GitLab or anywhere else your code is hosted!";
                                    };
                                    readonly coverLetter: {
                                        readonly type: "string";
                                        readonly description: "What should we know about you?";
                                    };
                                    readonly dont_really_apply: {
                                        readonly type: "boolean";
                                        readonly default: false;
                                        readonly description: "If you set this to true, we will not actually apply you to the job.";
                                    };
                                };
                                readonly required: ["name", "job"];
                                readonly additionalProperties: false;
                            };
                        };
                    };
                    readonly required: true;
                };
                readonly security: [];
                readonly responses: {
                    readonly '201': {
                        readonly description: "Created";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly message: {
                                            readonly type: "string";
                                        };
                                        readonly keyvalues: {
                                            readonly type: "string";
                                        };
                                        readonly careers: {
                                            readonly type: "string";
                                        };
                                        readonly 'questions?': {
                                            readonly type: "string";
                                        };
                                        readonly poem: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly required: ["message", "keyvalues", "careers", "questions?", "poem"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches/{branch}/categories': {
            readonly post: {
                readonly operationId: "createCategory";
                readonly summary: "Create a category";
                readonly tags: ["Categories"];
                readonly description: "Create a category in your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly title: {
                                        readonly type: "string";
                                        readonly description: "The category's name.";
                                    };
                                    readonly section: {
                                        readonly type: "string";
                                        readonly enum: ["guide", "reference"];
                                        readonly default: "guide";
                                        readonly description: "The section of your documentation where the category resides.";
                                    };
                                };
                                readonly required: ["title"];
                                readonly additionalProperties: false;
                            };
                        };
                    };
                    readonly required: true;
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '201': {
                        readonly description: "Created";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly title: {
                                                    readonly type: "string";
                                                    readonly description: "The category's name.";
                                                };
                                                readonly section: {
                                                    readonly type: "string";
                                                    readonly enum: ["guide", "reference"];
                                                    readonly default: "guide";
                                                    readonly description: "The section of your documentation where the category resides.";
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project that this category belongs to.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/categories\\/(guides|reference)\\/((.*))";
                                                    readonly description: "A URI to the category resource.";
                                                };
                                            };
                                            readonly required: ["title", "links", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches/{branch}/categories/{section}': {
            readonly get: {
                readonly operationId: "getCategories";
                readonly summary: "Get all categories";
                readonly tags: ["Categories"];
                readonly description: "Get all categories within a section of your ReadMe project.\n\nThe sorting of this data is dependent upon the order of the categories in your sidebar.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly enum: ["guides", "reference"];
                    };
                    readonly in: "path";
                    readonly name: "section";
                    readonly required: true;
                    readonly description: "The section of your documentation to get categories from.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly total: {
                                            readonly type: "number";
                                        };
                                        readonly data: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly title: {
                                                        readonly type: "string";
                                                        readonly description: "The category's name.";
                                                    };
                                                    readonly section: {
                                                        readonly type: "string";
                                                        readonly enum: ["guide", "reference"];
                                                        readonly default: "guide";
                                                        readonly description: "The section of your documentation where the category resides.";
                                                    };
                                                    readonly links: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly project: {
                                                                readonly type: "string";
                                                                readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                                readonly description: "A URI to the project that this category belongs to.";
                                                            };
                                                        };
                                                        readonly required: ["project"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/categories\\/(guides|reference)\\/((.*))";
                                                        readonly description: "A URI to the category resource.";
                                                    };
                                                };
                                                readonly required: ["title", "links", "uri"];
                                                readonly additionalProperties: false;
                                            };
                                        };
                                    };
                                    readonly required: ["total", "data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches/{branch}/categories/{section}/{title}': {
            readonly get: {
                readonly operationId: "getCategory";
                readonly summary: "Get a category";
                readonly tags: ["Categories"];
                readonly description: "Get a category in your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly enum: ["guides", "reference"];
                        readonly default: "guides";
                    };
                    readonly in: "path";
                    readonly name: "section";
                    readonly required: true;
                    readonly description: "The section of your documentation where the category resides.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                    };
                    readonly in: "path";
                    readonly name: "title";
                    readonly required: true;
                    readonly description: "The category's name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly title: {
                                                    readonly type: "string";
                                                    readonly description: "The category's name.";
                                                };
                                                readonly section: {
                                                    readonly type: "string";
                                                    readonly enum: ["guide", "reference"];
                                                    readonly default: "guide";
                                                    readonly description: "The section of your documentation where the category resides.";
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project that this category belongs to.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/categories\\/(guides|reference)\\/((.*))";
                                                    readonly description: "A URI to the category resource.";
                                                };
                                            };
                                            readonly required: ["title", "links", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
            readonly delete: {
                readonly operationId: "deleteCategory";
                readonly summary: "Delete a category";
                readonly tags: ["Categories"];
                readonly description: "Delete a category from your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly enum: ["guides", "reference"];
                        readonly default: "guides";
                    };
                    readonly in: "path";
                    readonly name: "section";
                    readonly required: true;
                    readonly description: "The section of your documentation where the category resides.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                    };
                    readonly in: "path";
                    readonly name: "title";
                    readonly required: true;
                    readonly description: "The category's name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '204': {
                        readonly description: "No Content";
                    };
                };
            };
            readonly patch: {
                readonly operationId: "updateCategory";
                readonly summary: "Update a category";
                readonly tags: ["Categories"];
                readonly description: "Update an existing category in your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly title: {
                                        readonly type: "string";
                                        readonly description: "The category's name.";
                                    };
                                    readonly section: {
                                        readonly type: "string";
                                        readonly enum: ["guide", "reference"];
                                        readonly default: "guide";
                                        readonly description: "The section of your documentation where the category resides.";
                                    };
                                    readonly position: {
                                        readonly type: "number";
                                        readonly description: "The position of the category in your project's sidebar.";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                    };
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly enum: ["guides", "reference"];
                        readonly default: "guides";
                    };
                    readonly in: "path";
                    readonly name: "section";
                    readonly required: true;
                    readonly description: "The section of your documentation where the category resides.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                    };
                    readonly in: "path";
                    readonly name: "title";
                    readonly required: true;
                    readonly description: "The category's name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly title: {
                                                    readonly type: "string";
                                                    readonly description: "The category's name.";
                                                };
                                                readonly section: {
                                                    readonly type: "string";
                                                    readonly enum: ["guide", "reference"];
                                                    readonly default: "guide";
                                                    readonly description: "The section of your documentation where the category resides.";
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project that this category belongs to.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/categories\\/(guides|reference)\\/((.*))";
                                                    readonly description: "A URI to the category resource.";
                                                };
                                            };
                                            readonly required: ["title", "links", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches/{branch}/categories/{section}/{title}/pages': {
            readonly get: {
                readonly operationId: "getCategoryPages";
                readonly summary: "Get the pages within a category";
                readonly tags: ["Categories"];
                readonly description: "Get a pages that exist within a category in your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly enum: ["guides", "reference"];
                        readonly default: "guides";
                    };
                    readonly in: "path";
                    readonly name: "section";
                    readonly required: true;
                    readonly description: "The section of your documentation where the category resides.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                    };
                    readonly in: "path";
                    readonly name: "title";
                    readonly required: true;
                    readonly description: "The category's name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly total: {
                                            readonly type: "number";
                                        };
                                        readonly data: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly category: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly uri: {
                                                                readonly type: "string";
                                                                readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/categories\\/(guides|reference)\\/((.*))";
                                                                readonly description: "A URI to the category resource.";
                                                            };
                                                        };
                                                        readonly required: ["uri"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly parent: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly uri: {
                                                                readonly type: "string";
                                                                readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                                readonly nullable: true;
                                                                readonly description: "A URI to the parent page resource including the page ID or slug.";
                                                            };
                                                        };
                                                        readonly required: ["uri"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly slug: {
                                                        readonly allOf: [{
                                                            readonly type: "string";
                                                        }, {
                                                            readonly type: "string";
                                                            readonly minLength: 1;
                                                        }];
                                                        readonly description: "The accessible URL slug for the page.";
                                                    };
                                                    readonly title: {
                                                        readonly type: "string";
                                                    };
                                                    readonly updated_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                        readonly description: "An ISO 8601 formatted date for when the page was updated.";
                                                    };
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                        readonly description: "A URI to the page resource.";
                                                    };
                                                };
                                                readonly required: ["category", "parent", "slug", "title", "updated_at", "uri"];
                                                readonly additionalProperties: false;
                                            };
                                        };
                                    };
                                    readonly required: ["total", "data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/changelogs': {
            readonly post: {
                readonly operationId: "createChangelog";
                readonly summary: "Create a changelog entry";
                readonly tags: ["Changelog"];
                readonly description: "Create a new changelog entry in your ReadMe project.";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly author: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly content: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly body: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly created_at: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                        readonly description: "An ISO 8601 formatted date for when the changelog was created.";
                                    };
                                    readonly metadata: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly description: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly image: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                        readonly nullable: true;
                                                    };
                                                    readonly url: {
                                                        readonly type: "string";
                                                        readonly format: "uri";
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly keywords: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly title: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly privacy: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly view: {
                                                readonly type: "string";
                                                readonly enum: ["public", "anyone_with_link"];
                                                readonly default: "anyone_with_link";
                                                readonly description: "The visibility of this changelog.";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly slug: {
                                        readonly type: "string";
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: ["none", "added", "fixed", "improved", "deprecated", "removed"];
                                        readonly default: "none";
                                        readonly description: "The type of changelog that this is.";
                                    };
                                };
                                readonly required: ["title"];
                                readonly additionalProperties: false;
                            };
                        };
                    };
                    readonly required: true;
                };
                readonly responses: {
                    readonly '201': {
                        readonly description: "Created";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly author: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly id: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "User ID of the changelog author.";
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Full name of the user who created the changelog.";
                                                        };
                                                    };
                                                    readonly required: ["id", "name"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly content: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly body: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["body"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly created_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the changelog was created.";
                                                };
                                                readonly metadata: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly description: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly image: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly uri: {
                                                                    readonly type: "string";
                                                                    readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                    readonly nullable: true;
                                                                    readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                };
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly format: "uri";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["uri", "url"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly keywords: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "A comma-separated list of keywords to place into your changelog metadata.";
                                                        };
                                                        readonly title: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["description", "image", "keywords", "title"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "anyone_with_link"];
                                                            readonly default: "anyone_with_link";
                                                            readonly description: "The visibility of this changelog.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly slug: {
                                                    readonly type: "string";
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: ["none", "added", "fixed", "improved", "deprecated", "removed"];
                                                    readonly default: "none";
                                                    readonly description: "The type of changelog that this is.";
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project that this changelog belongs to.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly updated_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the changelog was updated.";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/changelogs\\/([a-f\\d]{24}|([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                };
                                            };
                                            readonly required: ["author", "content", "created_at", "metadata", "privacy", "slug", "title", "links", "updated_at", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
            readonly get: {
                readonly operationId: "getChangelogs";
                readonly summary: "Get all changelog entries";
                readonly tags: ["Changelog"];
                readonly description: "Get all changelog entries from your ReadMe project.";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "number";
                        readonly minimum: 1;
                        readonly default: 1;
                    };
                    readonly in: "query";
                    readonly name: "page";
                    readonly required: false;
                    readonly description: "Used to specify further pages (starts at 1).";
                }, {
                    readonly schema: {
                        readonly type: "number";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 10;
                    };
                    readonly in: "query";
                    readonly name: "per_page";
                    readonly required: false;
                    readonly description: "Number of items to include in pagination (up to 100, defaults to 10).";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly enum: ["public", "anyone_with_link", "all"];
                        readonly default: "all";
                    };
                    readonly in: "query";
                    readonly name: "visibility";
                    readonly required: false;
                    readonly description: "The visibility setting (`privacy.view`) for the changelog entries you wish to retrieve. Defaults to `all`.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly total: {
                                            readonly type: "number";
                                        };
                                        readonly page: {
                                            readonly type: "number";
                                        };
                                        readonly per_page: {
                                            readonly type: "number";
                                        };
                                        readonly paging: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly next: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly previous: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly first: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly last: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                            };
                                            readonly required: ["next", "previous", "first", "last"];
                                            readonly additionalProperties: false;
                                        };
                                        readonly data: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly author: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly id: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "User ID of the changelog author.";
                                                            };
                                                            readonly name: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "Full name of the user who created the changelog.";
                                                            };
                                                        };
                                                        readonly required: ["id", "name"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly content: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly body: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                            };
                                                        };
                                                        readonly required: ["body"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly created_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                        readonly description: "An ISO 8601 formatted date for when the changelog was created.";
                                                    };
                                                    readonly metadata: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly description: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                            };
                                                            readonly image: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly uri: {
                                                                        readonly type: "string";
                                                                        readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                        readonly nullable: true;
                                                                        readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                    };
                                                                    readonly url: {
                                                                        readonly type: "string";
                                                                        readonly format: "uri";
                                                                        readonly nullable: true;
                                                                    };
                                                                };
                                                                readonly required: ["uri", "url"];
                                                                readonly additionalProperties: false;
                                                            };
                                                            readonly keywords: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "A comma-separated list of keywords to place into your changelog metadata.";
                                                            };
                                                            readonly title: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                            };
                                                        };
                                                        readonly required: ["description", "image", "keywords", "title"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly privacy: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly view: {
                                                                readonly type: "string";
                                                                readonly enum: ["public", "anyone_with_link"];
                                                                readonly default: "anyone_with_link";
                                                                readonly description: "The visibility of this changelog.";
                                                            };
                                                        };
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly slug: {
                                                        readonly type: "string";
                                                    };
                                                    readonly title: {
                                                        readonly type: "string";
                                                    };
                                                    readonly type: {
                                                        readonly type: "string";
                                                        readonly enum: ["none", "added", "fixed", "improved", "deprecated", "removed"];
                                                        readonly default: "none";
                                                        readonly description: "The type of changelog that this is.";
                                                    };
                                                    readonly links: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly project: {
                                                                readonly type: "string";
                                                                readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                                readonly description: "A URI to the project that this changelog belongs to.";
                                                            };
                                                        };
                                                        readonly required: ["project"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly updated_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                        readonly description: "An ISO 8601 formatted date for when the changelog was updated.";
                                                    };
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/changelogs\\/([a-f\\d]{24}|([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                    };
                                                };
                                                readonly required: ["author", "content", "created_at", "metadata", "privacy", "slug", "title", "links", "updated_at", "uri"];
                                                readonly additionalProperties: false;
                                            };
                                        };
                                    };
                                    readonly required: ["total", "page", "per_page", "paging", "data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/changelogs/{identifier}': {
            readonly get: {
                readonly operationId: "getChangelog";
                readonly summary: "Get a changelog entry";
                readonly tags: ["Changelog"];
                readonly description: "Get a changelog entry from your ReadMe project.";
                readonly parameters: [{
                    readonly schema: {
                        readonly anyOf: [{
                            readonly type: "string";
                            readonly pattern: "[a-f\\d]{24}";
                            readonly description: "A unique identifier for the resource.";
                        }, {
                            readonly type: "string";
                            readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                            readonly description: "A URL-safe representation of the resource.";
                        }];
                    };
                    readonly in: "path";
                    readonly name: "identifier";
                    readonly required: true;
                    readonly description: "The unique identifier for the resource.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly author: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly id: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "User ID of the changelog author.";
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Full name of the user who created the changelog.";
                                                        };
                                                    };
                                                    readonly required: ["id", "name"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly content: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly body: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["body"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly created_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the changelog was created.";
                                                };
                                                readonly metadata: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly description: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly image: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly uri: {
                                                                    readonly type: "string";
                                                                    readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                    readonly nullable: true;
                                                                    readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                };
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly format: "uri";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["uri", "url"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly keywords: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "A comma-separated list of keywords to place into your changelog metadata.";
                                                        };
                                                        readonly title: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["description", "image", "keywords", "title"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "anyone_with_link"];
                                                            readonly default: "anyone_with_link";
                                                            readonly description: "The visibility of this changelog.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly slug: {
                                                    readonly type: "string";
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: ["none", "added", "fixed", "improved", "deprecated", "removed"];
                                                    readonly default: "none";
                                                    readonly description: "The type of changelog that this is.";
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project that this changelog belongs to.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly updated_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the changelog was updated.";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/changelogs\\/([a-f\\d]{24}|([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                };
                                            };
                                            readonly required: ["author", "content", "created_at", "metadata", "privacy", "slug", "title", "links", "updated_at", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
            readonly delete: {
                readonly operationId: "deleteChangelog";
                readonly summary: "Delete a changelog entry";
                readonly tags: ["Changelog"];
                readonly description: "Delete a changelog entry from your ReadMe project.";
                readonly parameters: [{
                    readonly schema: {
                        readonly anyOf: [{
                            readonly type: "string";
                            readonly pattern: "[a-f\\d]{24}";
                            readonly description: "A unique identifier for the resource.";
                        }, {
                            readonly type: "string";
                            readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                            readonly description: "A URL-safe representation of the resource.";
                        }];
                    };
                    readonly in: "path";
                    readonly name: "identifier";
                    readonly required: true;
                    readonly description: "The unique identifier for the resource.";
                }];
                readonly responses: {
                    readonly '204': {
                        readonly description: "No Content";
                    };
                };
            };
            readonly patch: {
                readonly operationId: "updateChangelog";
                readonly summary: "Update a changelog entry";
                readonly tags: ["Changelog"];
                readonly description: "Update an existing changelog entry in your ReadMe project.";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly author: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly id: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly name: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly content: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly body: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly created_at: {
                                        readonly type: "string";
                                        readonly format: "date-time";
                                        readonly description: "An ISO 8601 formatted date for when the changelog was created.";
                                    };
                                    readonly metadata: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly description: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly image: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                        readonly nullable: true;
                                                    };
                                                    readonly url: {
                                                        readonly type: "string";
                                                        readonly format: "uri";
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly keywords: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly title: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly privacy: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly view: {
                                                readonly type: "string";
                                                readonly enum: ["public", "anyone_with_link"];
                                                readonly default: "anyone_with_link";
                                                readonly description: "The visibility of this changelog.";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly slug: {
                                        readonly type: "string";
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: ["none", "added", "fixed", "improved", "deprecated", "removed"];
                                        readonly default: "none";
                                        readonly description: "The type of changelog that this is.";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                    };
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly anyOf: [{
                            readonly type: "string";
                            readonly pattern: "[a-f\\d]{24}";
                            readonly description: "A unique identifier for the resource.";
                        }, {
                            readonly type: "string";
                            readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                            readonly description: "A URL-safe representation of the resource.";
                        }];
                    };
                    readonly in: "path";
                    readonly name: "identifier";
                    readonly required: true;
                    readonly description: "The unique identifier for the resource.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly author: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly id: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "User ID of the changelog author.";
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Full name of the user who created the changelog.";
                                                        };
                                                    };
                                                    readonly required: ["id", "name"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly content: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly body: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["body"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly created_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the changelog was created.";
                                                };
                                                readonly metadata: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly description: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly image: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly uri: {
                                                                    readonly type: "string";
                                                                    readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                    readonly nullable: true;
                                                                    readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                };
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly format: "uri";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["uri", "url"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly keywords: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "A comma-separated list of keywords to place into your changelog metadata.";
                                                        };
                                                        readonly title: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["description", "image", "keywords", "title"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "anyone_with_link"];
                                                            readonly default: "anyone_with_link";
                                                            readonly description: "The visibility of this changelog.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly slug: {
                                                    readonly type: "string";
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: ["none", "added", "fixed", "improved", "deprecated", "removed"];
                                                    readonly default: "none";
                                                    readonly description: "The type of changelog that this is.";
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project that this changelog belongs to.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly updated_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the changelog was updated.";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/changelogs\\/([a-f\\d]{24}|([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                };
                                            };
                                            readonly required: ["author", "content", "created_at", "metadata", "privacy", "slug", "title", "links", "updated_at", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches/{branch}/custom_pages': {
            readonly post: {
                readonly operationId: "createCustomPage";
                readonly summary: "Create a custom page";
                readonly tags: ["Custom Pages"];
                readonly description: "Create a custom page in your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly appearance: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly fullscreen: {
                                                readonly type: "boolean";
                                                readonly default: false;
                                                readonly description: "Whether a html custom page is fullscreen or not.";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly content: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly body: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly type: {
                                                readonly type: "string";
                                                readonly enum: ["markdown", "html"];
                                                readonly default: "markdown";
                                                readonly description: "The type of content contained in this custom page.";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly metadata: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly description: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly image: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                        readonly nullable: true;
                                                    };
                                                    readonly url: {
                                                        readonly type: "string";
                                                        readonly format: "uri";
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly keywords: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly title: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly privacy: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly view: {
                                                readonly type: "string";
                                                readonly enum: ["public", "anyone_with_link"];
                                                readonly default: "anyone_with_link";
                                                readonly description: "The visibility of this custom page.";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly slug: {
                                        readonly type: "string";
                                        readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                        readonly nullable: true;
                                    };
                                };
                                readonly required: ["title"];
                                readonly additionalProperties: false;
                            };
                        };
                    };
                    readonly required: true;
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '201': {
                        readonly description: "Created";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly appearance: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly fullscreen: {
                                                            readonly type: "boolean";
                                                            readonly default: false;
                                                            readonly description: "Whether a html custom page is fullscreen or not.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly content: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly body: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly type: {
                                                            readonly type: "string";
                                                            readonly enum: ["markdown", "html"];
                                                            readonly default: "markdown";
                                                            readonly description: "The type of content contained in this custom page.";
                                                        };
                                                    };
                                                    readonly required: ["body"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly metadata: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly description: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly image: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly uri: {
                                                                    readonly type: "string";
                                                                    readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                    readonly nullable: true;
                                                                    readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                };
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly format: "uri";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["uri", "url"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly keywords: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "A comma-separated list of keywords to place into your custom page metadata.";
                                                        };
                                                        readonly title: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["description", "image", "keywords", "title"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "anyone_with_link"];
                                                            readonly default: "anyone_with_link";
                                                            readonly description: "The visibility of this custom page.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly slug: {
                                                    readonly type: "string";
                                                    readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project resource.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly renderable: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly status: {
                                                            readonly type: "boolean";
                                                            readonly default: true;
                                                            readonly description: "A flag for if the resource is renderable or not.";
                                                        };
                                                        readonly error: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "The rendering error.";
                                                        };
                                                        readonly message: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Additional details about the rendering error.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly updated_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the custom page was updated.";
                                                    readonly nullable: true;
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/custom_pages\\/([a-f\\d]{24}|([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                };
                                            };
                                            readonly required: ["appearance", "content", "metadata", "privacy", "slug", "title", "links", "renderable", "updated_at", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
            readonly get: {
                readonly operationId: "getCustomPages";
                readonly summary: "Get all custom pages";
                readonly tags: ["Custom Pages"];
                readonly description: "Get all custom pages from your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly total: {
                                            readonly type: "number";
                                        };
                                        readonly data: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly appearance: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly fullscreen: {
                                                                readonly type: "boolean";
                                                                readonly default: false;
                                                                readonly description: "Whether a html custom page is fullscreen or not.";
                                                            };
                                                        };
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly content: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly body: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                            };
                                                            readonly type: {
                                                                readonly type: "string";
                                                                readonly enum: ["markdown", "html"];
                                                                readonly default: "markdown";
                                                                readonly description: "The type of content contained in this custom page.";
                                                            };
                                                        };
                                                        readonly required: ["body"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly metadata: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly description: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                            };
                                                            readonly image: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly uri: {
                                                                        readonly type: "string";
                                                                        readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                        readonly nullable: true;
                                                                        readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                    };
                                                                    readonly url: {
                                                                        readonly type: "string";
                                                                        readonly format: "uri";
                                                                        readonly nullable: true;
                                                                    };
                                                                };
                                                                readonly required: ["uri", "url"];
                                                                readonly additionalProperties: false;
                                                            };
                                                            readonly keywords: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "A comma-separated list of keywords to place into your custom page metadata.";
                                                            };
                                                            readonly title: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                            };
                                                        };
                                                        readonly required: ["description", "image", "keywords", "title"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly privacy: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly view: {
                                                                readonly type: "string";
                                                                readonly enum: ["public", "anyone_with_link"];
                                                                readonly default: "anyone_with_link";
                                                                readonly description: "The visibility of this custom page.";
                                                            };
                                                        };
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly slug: {
                                                        readonly type: "string";
                                                        readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                                                    };
                                                    readonly title: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly links: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly project: {
                                                                readonly type: "string";
                                                                readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                                readonly description: "A URI to the project resource.";
                                                            };
                                                        };
                                                        readonly required: ["project"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly renderable: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly status: {
                                                                readonly type: "boolean";
                                                                readonly default: true;
                                                                readonly description: "A flag for if the resource is renderable or not.";
                                                            };
                                                            readonly error: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "The rendering error.";
                                                            };
                                                            readonly message: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "Additional details about the rendering error.";
                                                            };
                                                        };
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly updated_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                        readonly description: "An ISO 8601 formatted date for when the custom page was updated.";
                                                        readonly nullable: true;
                                                    };
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/custom_pages\\/([a-f\\d]{24}|([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                    };
                                                };
                                                readonly required: ["appearance", "content", "metadata", "privacy", "slug", "title", "links", "renderable", "updated_at", "uri"];
                                                readonly additionalProperties: false;
                                            };
                                        };
                                    };
                                    readonly required: ["total", "data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches/{branch}/custom_pages/{slug}': {
            readonly get: {
                readonly operationId: "getCustomPage";
                readonly summary: "Get a custom page";
                readonly tags: ["Custom Pages"];
                readonly description: "Get a custom page from your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                    };
                    readonly in: "path";
                    readonly name: "slug";
                    readonly required: true;
                    readonly description: "A URL-safe representation of the resource.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly appearance: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly fullscreen: {
                                                            readonly type: "boolean";
                                                            readonly default: false;
                                                            readonly description: "Whether a html custom page is fullscreen or not.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly content: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly body: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly type: {
                                                            readonly type: "string";
                                                            readonly enum: ["markdown", "html"];
                                                            readonly default: "markdown";
                                                            readonly description: "The type of content contained in this custom page.";
                                                        };
                                                    };
                                                    readonly required: ["body"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly metadata: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly description: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly image: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly uri: {
                                                                    readonly type: "string";
                                                                    readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                    readonly nullable: true;
                                                                    readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                };
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly format: "uri";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["uri", "url"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly keywords: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "A comma-separated list of keywords to place into your custom page metadata.";
                                                        };
                                                        readonly title: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["description", "image", "keywords", "title"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "anyone_with_link"];
                                                            readonly default: "anyone_with_link";
                                                            readonly description: "The visibility of this custom page.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly slug: {
                                                    readonly type: "string";
                                                    readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project resource.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly renderable: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly status: {
                                                            readonly type: "boolean";
                                                            readonly default: true;
                                                            readonly description: "A flag for if the resource is renderable or not.";
                                                        };
                                                        readonly error: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "The rendering error.";
                                                        };
                                                        readonly message: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Additional details about the rendering error.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly updated_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the custom page was updated.";
                                                    readonly nullable: true;
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/custom_pages\\/([a-f\\d]{24}|([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                };
                                            };
                                            readonly required: ["appearance", "content", "metadata", "privacy", "slug", "title", "links", "renderable", "updated_at", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
            readonly delete: {
                readonly operationId: "deleteCustomPage";
                readonly summary: "Delete a custom page";
                readonly tags: ["Custom Pages"];
                readonly description: "Delete a custom page from your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                    };
                    readonly in: "path";
                    readonly name: "slug";
                    readonly required: true;
                    readonly description: "A URL-safe representation of the resource.";
                }];
                readonly responses: {
                    readonly '204': {
                        readonly description: "No Content";
                    };
                };
            };
            readonly patch: {
                readonly operationId: "updateCustomPage";
                readonly summary: "Update a custom page";
                readonly tags: ["Custom Pages"];
                readonly description: "Update an existing custom page in your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly appearance: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly fullscreen: {
                                                readonly type: "boolean";
                                                readonly default: false;
                                                readonly description: "Whether a html custom page is fullscreen or not.";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly content: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly body: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly type: {
                                                readonly type: "string";
                                                readonly enum: ["markdown", "html"];
                                                readonly default: "markdown";
                                                readonly description: "The type of content contained in this custom page.";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly metadata: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly description: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly image: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                        readonly nullable: true;
                                                    };
                                                    readonly url: {
                                                        readonly type: "string";
                                                        readonly format: "uri";
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly keywords: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly title: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly privacy: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly view: {
                                                readonly type: "string";
                                                readonly enum: ["public", "anyone_with_link"];
                                                readonly default: "anyone_with_link";
                                                readonly description: "The visibility of this custom page.";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly slug: {
                                        readonly type: "string";
                                        readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                        readonly nullable: true;
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                    };
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                    };
                    readonly in: "path";
                    readonly name: "slug";
                    readonly required: true;
                    readonly description: "A URL-safe representation of the resource.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly appearance: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly fullscreen: {
                                                            readonly type: "boolean";
                                                            readonly default: false;
                                                            readonly description: "Whether a html custom page is fullscreen or not.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly content: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly body: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly type: {
                                                            readonly type: "string";
                                                            readonly enum: ["markdown", "html"];
                                                            readonly default: "markdown";
                                                            readonly description: "The type of content contained in this custom page.";
                                                        };
                                                    };
                                                    readonly required: ["body"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly metadata: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly description: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly image: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly uri: {
                                                                    readonly type: "string";
                                                                    readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                    readonly nullable: true;
                                                                    readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                };
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly format: "uri";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["uri", "url"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly keywords: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "A comma-separated list of keywords to place into your custom page metadata.";
                                                        };
                                                        readonly title: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["description", "image", "keywords", "title"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "anyone_with_link"];
                                                            readonly default: "anyone_with_link";
                                                            readonly description: "The visibility of this custom page.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly slug: {
                                                    readonly type: "string";
                                                    readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project resource.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly renderable: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly status: {
                                                            readonly type: "boolean";
                                                            readonly default: true;
                                                            readonly description: "A flag for if the resource is renderable or not.";
                                                        };
                                                        readonly error: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "The rendering error.";
                                                        };
                                                        readonly message: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Additional details about the rendering error.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly updated_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the custom page was updated.";
                                                    readonly nullable: true;
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/custom_pages\\/([a-f\\d]{24}|([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                };
                                            };
                                            readonly required: ["appearance", "content", "metadata", "privacy", "slug", "title", "links", "renderable", "updated_at", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches/{branch}/guides': {
            readonly post: {
                readonly operationId: "createGuide";
                readonly summary: "Create a guides page";
                readonly tags: ["Guides"];
                readonly description: "Create a page in the Guides section of your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly allow_crawlers: {
                                        readonly type: "string";
                                        readonly enum: ["enabled", "disabled"];
                                        readonly default: "enabled";
                                        readonly description: "Allow indexing by robots.";
                                    };
                                    readonly appearance: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly icon: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly type: {
                                                        readonly type: "string";
                                                        readonly enum: ["icon", "emoji"];
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly category: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly uri: {
                                                readonly type: "string";
                                                readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/categories\\/(guides|reference)\\/((.*))";
                                                readonly description: "A URI to the category resource.";
                                            };
                                        };
                                        readonly required: ["uri"];
                                        readonly additionalProperties: false;
                                    };
                                    readonly content: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly body: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly excerpt: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly link: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly url: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly new_tab: {
                                                        readonly type: "boolean";
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                                readonly description: "Information about where this page should redirect to; only available when `type` is `link`.";
                                            };
                                            readonly next: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly description: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly pages: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly anyOf: [{
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly slug: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly title: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                    };
                                                                    readonly type: {
                                                                        readonly type: "string";
                                                                        readonly enum: ["basic", "endpoint"];
                                                                    };
                                                                };
                                                                readonly required: ["slug", "title", "type"];
                                                                readonly additionalProperties: false;
                                                            }, {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly title: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                    };
                                                                    readonly type: {
                                                                        readonly type: "string";
                                                                        readonly enum: ["link"];
                                                                    };
                                                                    readonly url: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                                readonly required: ["title", "type", "url"];
                                                                readonly additionalProperties: false;
                                                            }];
                                                        };
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly metadata: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly description: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly keywords: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly title: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly image: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly parent: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly uri: {
                                                readonly type: "string";
                                                readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly privacy: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly view: {
                                                readonly type: "string";
                                                readonly enum: ["public", "anyone_with_link"];
                                                readonly default: "anyone_with_link";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly slug: {
                                        readonly allOf: [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "string";
                                            readonly minLength: 1;
                                        }];
                                        readonly description: "The accessible URL slug for the page.";
                                    };
                                    readonly state: {
                                        readonly type: "string";
                                        readonly enum: ["current", "deprecated"];
                                        readonly default: "current";
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: ["api_config", "basic", "endpoint", "link", "webhook"];
                                        readonly default: "basic";
                                    };
                                    readonly position: {
                                        readonly type: "number";
                                    };
                                };
                                readonly required: ["category", "title"];
                                readonly additionalProperties: false;
                            };
                        };
                    };
                    readonly required: true;
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '201': {
                        readonly description: "Created";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly allow_crawlers: {
                                                    readonly type: "string";
                                                    readonly enum: ["enabled", "disabled"];
                                                    readonly default: "enabled";
                                                    readonly description: "Allow indexing by robots.";
                                                };
                                                readonly appearance: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly icon: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly type: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["icon", "emoji"];
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["name", "type"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["icon"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly category: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/categories\\/(guides|reference)\\/((.*))";
                                                            readonly description: "A URI to the category resource.";
                                                        };
                                                    };
                                                    readonly required: ["uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly content: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly body: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly excerpt: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly link: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly new_tab: {
                                                                    readonly type: "boolean";
                                                                    readonly nullable: true;
                                                                    readonly description: "Should this URL be opened up in a new tab?";
                                                                };
                                                            };
                                                            readonly required: ["url", "new_tab"];
                                                            readonly additionalProperties: false;
                                                            readonly description: "Information about where this page should redirect to; only available when `type` is `link`.";
                                                        };
                                                        readonly next: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly description: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly pages: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly anyOf: [{
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly slug: {
                                                                                    readonly type: "string";
                                                                                };
                                                                                readonly title: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly type: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["basic", "endpoint"];
                                                                                };
                                                                            };
                                                                            readonly required: ["slug", "title", "type"];
                                                                            readonly additionalProperties: false;
                                                                        }, {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly title: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly type: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["link"];
                                                                                };
                                                                                readonly url: {
                                                                                    readonly type: "string";
                                                                                };
                                                                            };
                                                                            readonly required: ["title", "type", "url"];
                                                                            readonly additionalProperties: false;
                                                                        }];
                                                                    };
                                                                };
                                                            };
                                                            readonly required: ["description", "pages"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["body", "excerpt", "link", "next"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly metadata: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly description: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly image: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly uri: {
                                                                    readonly type: "string";
                                                                    readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                    readonly nullable: true;
                                                                    readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                };
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly format: "uri";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["uri", "url"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly keywords: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "A comma-separated list of keywords to place into your page metadata.";
                                                        };
                                                        readonly title: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["description", "image", "keywords", "title"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly parent: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                            readonly nullable: true;
                                                            readonly description: "A URI to the parent page resource including the page ID or slug.";
                                                        };
                                                    };
                                                    readonly required: ["uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "anyone_with_link"];
                                                            readonly default: "anyone_with_link";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly slug: {
                                                    readonly allOf: [{
                                                        readonly type: "string";
                                                    }, {
                                                        readonly type: "string";
                                                        readonly minLength: 1;
                                                    }];
                                                    readonly description: "The accessible URL slug for the page.";
                                                };
                                                readonly state: {
                                                    readonly type: "string";
                                                    readonly enum: ["current", "deprecated"];
                                                    readonly default: "current";
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: ["api_config", "basic", "endpoint", "link", "webhook"];
                                                    readonly default: "basic";
                                                };
                                                readonly href: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly dash: {
                                                            readonly type: "string";
                                                            readonly format: "uri";
                                                            readonly description: "A URL to this page in your ReadMe Dash.";
                                                        };
                                                        readonly hub: {
                                                            readonly type: "string";
                                                            readonly format: "uri";
                                                            readonly description: "A URL to this page on your ReadMe hub.";
                                                        };
                                                    };
                                                    readonly required: ["dash", "hub"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project resource.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly project: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly description: "The name of the project.";
                                                        };
                                                        readonly subdomain: {
                                                            readonly type: "string";
                                                            readonly pattern: "[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*";
                                                            readonly maxLength: 30;
                                                            readonly description: "The subdomain of the project.";
                                                        };
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project that this page belongs to.";
                                                        };
                                                    };
                                                    readonly required: ["name", "subdomain", "uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly renderable: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly status: {
                                                            readonly type: "boolean";
                                                            readonly default: true;
                                                            readonly description: "A flag for if the resource is renderable or not.";
                                                        };
                                                        readonly error: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "The rendering error.";
                                                        };
                                                        readonly message: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Additional details about the rendering error.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly updated_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the page was updated.";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                    readonly description: "A URI to the page resource.";
                                                };
                                            };
                                            readonly required: ["appearance", "category", "content", "metadata", "parent", "privacy", "slug", "title", "href", "links", "project", "renderable", "updated_at", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches/{branch}/guides/{slug}': {
            readonly get: {
                readonly operationId: "getGuide";
                readonly summary: "Get a guides page";
                readonly tags: ["Guides"];
                readonly description: "Get a page from the Guides section of your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                    };
                    readonly in: "path";
                    readonly name: "slug";
                    readonly required: true;
                    readonly description: "A URL-safe representation of the resource.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly allow_crawlers: {
                                                    readonly type: "string";
                                                    readonly enum: ["enabled", "disabled"];
                                                    readonly default: "enabled";
                                                    readonly description: "Allow indexing by robots.";
                                                };
                                                readonly appearance: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly icon: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly type: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["icon", "emoji"];
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["name", "type"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["icon"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly category: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/categories\\/(guides|reference)\\/((.*))";
                                                            readonly description: "A URI to the category resource.";
                                                        };
                                                    };
                                                    readonly required: ["uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly content: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly body: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly excerpt: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly link: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly new_tab: {
                                                                    readonly type: "boolean";
                                                                    readonly nullable: true;
                                                                    readonly description: "Should this URL be opened up in a new tab?";
                                                                };
                                                            };
                                                            readonly required: ["url", "new_tab"];
                                                            readonly additionalProperties: false;
                                                            readonly description: "Information about where this page should redirect to; only available when `type` is `link`.";
                                                        };
                                                        readonly next: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly description: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly pages: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly anyOf: [{
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly slug: {
                                                                                    readonly type: "string";
                                                                                };
                                                                                readonly title: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly type: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["basic", "endpoint"];
                                                                                };
                                                                            };
                                                                            readonly required: ["slug", "title", "type"];
                                                                            readonly additionalProperties: false;
                                                                        }, {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly title: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly type: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["link"];
                                                                                };
                                                                                readonly url: {
                                                                                    readonly type: "string";
                                                                                };
                                                                            };
                                                                            readonly required: ["title", "type", "url"];
                                                                            readonly additionalProperties: false;
                                                                        }];
                                                                    };
                                                                };
                                                            };
                                                            readonly required: ["description", "pages"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["body", "excerpt", "link", "next"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly metadata: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly description: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly image: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly uri: {
                                                                    readonly type: "string";
                                                                    readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                    readonly nullable: true;
                                                                    readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                };
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly format: "uri";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["uri", "url"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly keywords: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "A comma-separated list of keywords to place into your page metadata.";
                                                        };
                                                        readonly title: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["description", "image", "keywords", "title"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly parent: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                            readonly nullable: true;
                                                            readonly description: "A URI to the parent page resource including the page ID or slug.";
                                                        };
                                                    };
                                                    readonly required: ["uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "anyone_with_link"];
                                                            readonly default: "anyone_with_link";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly slug: {
                                                    readonly allOf: [{
                                                        readonly type: "string";
                                                    }, {
                                                        readonly type: "string";
                                                        readonly minLength: 1;
                                                    }];
                                                    readonly description: "The accessible URL slug for the page.";
                                                };
                                                readonly state: {
                                                    readonly type: "string";
                                                    readonly enum: ["current", "deprecated"];
                                                    readonly default: "current";
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: ["api_config", "basic", "endpoint", "link", "webhook"];
                                                    readonly default: "basic";
                                                };
                                                readonly href: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly dash: {
                                                            readonly type: "string";
                                                            readonly format: "uri";
                                                            readonly description: "A URL to this page in your ReadMe Dash.";
                                                        };
                                                        readonly hub: {
                                                            readonly type: "string";
                                                            readonly format: "uri";
                                                            readonly description: "A URL to this page on your ReadMe hub.";
                                                        };
                                                    };
                                                    readonly required: ["dash", "hub"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project resource.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly project: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly description: "The name of the project.";
                                                        };
                                                        readonly subdomain: {
                                                            readonly type: "string";
                                                            readonly pattern: "[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*";
                                                            readonly maxLength: 30;
                                                            readonly description: "The subdomain of the project.";
                                                        };
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project that this page belongs to.";
                                                        };
                                                    };
                                                    readonly required: ["name", "subdomain", "uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly renderable: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly status: {
                                                            readonly type: "boolean";
                                                            readonly default: true;
                                                            readonly description: "A flag for if the resource is renderable or not.";
                                                        };
                                                        readonly error: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "The rendering error.";
                                                        };
                                                        readonly message: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Additional details about the rendering error.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly updated_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the page was updated.";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                    readonly description: "A URI to the page resource.";
                                                };
                                            };
                                            readonly required: ["appearance", "category", "content", "metadata", "parent", "privacy", "slug", "title", "href", "links", "project", "renderable", "updated_at", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
            readonly delete: {
                readonly operationId: "deleteGuide";
                readonly summary: "Delete a guides page";
                readonly tags: ["Guides"];
                readonly description: "Delete a page from the Guides section of your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                    };
                    readonly in: "path";
                    readonly name: "slug";
                    readonly required: true;
                    readonly description: "A URL-safe representation of the resource.";
                }];
                readonly responses: {
                    readonly '204': {
                        readonly description: "No Content";
                    };
                };
            };
            readonly patch: {
                readonly operationId: "updateGuide";
                readonly summary: "Update a guides page";
                readonly tags: ["Guides"];
                readonly description: "Updates an existing page in the Guides section of your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly allow_crawlers: {
                                        readonly type: "string";
                                        readonly enum: ["enabled", "disabled"];
                                        readonly default: "enabled";
                                        readonly description: "Allow indexing by robots.";
                                    };
                                    readonly appearance: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly icon: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly type: {
                                                        readonly type: "string";
                                                        readonly enum: ["icon", "emoji"];
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly category: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly uri: {
                                                readonly type: "string";
                                                readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/categories\\/(guides|reference)\\/((.*))";
                                                readonly description: "A URI to the category resource.";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly content: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly body: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly excerpt: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly link: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly url: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly new_tab: {
                                                        readonly type: "boolean";
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                                readonly description: "Information about where this page should redirect to; only available when `type` is `link`.";
                                            };
                                            readonly next: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly description: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly pages: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly anyOf: [{
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly slug: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly title: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                    };
                                                                    readonly type: {
                                                                        readonly type: "string";
                                                                        readonly enum: ["basic", "endpoint"];
                                                                    };
                                                                };
                                                                readonly required: ["slug", "title", "type"];
                                                                readonly additionalProperties: false;
                                                            }, {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly title: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                    };
                                                                    readonly type: {
                                                                        readonly type: "string";
                                                                        readonly enum: ["link"];
                                                                    };
                                                                    readonly url: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                                readonly required: ["title", "type", "url"];
                                                                readonly additionalProperties: false;
                                                            }];
                                                        };
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly metadata: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly description: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly keywords: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly title: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly image: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly parent: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly uri: {
                                                readonly type: "string";
                                                readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly privacy: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly view: {
                                                readonly type: "string";
                                                readonly enum: ["public", "anyone_with_link"];
                                                readonly default: "anyone_with_link";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly slug: {
                                        readonly allOf: [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "string";
                                            readonly minLength: 1;
                                        }];
                                        readonly description: "The accessible URL slug for the page.";
                                    };
                                    readonly state: {
                                        readonly type: "string";
                                        readonly enum: ["current", "deprecated"];
                                        readonly default: "current";
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: ["api_config", "basic", "endpoint", "link", "webhook"];
                                        readonly default: "basic";
                                    };
                                    readonly position: {
                                        readonly type: "number";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                    };
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                    };
                    readonly in: "path";
                    readonly name: "slug";
                    readonly required: true;
                    readonly description: "A URL-safe representation of the resource.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly allow_crawlers: {
                                                    readonly type: "string";
                                                    readonly enum: ["enabled", "disabled"];
                                                    readonly default: "enabled";
                                                    readonly description: "Allow indexing by robots.";
                                                };
                                                readonly appearance: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly icon: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly type: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["icon", "emoji"];
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["name", "type"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["icon"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly category: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/categories\\/(guides|reference)\\/((.*))";
                                                            readonly description: "A URI to the category resource.";
                                                        };
                                                    };
                                                    readonly required: ["uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly content: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly body: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly excerpt: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly link: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly new_tab: {
                                                                    readonly type: "boolean";
                                                                    readonly nullable: true;
                                                                    readonly description: "Should this URL be opened up in a new tab?";
                                                                };
                                                            };
                                                            readonly required: ["url", "new_tab"];
                                                            readonly additionalProperties: false;
                                                            readonly description: "Information about where this page should redirect to; only available when `type` is `link`.";
                                                        };
                                                        readonly next: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly description: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly pages: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly anyOf: [{
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly slug: {
                                                                                    readonly type: "string";
                                                                                };
                                                                                readonly title: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly type: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["basic", "endpoint"];
                                                                                };
                                                                            };
                                                                            readonly required: ["slug", "title", "type"];
                                                                            readonly additionalProperties: false;
                                                                        }, {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly title: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly type: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["link"];
                                                                                };
                                                                                readonly url: {
                                                                                    readonly type: "string";
                                                                                };
                                                                            };
                                                                            readonly required: ["title", "type", "url"];
                                                                            readonly additionalProperties: false;
                                                                        }];
                                                                    };
                                                                };
                                                            };
                                                            readonly required: ["description", "pages"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["body", "excerpt", "link", "next"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly metadata: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly description: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly image: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly uri: {
                                                                    readonly type: "string";
                                                                    readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                    readonly nullable: true;
                                                                    readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                };
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly format: "uri";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["uri", "url"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly keywords: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "A comma-separated list of keywords to place into your page metadata.";
                                                        };
                                                        readonly title: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["description", "image", "keywords", "title"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly parent: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                            readonly nullable: true;
                                                            readonly description: "A URI to the parent page resource including the page ID or slug.";
                                                        };
                                                    };
                                                    readonly required: ["uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "anyone_with_link"];
                                                            readonly default: "anyone_with_link";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly slug: {
                                                    readonly allOf: [{
                                                        readonly type: "string";
                                                    }, {
                                                        readonly type: "string";
                                                        readonly minLength: 1;
                                                    }];
                                                    readonly description: "The accessible URL slug for the page.";
                                                };
                                                readonly state: {
                                                    readonly type: "string";
                                                    readonly enum: ["current", "deprecated"];
                                                    readonly default: "current";
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: ["api_config", "basic", "endpoint", "link", "webhook"];
                                                    readonly default: "basic";
                                                };
                                                readonly href: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly dash: {
                                                            readonly type: "string";
                                                            readonly format: "uri";
                                                            readonly description: "A URL to this page in your ReadMe Dash.";
                                                        };
                                                        readonly hub: {
                                                            readonly type: "string";
                                                            readonly format: "uri";
                                                            readonly description: "A URL to this page on your ReadMe hub.";
                                                        };
                                                    };
                                                    readonly required: ["dash", "hub"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project resource.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly project: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly description: "The name of the project.";
                                                        };
                                                        readonly subdomain: {
                                                            readonly type: "string";
                                                            readonly pattern: "[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*";
                                                            readonly maxLength: 30;
                                                            readonly description: "The subdomain of the project.";
                                                        };
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project that this page belongs to.";
                                                        };
                                                    };
                                                    readonly required: ["name", "subdomain", "uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly renderable: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly status: {
                                                            readonly type: "boolean";
                                                            readonly default: true;
                                                            readonly description: "A flag for if the resource is renderable or not.";
                                                        };
                                                        readonly error: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "The rendering error.";
                                                        };
                                                        readonly message: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Additional details about the rendering error.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly updated_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the page was updated.";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                    readonly description: "A URI to the page resource.";
                                                };
                                            };
                                            readonly required: ["appearance", "category", "content", "metadata", "parent", "privacy", "slug", "title", "href", "links", "project", "renderable", "updated_at", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/images': {
            readonly get: {
                readonly operationId: "getImages";
                readonly summary: "Get uploaded images";
                readonly tags: ["Images"];
                readonly description: "Get a collection of images that were uploaded to your ReadMe project.";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "number";
                        readonly minimum: 1;
                        readonly default: 1;
                    };
                    readonly in: "query";
                    readonly name: "page";
                    readonly required: false;
                    readonly description: "Used to specify further pages (starts at 1).";
                }, {
                    readonly schema: {
                        readonly type: "number";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 10;
                    };
                    readonly in: "query";
                    readonly name: "per_page";
                    readonly required: false;
                    readonly description: "Number of items to include in pagination (up to 100, defaults to 10).";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly total: {
                                            readonly type: "number";
                                        };
                                        readonly page: {
                                            readonly type: "number";
                                        };
                                        readonly per_page: {
                                            readonly type: "number";
                                        };
                                        readonly paging: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly next: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly previous: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly first: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly last: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                            };
                                            readonly required: ["next", "previous", "first", "last"];
                                            readonly additionalProperties: false;
                                        };
                                        readonly data: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly width: {
                                                        readonly type: "number";
                                                        readonly nullable: true;
                                                        readonly description: "The pixel width of the image. This is not present for SVGs.";
                                                    };
                                                    readonly height: {
                                                        readonly type: "number";
                                                        readonly nullable: true;
                                                        readonly description: "The pixel height of the image. This is not present for SVGs.";
                                                    };
                                                    readonly color: {
                                                        readonly type: "string";
                                                        readonly pattern: "^(?:#[0-9a-fA-F]{3}|#[0-9a-fA-F]{4}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8})$";
                                                        readonly nullable: true;
                                                        readonly description: "The primary color contained within your image.";
                                                    };
                                                    readonly links: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly original_url: {
                                                                readonly type: "string";
                                                                readonly format: "uri";
                                                                readonly nullable: true;
                                                                readonly description: "If your image was resized upon upload this will be a URL to the original file.";
                                                            };
                                                        };
                                                        readonly required: ["original_url"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                        readonly nullable: true;
                                                        readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                    };
                                                    readonly url: {
                                                        readonly type: "string";
                                                        readonly format: "uri";
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly required: ["name", "width", "height", "color", "links", "uri", "url"];
                                                readonly additionalProperties: false;
                                            };
                                        };
                                    };
                                    readonly required: ["total", "page", "per_page", "paging", "data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
            readonly post: {
                readonly operationId: "uploadImage";
                readonly summary: "Upload an image";
                readonly tags: ["Images"];
                readonly description: "Upload an image to your ReadMe project.";
                readonly requestBody: {
                    readonly content: {
                        readonly 'multipart/form-data': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly file: {};
                                };
                                readonly additionalProperties: false;
                            };
                        };
                    };
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                    };
                    readonly in: "query";
                    readonly name: "resize_height";
                    readonly required: false;
                    readonly description: "If you wish to resize this image, supply a new height in pixels. Please note that GIFs are exempt and cannot be resized.";
                }];
                readonly responses: {
                    readonly '201': {
                        readonly description: "Created";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly width: {
                                                    readonly type: "number";
                                                    readonly nullable: true;
                                                    readonly description: "The pixel width of the image. This is not present for SVGs.";
                                                };
                                                readonly height: {
                                                    readonly type: "number";
                                                    readonly nullable: true;
                                                    readonly description: "The pixel height of the image. This is not present for SVGs.";
                                                };
                                                readonly color: {
                                                    readonly type: "string";
                                                    readonly pattern: "^(?:#[0-9a-fA-F]{3}|#[0-9a-fA-F]{4}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8})$";
                                                    readonly nullable: true;
                                                    readonly description: "The primary color contained within your image.";
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly original_url: {
                                                            readonly type: "string";
                                                            readonly format: "uri";
                                                            readonly nullable: true;
                                                            readonly description: "If your image was resized upon upload this will be a URL to the original file.";
                                                        };
                                                    };
                                                    readonly required: ["original_url"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                    readonly nullable: true;
                                                    readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                };
                                                readonly url: {
                                                    readonly type: "string";
                                                    readonly format: "uri";
                                                    readonly nullable: true;
                                                };
                                            };
                                            readonly required: ["name", "width", "height", "color", "links", "uri", "url"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/images/{identifier}': {
            readonly get: {
                readonly operationId: "getImage";
                readonly summary: "Get an image";
                readonly tags: ["Images"];
                readonly description: "Get an image that was uploaded to your ReadMe project.";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "[a-f\\d]{24}";
                    };
                    readonly in: "path";
                    readonly name: "identifier";
                    readonly required: true;
                    readonly description: "A unique identifier for the image.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly width: {
                                                    readonly type: "number";
                                                    readonly nullable: true;
                                                    readonly description: "The pixel width of the image. This is not present for SVGs.";
                                                };
                                                readonly height: {
                                                    readonly type: "number";
                                                    readonly nullable: true;
                                                    readonly description: "The pixel height of the image. This is not present for SVGs.";
                                                };
                                                readonly color: {
                                                    readonly type: "string";
                                                    readonly pattern: "^(?:#[0-9a-fA-F]{3}|#[0-9a-fA-F]{4}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8})$";
                                                    readonly nullable: true;
                                                    readonly description: "The primary color contained within your image.";
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly original_url: {
                                                            readonly type: "string";
                                                            readonly format: "uri";
                                                            readonly nullable: true;
                                                            readonly description: "If your image was resized upon upload this will be a URL to the original file.";
                                                        };
                                                    };
                                                    readonly required: ["original_url"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                    readonly nullable: true;
                                                    readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                };
                                                readonly url: {
                                                    readonly type: "string";
                                                    readonly format: "uri";
                                                    readonly nullable: true;
                                                };
                                            };
                                            readonly required: ["name", "width", "height", "color", "links", "uri", "url"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/outbound_ips': {
            readonly get: {
                readonly operationId: "getOutboundIPs";
                readonly summary: "Get ReadMe's outbound IP addresses";
                readonly tags: ["IP Addresses"];
                readonly description: "Get all of ReadMe's IP addresses used for outbound webhook requests and the \"Try It!\" button on the API Explorer.\n\nAlthough ReadMe's outbound IP addresses may change, the IPs in this API response will be valid for at least 7 days. If you configure your API or webhooks to limit access based on these IPs, you should refresh the IP list from this endpoint weekly.";
                readonly security: [];
                readonly responses: {
                    readonly '200': {
                        readonly description: "List of current IP addresses used for webhook and \"Try It!\" proxy requests.";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly ip_address: {
                                                        readonly type: "string";
                                                        readonly description: "The IP address.";
                                                    };
                                                };
                                                readonly required: ["ip_address"];
                                                readonly additionalProperties: false;
                                            };
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                    readonly description: "List of current IP addresses used for webhook and \"Try It!\" proxy requests.";
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/owlbot/ask': {
            readonly post: {
                readonly operationId: "askOwlbot";
                readonly summary: "Ask Owlbot AI a question";
                readonly tags: ["Owlbot AI"];
                readonly description: "Ask Owlbot a question about the content of your docs.";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly question: {
                                        readonly type: "string";
                                        readonly description: "The question being asked to Owlbot.";
                                    };
                                };
                                readonly required: ["question"];
                                readonly additionalProperties: false;
                            };
                        };
                    };
                    readonly required: true;
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly enum: ["application/json", "text/event-stream"];
                        readonly default: "application/json";
                    };
                    readonly in: "header";
                    readonly name: "accept";
                    readonly required: false;
                    readonly description: "The format the response should be returned in. If `text/event-stream` then the response will be streamed as it is generated.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly answer: {
                                                    readonly type: "string";
                                                };
                                                readonly sources: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly title: {
                                                                readonly type: "string";
                                                                readonly description: "The page title for the given source.";
                                                            };
                                                            readonly url: {
                                                                readonly type: "string";
                                                                readonly description: "A link to the source.";
                                                            };
                                                        };
                                                        readonly required: ["title", "url"];
                                                        readonly additionalProperties: false;
                                                    };
                                                };
                                            };
                                            readonly required: ["answer", "sources"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/projects/me': {
            readonly get: {
                readonly operationId: "getProject";
                readonly summary: "Get project metadata";
                readonly tags: ["Projects"];
                readonly description: "Returns data about your project.";
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly allow_crawlers: {
                                                    readonly type: "string";
                                                    readonly enum: ["enabled", "disabled"];
                                                    readonly default: "enabled";
                                                    readonly description: "Allow indexing by robots.";
                                                };
                                                readonly api_designer: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly allow_editing: {
                                                            readonly type: "string";
                                                            readonly enum: ["enabled", "disabled"];
                                                            readonly default: "enabled";
                                                            readonly description: "API Designer is enabled for this project.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly appearance: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly brand: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly primary_color: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly link_color: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly theme: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["system", "light", "dark"];
                                                                    readonly default: "light";
                                                                };
                                                            };
                                                            readonly required: ["primary_color", "link_color"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly changelog: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly layout: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["collapsed", "continuous"];
                                                                    readonly default: "collapsed";
                                                                };
                                                                readonly show_author: {
                                                                    readonly type: "boolean";
                                                                    readonly default: true;
                                                                    readonly description: "Should the changelog author be shown?";
                                                                };
                                                                readonly show_exact_date: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "Should the exact date of the changelog entry be shown, or should it be relative?";
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly custom_code: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly css: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                    readonly description: "A chunk of custom CSS that you can use to override default CSS that we provide.";
                                                                };
                                                                readonly js: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                    readonly description: "A chunk of custom JS that you can use to override or add new behaviors to your documentation. Please note that we do not do any validation on the code that goes in here so you have the potential to negatively impact your users with broken code.";
                                                                };
                                                                readonly html: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly header: {
                                                                            readonly type: "string";
                                                                            readonly nullable: true;
                                                                            readonly description: "A block of custom HTML that will be added to your `<head>` tag. Good for things like `<meta>` tags or loading external CSS.";
                                                                        };
                                                                        readonly home_footer: {
                                                                            readonly type: "string";
                                                                            readonly nullable: true;
                                                                            readonly description: "A block of custom HTML that will appear in a `<footer>` element on all of your pages";
                                                                        };
                                                                        readonly page_footer: {
                                                                            readonly type: "string";
                                                                            readonly nullable: true;
                                                                            readonly description: "A block of custom HTML that will be added before the closing `</body>` tag of your pages.";
                                                                        };
                                                                    };
                                                                    readonly required: ["header", "home_footer", "page_footer"];
                                                                    readonly additionalProperties: false;
                                                                };
                                                            };
                                                            readonly required: ["css", "js", "html"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly footer: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly readme_logo: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["hide", "show"];
                                                                    readonly default: "show";
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly header: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly type: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["solid", "gradient", "line", "overlay"];
                                                                    readonly default: "solid";
                                                                };
                                                                readonly gradient_color: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly link_style: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["buttons", "tabs"];
                                                                    readonly default: "buttons";
                                                                    readonly description: "The styling setting of the subnav links. This value is only used if `appearance.header.type` is `line`.";
                                                                };
                                                                readonly overlay: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly image: {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly name: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly width: {
                                                                                    readonly type: "number";
                                                                                    readonly nullable: true;
                                                                                    readonly description: "The pixel width of the image. This is not present for SVGs.";
                                                                                };
                                                                                readonly height: {
                                                                                    readonly type: "number";
                                                                                    readonly nullable: true;
                                                                                    readonly description: "The pixel height of the image. This is not present for SVGs.";
                                                                                };
                                                                                readonly color: {
                                                                                    readonly type: "string";
                                                                                    readonly pattern: "^(?:#[0-9a-fA-F]{3}|#[0-9a-fA-F]{4}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8})$";
                                                                                    readonly nullable: true;
                                                                                    readonly description: "The primary color contained within your image.";
                                                                                };
                                                                                readonly links: {
                                                                                    readonly type: "object";
                                                                                    readonly properties: {
                                                                                        readonly original_url: {
                                                                                            readonly type: "string";
                                                                                            readonly format: "uri";
                                                                                            readonly nullable: true;
                                                                                            readonly description: "If your image was resized upon upload this will be a URL to the original file.";
                                                                                        };
                                                                                    };
                                                                                    readonly required: ["original_url"];
                                                                                    readonly additionalProperties: false;
                                                                                };
                                                                                readonly uri: {
                                                                                    readonly type: "string";
                                                                                    readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                                    readonly nullable: true;
                                                                                    readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                                };
                                                                                readonly url: {
                                                                                    readonly type: "string";
                                                                                    readonly format: "uri";
                                                                                    readonly nullable: true;
                                                                                };
                                                                            };
                                                                            readonly required: ["name", "width", "height", "color", "links", "uri", "url"];
                                                                            readonly additionalProperties: false;
                                                                        };
                                                                        readonly type: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["triangles", "blueprint", "grain", "map", "circuits", "custom"];
                                                                            readonly default: "triangles";
                                                                            readonly description: "The header overlay type. This value is only used if `appearance.header.type` is `overlay`.";
                                                                        };
                                                                        readonly fill: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["auto", "tile", "tile-x", "tile-y", "cover", "contain"];
                                                                            readonly default: "auto";
                                                                            readonly description: "The header fill type. This is only used if `appearance.header.overlay.type` is `custom`.";
                                                                        };
                                                                        readonly position: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["top-left", "top-center", "top-right", "center-left", "center-center", "center-right", "bottom-left", "bottom-center", "bottom-right"];
                                                                            readonly default: "top-left";
                                                                            readonly description: "The positioning of the header. This is only used if `appearance.header.overlay.type` is `custom`.";
                                                                        };
                                                                    };
                                                                    readonly required: ["image"];
                                                                    readonly additionalProperties: false;
                                                                };
                                                            };
                                                            readonly required: ["gradient_color", "overlay"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly layout: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly full_width: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["enabled", "disabled"];
                                                                    readonly default: "disabled";
                                                                    readonly description: "Should the page layout stretch to use the full page width?";
                                                                };
                                                                readonly style: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["classic", "modern", "compact", "sidebar"];
                                                                    readonly default: "classic";
                                                                    readonly description: "The shape and style of your documentation hub pages.";
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly logo: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly dark_mode: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly name: {
                                                                            readonly type: "string";
                                                                            readonly nullable: true;
                                                                        };
                                                                        readonly width: {
                                                                            readonly type: "number";
                                                                            readonly nullable: true;
                                                                            readonly description: "The pixel width of the image. This is not present for SVGs.";
                                                                        };
                                                                        readonly height: {
                                                                            readonly type: "number";
                                                                            readonly nullable: true;
                                                                            readonly description: "The pixel height of the image. This is not present for SVGs.";
                                                                        };
                                                                        readonly color: {
                                                                            readonly type: "string";
                                                                            readonly pattern: "^(?:#[0-9a-fA-F]{3}|#[0-9a-fA-F]{4}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8})$";
                                                                            readonly nullable: true;
                                                                            readonly description: "The primary color contained within your image.";
                                                                        };
                                                                        readonly links: {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly original_url: {
                                                                                    readonly type: "string";
                                                                                    readonly format: "uri";
                                                                                    readonly nullable: true;
                                                                                    readonly description: "If your image was resized upon upload this will be a URL to the original file.";
                                                                                };
                                                                            };
                                                                            readonly required: ["original_url"];
                                                                            readonly additionalProperties: false;
                                                                        };
                                                                        readonly uri: {
                                                                            readonly type: "string";
                                                                            readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                            readonly nullable: true;
                                                                            readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                        };
                                                                        readonly url: {
                                                                            readonly type: "string";
                                                                            readonly format: "uri";
                                                                            readonly nullable: true;
                                                                        };
                                                                    };
                                                                    readonly required: ["name", "width", "height", "color", "links", "uri", "url"];
                                                                    readonly additionalProperties: false;
                                                                };
                                                                readonly main: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly name: {
                                                                            readonly type: "string";
                                                                            readonly nullable: true;
                                                                        };
                                                                        readonly width: {
                                                                            readonly type: "number";
                                                                            readonly nullable: true;
                                                                            readonly description: "The pixel width of the image. This is not present for SVGs.";
                                                                        };
                                                                        readonly height: {
                                                                            readonly type: "number";
                                                                            readonly nullable: true;
                                                                            readonly description: "The pixel height of the image. This is not present for SVGs.";
                                                                        };
                                                                        readonly color: {
                                                                            readonly type: "string";
                                                                            readonly pattern: "^(?:#[0-9a-fA-F]{3}|#[0-9a-fA-F]{4}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8})$";
                                                                            readonly nullable: true;
                                                                            readonly description: "The primary color contained within your image.";
                                                                        };
                                                                        readonly links: {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly original_url: {
                                                                                    readonly type: "string";
                                                                                    readonly format: "uri";
                                                                                    readonly nullable: true;
                                                                                    readonly description: "If your image was resized upon upload this will be a URL to the original file.";
                                                                                };
                                                                            };
                                                                            readonly required: ["original_url"];
                                                                            readonly additionalProperties: false;
                                                                        };
                                                                        readonly uri: {
                                                                            readonly type: "string";
                                                                            readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                            readonly nullable: true;
                                                                            readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                        };
                                                                        readonly url: {
                                                                            readonly type: "string";
                                                                            readonly format: "uri";
                                                                            readonly nullable: true;
                                                                        };
                                                                    };
                                                                    readonly required: ["name", "width", "height", "color", "links", "uri", "url"];
                                                                    readonly additionalProperties: false;
                                                                };
                                                                readonly favicon: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly name: {
                                                                            readonly type: "string";
                                                                            readonly nullable: true;
                                                                        };
                                                                        readonly width: {
                                                                            readonly type: "number";
                                                                            readonly nullable: true;
                                                                            readonly description: "The pixel width of the image. This is not present for SVGs.";
                                                                        };
                                                                        readonly height: {
                                                                            readonly type: "number";
                                                                            readonly nullable: true;
                                                                            readonly description: "The pixel height of the image. This is not present for SVGs.";
                                                                        };
                                                                        readonly color: {
                                                                            readonly type: "string";
                                                                            readonly pattern: "^(?:#[0-9a-fA-F]{3}|#[0-9a-fA-F]{4}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8})$";
                                                                            readonly nullable: true;
                                                                            readonly description: "The primary color contained within your image.";
                                                                        };
                                                                        readonly links: {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly original_url: {
                                                                                    readonly type: "string";
                                                                                    readonly format: "uri";
                                                                                    readonly nullable: true;
                                                                                    readonly description: "If your image was resized upon upload this will be a URL to the original file.";
                                                                                };
                                                                            };
                                                                            readonly required: ["original_url"];
                                                                            readonly additionalProperties: false;
                                                                        };
                                                                        readonly uri: {
                                                                            readonly type: "string";
                                                                            readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                            readonly nullable: true;
                                                                            readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                        };
                                                                        readonly url: {
                                                                            readonly type: "string";
                                                                            readonly format: "uri";
                                                                            readonly nullable: true;
                                                                        };
                                                                    };
                                                                    readonly required: ["name", "width", "height", "color", "links", "uri", "url"];
                                                                    readonly additionalProperties: false;
                                                                };
                                                                readonly size: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["default", "large"];
                                                                    readonly default: "default";
                                                                };
                                                            };
                                                            readonly required: ["dark_mode", "main", "favicon"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly markdown: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly callouts: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly icon_font: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["emojis", "fontawesome"];
                                                                            readonly default: "emojis";
                                                                            readonly description: "Handles the types of icons that are shown in Markdown callouts.";
                                                                        };
                                                                    };
                                                                    readonly additionalProperties: false;
                                                                };
                                                            };
                                                            readonly required: ["callouts"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly navigation: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly first_page: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["documentation", "reference", "landing_page"];
                                                                    readonly default: "landing_page";
                                                                    readonly description: "The page that users will first see when they access your documentation hub.";
                                                                };
                                                                readonly left: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly properties: {
                                                                            readonly type: {
                                                                                readonly type: "string";
                                                                                readonly enum: ["home", "guides", "discussions", "changelog", "search_box", "link_url", "custom_page", "user_controls", "reference", "recipes"];
                                                                            };
                                                                            readonly title: {
                                                                                readonly type: "string";
                                                                                readonly nullable: true;
                                                                            };
                                                                            readonly url: {
                                                                                readonly type: "string";
                                                                                readonly nullable: true;
                                                                            };
                                                                            readonly custom_page: {
                                                                                readonly type: "string";
                                                                                readonly nullable: true;
                                                                            };
                                                                        };
                                                                        readonly required: ["type", "title", "url", "custom_page"];
                                                                        readonly additionalProperties: false;
                                                                    };
                                                                    readonly description: "The navigation settings for the left side of your projects navigation bar.";
                                                                };
                                                                readonly links: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly changelog: {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly label: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["Changelog"];
                                                                                };
                                                                                readonly alias: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly visibility: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["enabled", "disabled"];
                                                                                    readonly default: "enabled";
                                                                                };
                                                                            };
                                                                            readonly required: ["label", "alias"];
                                                                            readonly additionalProperties: false;
                                                                        };
                                                                        readonly discussions: {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly label: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["Discussions"];
                                                                                };
                                                                                readonly alias: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly visibility: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["enabled", "disabled"];
                                                                                    readonly default: "enabled";
                                                                                };
                                                                            };
                                                                            readonly required: ["label", "alias"];
                                                                            readonly additionalProperties: false;
                                                                        };
                                                                        readonly home: {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly label: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["Home"];
                                                                                };
                                                                                readonly visibility: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["enabled", "disabled"];
                                                                                    readonly default: "enabled";
                                                                                };
                                                                            };
                                                                            readonly required: ["label"];
                                                                            readonly additionalProperties: false;
                                                                        };
                                                                        readonly graphql: {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly label: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["GraphQL"];
                                                                                };
                                                                                readonly visibility: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["enabled", "disabled"];
                                                                                    readonly default: "disabled";
                                                                                    readonly nullable: true;
                                                                                };
                                                                            };
                                                                            readonly required: ["label"];
                                                                            readonly additionalProperties: false;
                                                                        };
                                                                        readonly guides: {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly label: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["Guides"];
                                                                                };
                                                                                readonly alias: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly visibility: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["enabled", "disabled"];
                                                                                    readonly default: "enabled";
                                                                                };
                                                                            };
                                                                            readonly required: ["label", "alias"];
                                                                            readonly additionalProperties: false;
                                                                        };
                                                                        readonly recipes: {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly label: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["Recipes"];
                                                                                };
                                                                                readonly alias: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly visibility: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["enabled", "disabled"];
                                                                                    readonly default: "disabled";
                                                                                };
                                                                            };
                                                                            readonly required: ["label", "alias"];
                                                                            readonly additionalProperties: false;
                                                                        };
                                                                        readonly reference: {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly label: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["API Reference"];
                                                                                };
                                                                                readonly alias: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly visibility: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["enabled", "disabled"];
                                                                                    readonly default: "enabled";
                                                                                };
                                                                            };
                                                                            readonly required: ["label", "alias"];
                                                                            readonly additionalProperties: false;
                                                                        };
                                                                    };
                                                                    readonly required: ["changelog", "discussions", "home", "graphql", "guides", "recipes", "reference"];
                                                                    readonly additionalProperties: false;
                                                                };
                                                                readonly logo_link: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["landing_page", "homepage"];
                                                                    readonly default: "homepage";
                                                                    readonly description: "Where users will be directed to when they click on your logo in the navigation bar.";
                                                                };
                                                                readonly page_icons: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["enabled", "disabled"];
                                                                    readonly default: "enabled";
                                                                    readonly description: "Should the links in your project navigation bar include icons?";
                                                                };
                                                                readonly right: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly properties: {
                                                                            readonly type: {
                                                                                readonly type: "string";
                                                                                readonly enum: ["home", "guides", "discussions", "changelog", "search_box", "link_url", "custom_page", "user_controls", "reference", "recipes"];
                                                                            };
                                                                            readonly title: {
                                                                                readonly type: "string";
                                                                                readonly nullable: true;
                                                                            };
                                                                            readonly url: {
                                                                                readonly type: "string";
                                                                                readonly nullable: true;
                                                                            };
                                                                            readonly custom_page: {
                                                                                readonly type: "string";
                                                                                readonly nullable: true;
                                                                            };
                                                                        };
                                                                        readonly required: ["type", "title", "url", "custom_page"];
                                                                        readonly additionalProperties: false;
                                                                    };
                                                                    readonly description: "The navigation settings for the right side of your projects navigation bar.";
                                                                };
                                                                readonly sub_nav: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly properties: {
                                                                            readonly type: {
                                                                                readonly type: "string";
                                                                                readonly enum: ["home", "guides", "discussions", "changelog", "search_box", "link_url", "custom_page", "user_controls", "reference", "recipes"];
                                                                            };
                                                                            readonly title: {
                                                                                readonly type: "string";
                                                                                readonly nullable: true;
                                                                            };
                                                                            readonly url: {
                                                                                readonly type: "string";
                                                                                readonly nullable: true;
                                                                            };
                                                                            readonly custom_page: {
                                                                                readonly type: "string";
                                                                                readonly nullable: true;
                                                                            };
                                                                        };
                                                                        readonly required: ["type", "title", "url", "custom_page"];
                                                                        readonly additionalProperties: false;
                                                                    };
                                                                    readonly description: "The navigation settings for your projects subnavigation bar.";
                                                                };
                                                                readonly subheader_layout: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["links", "dropdown"];
                                                                    readonly default: "links";
                                                                };
                                                                readonly version: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["enabled", "disabled"];
                                                                    readonly default: "enabled";
                                                                    readonly description: "Should your current documentation version be shown in the navigation bar?";
                                                                };
                                                            };
                                                            readonly required: ["left", "links", "right", "sub_nav"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly table_of_contents: {
                                                            readonly type: "string";
                                                            readonly enum: ["enabled", "disabled"];
                                                            readonly default: "enabled";
                                                            readonly description: "Should your guides show a table of contents?";
                                                        };
                                                        readonly ai: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly dropdown: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["enabled", "disabled"];
                                                                    readonly default: "disabled";
                                                                    readonly description: "Should your pages show a share with AI dropdown?";
                                                                };
                                                                readonly options: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly chatgpt: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["enabled", "disabled"];
                                                                            readonly default: "enabled";
                                                                            readonly description: "Enable ChatGPT in the AI dropdown.";
                                                                        };
                                                                        readonly claude: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["enabled", "disabled"];
                                                                            readonly default: "enabled";
                                                                            readonly description: "Enable Claude in the AI dropdown.";
                                                                        };
                                                                        readonly clipboard: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["enabled", "disabled"];
                                                                            readonly default: "enabled";
                                                                            readonly description: "Enable \"Copy to Clipboard\" within in the AI dropdown.";
                                                                        };
                                                                        readonly copilot: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["enabled", "disabled"];
                                                                            readonly default: "enabled";
                                                                            readonly description: "Enable Copilot in the AI dropdown.";
                                                                        };
                                                                        readonly view_as_markdown: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["enabled", "disabled"];
                                                                            readonly default: "enabled";
                                                                            readonly description: "Enable \"View as Markdown\" in the AI dropdown.";
                                                                        };
                                                                    };
                                                                    readonly additionalProperties: false;
                                                                };
                                                            };
                                                            readonly required: ["options"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly whats_next_label: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "What should we call the next steps section of your guides? Defaults to \"What's Next\".";
                                                        };
                                                    };
                                                    readonly required: ["brand", "changelog", "custom_code", "footer", "header", "layout", "logo", "markdown", "navigation", "ai", "whats_next_label"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly canonical_url: {
                                                    readonly type: "string";
                                                    readonly format: "uri";
                                                    readonly nullable: true;
                                                    readonly description: "The canonical base URL for your project defaults to your project's base URL, but you can override the canonical base URL with this field.";
                                                };
                                                readonly custom_login: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly jwt_secret: {
                                                            readonly type: "string";
                                                        };
                                                        readonly login_url: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly logout_url: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["jwt_secret", "login_url", "logout_url"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly default_version: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly pattern: "stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?";
                                                            readonly description: "The version of your project that users are directed to by default.";
                                                        };
                                                    };
                                                    readonly required: ["name"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly description: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                    readonly description: "The description of your project. This is used in the page meta description and is seen by search engines and sites like Facebook.";
                                                };
                                                readonly glossary: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly term: {
                                                                readonly type: "string";
                                                                readonly description: "Glossary term is what gets displayed in your documentation when embedded.";
                                                            };
                                                            readonly definition: {
                                                                readonly type: "string";
                                                                readonly description: "Glossary definition is revealed to users when they mouse over the glossary term.";
                                                            };
                                                        };
                                                        readonly required: ["term", "definition"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly default: readonly [];
                                                    readonly description: "List of glossary terms in your project that can be used within your documentation.";
                                                };
                                                readonly health_check: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly provider: {
                                                            readonly type: "string";
                                                            readonly enum: ["manual", "statuspage", "none"];
                                                            readonly default: "none";
                                                            readonly description: "The type of provider you wish to use for for managing your APIs health: manually or through [Atlassian Statuspage](https://www.atlassian.com/software/statuspage).";
                                                        };
                                                        readonly settings: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly manual: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly status: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["up", "down"];
                                                                            readonly default: "up";
                                                                            readonly description: "If you are manually managing your APIs health this is a status boolean indicating if your API is up or down.";
                                                                        };
                                                                        readonly url: {
                                                                            readonly type: "string";
                                                                            readonly nullable: true;
                                                                            readonly description: "The URL that we will show to your users when your API is down. This is only used when `health_check.provider` is set to `manual`.";
                                                                        };
                                                                    };
                                                                    readonly required: ["url"];
                                                                    readonly additionalProperties: false;
                                                                };
                                                                readonly statuspage: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly id: {
                                                                            readonly type: "string";
                                                                            readonly nullable: true;
                                                                            readonly description: "If managing your APIs health through [Statuspage](https://www.atlassian.com/software/statuspage) this is your Statuspage ID.";
                                                                        };
                                                                    };
                                                                    readonly required: ["id"];
                                                                    readonly additionalProperties: false;
                                                                };
                                                            };
                                                            readonly required: ["manual", "statuspage"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["settings"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly homepage_url: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                    readonly description: "The URL for your company's main website. We'll link to it in various places so people can \"Go Home\".";
                                                };
                                                readonly integrations: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly aws: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly readme_webhook_login: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly external_id: {
                                                                            readonly type: "string";
                                                                            readonly nullable: true;
                                                                        };
                                                                        readonly region: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["af-south-1", "ap-east-1", "ap-northeast-1", "ap-northeast-2", "ap-northeast-3", "ap-south-1", "ap-south-2", "ap-southeast-1", "ap-southeast-2", "ap-southeast-3", "ap-southeast-4", "ap-southeast-5", "ca-central-1", "ca-west-1", "cn-north-1", "cn-northwest-1", "eu-central-1", "eu-central-2", "eu-north-1", "eu-south-1", "eu-south-2", "eu-west-1", "eu-west-2", "eu-west-3", "il-central-1", "me-central-1", "me-south-1", "sa-east-1", "us-east-1", "us-east-2", "us-west-1", "us-west-2"];
                                                                            readonly nullable: true;
                                                                        };
                                                                        readonly role_arn: {
                                                                            readonly type: "string";
                                                                            readonly nullable: true;
                                                                        };
                                                                        readonly usage_plan_id: {
                                                                            readonly type: "string";
                                                                            readonly nullable: true;
                                                                        };
                                                                    };
                                                                    readonly required: ["external_id", "region", "role_arn", "usage_plan_id"];
                                                                    readonly additionalProperties: false;
                                                                };
                                                            };
                                                            readonly required: ["readme_webhook_login"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly bing: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly verify: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["verify"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly google: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly analytics: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                    readonly description: "Your Google Analytics ID. If it starts with UA-, we'll use Universal Analytics otherwise Google Analytics 4.";
                                                                };
                                                                readonly site_verification: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["analytics", "site_verification"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly heap: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly id: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["id"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly intercom: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly app_id: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly secure_mode: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly key: {
                                                                            readonly type: "string";
                                                                            readonly nullable: true;
                                                                            readonly description: "By supplying a secure mode key you will opt into [Intercoms Identity Verification](https://docs.intercom.io/configuring-intercom/enable-secure-mode) system.";
                                                                        };
                                                                        readonly email_only: {
                                                                            readonly type: "boolean";
                                                                            readonly default: false;
                                                                            readonly description: "Should ReadMe only identify users by their email addresses? This integrates better with your existing Intercom but is possibly less secure.";
                                                                        };
                                                                    };
                                                                    readonly required: ["key"];
                                                                    readonly additionalProperties: false;
                                                                };
                                                            };
                                                            readonly required: ["app_id", "secure_mode"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly postman: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly key: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly client_id: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly client_secret: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["key", "client_id", "client_secret"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly koala: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly key: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["key"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly localize: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly key: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["key"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly recaptcha: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly site_key: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly secret_key: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["site_key", "secret_key"];
                                                            readonly additionalProperties: false;
                                                            readonly description: "https://docs.readme.com/main/docs/recaptcha";
                                                        };
                                                        readonly segment: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly key: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly domain: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                    readonly description: "If you are proxying [Segment](https://segment.com/) requests through a custom domain this is that domain. More information about this configuration can be found [here](https://docs.readme.com/main/docs/segment#using-a-custom-domain-with-segment).";
                                                                };
                                                            };
                                                            readonly required: ["key", "domain"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly speakeasy: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly key: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                    readonly description: "The API key for Speakeasy.";
                                                                };
                                                                readonly spec_url: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                    readonly description: "The URL to the Speakeasy spec file.";
                                                                };
                                                            };
                                                            readonly required: ["key", "spec_url"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly stainless: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly key: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                    readonly description: "The API key for Stainless.";
                                                                };
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                    readonly description: "The name of the Stainless project.";
                                                                };
                                                            };
                                                            readonly required: ["key", "name"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly typekit: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly key: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["key"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly zendesk: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly subdomain: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["subdomain"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["aws", "bing", "google", "heap", "intercom", "postman", "koala", "localize", "recaptcha", "segment", "speakeasy", "stainless", "typekit", "zendesk"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly mcp: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly state: {
                                                            readonly type: "string";
                                                            readonly enum: ["enabled", "disabled"];
                                                            readonly default: "disabled";
                                                            readonly description: "The availability of the project's MCP server.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                    readonly description: "Configuration for the project's Model Context Protocol (MCP) server.";
                                                };
                                                readonly name: {
                                                    readonly type: "string";
                                                    readonly description: "The name of the project.";
                                                };
                                                readonly onboarding_completed: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly api: {
                                                            readonly type: "boolean";
                                                            readonly default: false;
                                                        };
                                                        readonly appearance: {
                                                            readonly type: "boolean";
                                                            readonly default: false;
                                                        };
                                                        readonly documentation: {
                                                            readonly type: "boolean";
                                                            readonly default: false;
                                                        };
                                                        readonly domain: {
                                                            readonly type: "boolean";
                                                            readonly default: false;
                                                        };
                                                        readonly jwt: {
                                                            readonly type: "boolean";
                                                            readonly default: false;
                                                        };
                                                        readonly logs: {
                                                            readonly type: "boolean";
                                                            readonly default: false;
                                                        };
                                                        readonly metricsSDK: {
                                                            readonly type: "boolean";
                                                            readonly default: false;
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly pages: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly not_found: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/custom_pages\\/([a-f\\d]{24}|([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                            readonly nullable: true;
                                                            readonly description: "The page you wish to be served to your users when they encounter a 404. This can either map to the `uri` of a Custom Page on your project or be set to `null`. If `null` then the default ReadMe 404 page will be served. The version within the `uri` must be mapped to your stable version.";
                                                        };
                                                    };
                                                    readonly required: ["not_found"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly parent: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                    readonly description: "Does the project have a parent project (enterprise)? If so, this resolves to the parent's subdomain.";
                                                };
                                                readonly plan: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly type: {
                                                            readonly type: "string";
                                                            readonly enum: ["business", "business2018", "business-annual-2024", "enterprise", "free", "freelaunch", "opensource", "startup", "startup2018", "startup-annual-2024"];
                                                            readonly default: "free";
                                                        };
                                                        readonly grace_period: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly enabled: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                };
                                                                readonly end_date: {
                                                                    readonly type: "string";
                                                                    readonly format: "date-time";
                                                                    readonly nullable: true;
                                                                    readonly default: null;
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly trial: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly expired: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                };
                                                                readonly end_date: {
                                                                    readonly type: "string";
                                                                    readonly format: "date-time";
                                                                    readonly description: "The end date for your two week trial.";
                                                                };
                                                            };
                                                            readonly required: ["end_date"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["grace_period", "trial"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly openapi: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "admin"];
                                                            readonly default: "admin";
                                                            readonly description: "The visibility your OpenAPI definitions on your project's `/openapi` page.";
                                                        };
                                                        readonly password: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "The project's password for when `privacy.view` is `password`. This field can be set, but it will not be returned by the API.";
                                                        };
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "admin", "password", "custom_login"];
                                                            readonly default: "public";
                                                            readonly description: "* `public` - Site is available to the public.\n* `admin` - Site is only available to users that have project permissions.\n* `password` - Site is gated behind a password authentication system.\n* `custom_login` - Users who view your site will be forwarded to a URL of your choice, having them login there and be forwarded back to your ReadMe site.";
                                                        };
                                                    };
                                                    readonly required: ["password"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly redirects: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly from: {
                                                                readonly type: "string";
                                                            };
                                                            readonly to: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly required: ["from", "to"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly description: "A collection of page redirects that ReadMe will permanently redirect users to when attempting to render a 404. Check out our [redirect docs](https://docs.readme.com/main/docs/error-pages#section-redirects) for more information on how they are handled.";
                                                };
                                                readonly reference: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly api_sdk_snippets: {
                                                            readonly type: "string";
                                                            readonly enum: ["enabled", "disabled"];
                                                            readonly default: "enabled";
                                                            readonly description: "Enable SDK-generated request code snippets.";
                                                        };
                                                        readonly sdk_snippets: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly external: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["active", "disabled", "enabled"];
                                                                    readonly default: "disabled";
                                                                    readonly description: "State of external SDK snippets feature.";
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly defaults: {
                                                            readonly type: "string";
                                                            readonly enum: ["always_use", "use_only_if_required"];
                                                            readonly default: "use_only_if_required";
                                                            readonly description: "When `always_use`, any `default` values defined in your API definition are used to populate your request data in the API Explorer, even if the parameter is not marked as `required`.";
                                                        };
                                                        readonly json_editor: {
                                                            readonly type: "string";
                                                            readonly enum: ["enabled", "disabled"];
                                                            readonly default: "disabled";
                                                            readonly description: "When `enabled`, allows editing the request body with a JSON editor.";
                                                        };
                                                        readonly request_history: {
                                                            readonly type: "string";
                                                            readonly enum: ["enabled", "disabled"];
                                                            readonly default: "enabled";
                                                            readonly description: "When `enabled`, request history for API endpoints are shown.";
                                                        };
                                                        readonly oauth_flows: {
                                                            readonly type: "string";
                                                            readonly enum: ["enabled", "disabled"];
                                                            readonly default: "disabled";
                                                            readonly description: "When `enabled`, enable the new OAuth Flows experience in the API Reference section.";
                                                        };
                                                        readonly response_examples: {
                                                            readonly type: "string";
                                                            readonly enum: ["expanded", "collapsed"];
                                                            readonly default: "collapsed";
                                                            readonly description: "When `expanded`, response examples will be expanded by default if a 200 level response exists.";
                                                        };
                                                        readonly response_schemas: {
                                                            readonly type: "string";
                                                            readonly enum: ["expanded", "collapsed"];
                                                            readonly default: "collapsed";
                                                            readonly description: "When `expanded`, response schemas will be expanded by default if a 200 level response schema exists.";
                                                        };
                                                    };
                                                    readonly required: ["sdk_snippets"];
                                                    readonly additionalProperties: false;
                                                    readonly description: "Contains options to configure interactive sections on your API Reference pages.";
                                                };
                                                readonly seo: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly overwrite_title_tag: {
                                                            readonly type: "string";
                                                            readonly enum: ["enabled", "disabled"];
                                                            readonly default: "disabled";
                                                            readonly description: "Overwrite pages' <title> tag with their custom metadata title (if present).";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly sitemap: {
                                                    readonly type: "string";
                                                    readonly enum: ["enabled", "disabled"];
                                                    readonly default: "disabled";
                                                    readonly description: "Expose a `sitemap.xml` directory on your project.";
                                                };
                                                readonly llms_txt: {
                                                    readonly type: "string";
                                                    readonly enum: ["enabled", "disabled"];
                                                    readonly default: "disabled";
                                                    readonly description: "Expose an `llms.txt` file to help AI assistants understand your documentation structure.";
                                                };
                                                readonly subdomain: {
                                                    readonly type: "string";
                                                    readonly pattern: "[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*";
                                                    readonly maxLength: 30;
                                                    readonly description: "The subdomain of your project.";
                                                };
                                                readonly suggested_edits: {
                                                    readonly type: "string";
                                                    readonly enum: ["enabled", "disabled"];
                                                    readonly default: "enabled";
                                                    readonly description: "Allow users to suggest edits to your documentation.";
                                                };
                                                readonly variable_defaults: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly id: {
                                                                readonly type: "string";
                                                                readonly description: "Variable Identifier";
                                                            };
                                                            readonly name: {
                                                                readonly type: "string";
                                                                readonly description: "The key name of the variable.";
                                                            };
                                                            readonly default: {
                                                                readonly type: "string";
                                                                readonly description: "The default value of the variable.";
                                                            };
                                                            readonly source: {
                                                                readonly type: "string";
                                                                readonly enum: ["server", "security", "custom", ""];
                                                                readonly default: "";
                                                                readonly description: "The variables source. This can come from a user input or from syncing an OpenAPI definition.";
                                                            };
                                                            readonly type: {
                                                                readonly type: "string";
                                                                readonly enum: ["http", "apiKey", "openIdConnect", "oauth2", ""];
                                                                readonly description: "If variable `source` is `security`, include the OpenAPI security auth type.";
                                                            };
                                                            readonly scheme: {
                                                                readonly type: "string";
                                                                readonly description: "If variable `source` is `security`, include the OpenAPI security auth scheme.";
                                                            };
                                                        };
                                                        readonly required: ["id", "name"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly default: readonly [];
                                                };
                                                readonly webhooks: {
                                                    readonly type: "array";
                                                    readonly items: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly action: {
                                                                readonly type: "string";
                                                                readonly enum: ["login"];
                                                                readonly default: "login";
                                                            };
                                                            readonly timeout: {
                                                                readonly type: "number";
                                                                readonly default: 5000;
                                                            };
                                                            readonly url: {
                                                                readonly type: "string";
                                                                readonly format: "uri";
                                                            };
                                                        };
                                                        readonly required: ["url"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly default: readonly [];
                                                };
                                                readonly id: {
                                                    readonly type: "string";
                                                    readonly pattern: "^[a-f\\d]{24}$";
                                                    readonly description: "The unique, immutable, identifier for the project.";
                                                };
                                                readonly features: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly mdx: {
                                                            readonly type: "string";
                                                            readonly enum: ["enabled", "disabled"];
                                                            readonly default: "disabled";
                                                            readonly description: "If this project supports MDX.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly git: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly connection: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly repository: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly provider_type: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["github", "github_enterprise_server"];
                                                                            readonly description: "The type of provider for the repository.";
                                                                        };
                                                                        readonly name: {
                                                                            readonly type: "string";
                                                                            readonly description: "The name of the repository (e.g., `repo-with-content`).";
                                                                        };
                                                                        readonly full_name: {
                                                                            readonly type: "string";
                                                                            readonly description: "The full name of the repository (e.g., `owner-org/repo-with-content`).";
                                                                        };
                                                                        readonly url: {
                                                                            readonly type: "string";
                                                                            readonly format: "uri";
                                                                            readonly description: "The URL of the repository (e.g., `https://github.com/owner-org/repo-with-content`).";
                                                                        };
                                                                    };
                                                                    readonly required: ["provider_type", "name", "full_name", "url"];
                                                                    readonly additionalProperties: false;
                                                                    readonly nullable: true;
                                                                };
                                                                readonly organization: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly name: {
                                                                            readonly type: "string";
                                                                            readonly description: "The name of the organization the linked repository is a part of (e.g., `owner-org`).";
                                                                        };
                                                                        readonly provider_type: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["github", "github_enterprise_server"];
                                                                            readonly description: "The type of provider for the organization.";
                                                                        };
                                                                    };
                                                                    readonly required: ["name", "provider_type"];
                                                                    readonly additionalProperties: false;
                                                                    readonly nullable: true;
                                                                };
                                                                readonly status: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["active", "inactive", "none"];
                                                                    readonly default: "none";
                                                                    readonly description: "Indicates if the project has a bi-directional sync connection set up. Below is the meaning of each possible value:\n- `active` - the project has an external repository connected and the connection to the repository is active.\n- `inactive` - the project has an external repository connected but the connection to the repository is inactive.\n- `none` - the project is not connected to an external repository.";
                                                                };
                                                            };
                                                            readonly required: ["repository", "organization"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["connection"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly permissions: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly appearance: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly private_label: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["enabled", "disabled"];
                                                                    readonly default: "disabled";
                                                                    readonly description: "If this project is allowed to private label their Hub and remove all ReadMe branding.";
                                                                };
                                                                readonly custom_code: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly css: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["enabled", "disabled"];
                                                                            readonly default: "disabled";
                                                                            readonly description: "If this project is allowed to utilize custom CSS.";
                                                                        };
                                                                        readonly html: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["enabled", "disabled"];
                                                                            readonly default: "disabled";
                                                                            readonly description: "If this project is allowed to utilize custom HTML.";
                                                                        };
                                                                        readonly js: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["enabled", "disabled"];
                                                                            readonly default: "disabled";
                                                                            readonly description: "If this project is allowed to utilize custom JS.";
                                                                        };
                                                                    };
                                                                    readonly additionalProperties: false;
                                                                };
                                                            };
                                                            readonly required: ["custom_code"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly branches: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly merge: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly admin: {
                                                                            readonly type: "boolean";
                                                                            readonly description: "Whether admin role can perform merges";
                                                                        };
                                                                        readonly editor: {
                                                                            readonly type: "boolean";
                                                                            readonly description: "Whether editor role can perform merges";
                                                                        };
                                                                    };
                                                                    readonly required: ["admin", "editor"];
                                                                    readonly additionalProperties: false;
                                                                    readonly description: "Role-based access control for merging branches";
                                                                };
                                                            };
                                                            readonly required: ["merge"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["appearance", "branches"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly refactored: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly status: {
                                                            readonly type: "string";
                                                            readonly enum: ["enabled", "disabled"];
                                                            readonly default: "disabled";
                                                            readonly description: "Indicates if the project has our new Unified UI experience.";
                                                        };
                                                        readonly migrated: {
                                                            readonly type: "string";
                                                            readonly enum: ["failed", "processing", "successful", "unknown"];
                                                            readonly default: "unknown";
                                                            readonly description: "Indicates if the project has been migrated from Dash to Superhub.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                    readonly description: "A URI to the project resource.";
                                                };
                                            };
                                            readonly required: ["api_designer", "appearance", "canonical_url", "custom_login", "default_version", "description", "health_check", "homepage_url", "integrations", "mcp", "name", "onboarding_completed", "pages", "parent", "plan", "privacy", "redirects", "reference", "seo", "subdomain", "id", "features", "git", "permissions", "refactored", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches/{branch}/reference': {
            readonly post: {
                readonly operationId: "createReference";
                readonly summary: "Create a reference page";
                readonly tags: ["API Reference"];
                readonly description: "Create a page in the API Reference section of your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly allow_crawlers: {
                                        readonly type: "string";
                                        readonly enum: ["enabled", "disabled"];
                                        readonly default: "enabled";
                                        readonly description: "Allow indexing by robots.";
                                    };
                                    readonly appearance: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly icon: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly type: {
                                                        readonly type: "string";
                                                        readonly enum: ["icon", "emoji"];
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly category: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly uri: {
                                                readonly type: "string";
                                                readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/categories\\/(guides|reference)\\/((.*))";
                                                readonly description: "A URI to the category resource.";
                                            };
                                        };
                                        readonly required: ["uri"];
                                        readonly additionalProperties: false;
                                    };
                                    readonly content: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly body: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly excerpt: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly link: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly url: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly new_tab: {
                                                        readonly type: "boolean";
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                                readonly description: "Information about where this page should redirect to; only available when `type` is `link`.";
                                            };
                                            readonly next: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly description: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly pages: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly anyOf: [{
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly slug: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly title: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                    };
                                                                    readonly type: {
                                                                        readonly type: "string";
                                                                        readonly enum: ["basic", "endpoint"];
                                                                    };
                                                                };
                                                                readonly required: ["slug", "title", "type"];
                                                                readonly additionalProperties: false;
                                                            }, {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly title: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                    };
                                                                    readonly type: {
                                                                        readonly type: "string";
                                                                        readonly enum: ["link"];
                                                                    };
                                                                    readonly url: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                                readonly required: ["title", "type", "url"];
                                                                readonly additionalProperties: false;
                                                            }];
                                                        };
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly metadata: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly description: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly keywords: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly title: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly image: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly parent: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly uri: {
                                                readonly type: "string";
                                                readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly privacy: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly view: {
                                                readonly type: "string";
                                                readonly enum: ["public", "anyone_with_link"];
                                                readonly default: "anyone_with_link";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly slug: {
                                        readonly allOf: [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "string";
                                            readonly minLength: 1;
                                        }];
                                        readonly description: "The accessible URL slug for the page.";
                                    };
                                    readonly state: {
                                        readonly type: "string";
                                        readonly enum: ["current", "deprecated"];
                                        readonly default: "current";
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: ["api_config", "basic", "endpoint", "link", "webhook"];
                                        readonly default: "basic";
                                    };
                                    readonly connections: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly recipes: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/recipes\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                            readonly description: "URI of the recipe that this API reference is connected to. The recipe and API reference must exist within the same version.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly position: {
                                        readonly type: "number";
                                    };
                                    readonly api_config: {
                                        readonly type: "string";
                                        readonly enum: ["authentication", "getting-started", "my-requests"];
                                        readonly nullable: true;
                                    };
                                    readonly api: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly method: {
                                                readonly type: "string";
                                                readonly enum: ["get", "put", "post", "delete", "options", "head", "patch", "trace"];
                                                readonly description: "The endpoint HTTP method.";
                                            };
                                            readonly path: {
                                                readonly type: "string";
                                                readonly description: "The endpoint path.";
                                            };
                                            readonly schema: {
                                                readonly nullable: true;
                                            };
                                            readonly stats: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly additional_properties: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation uses `additionalProperties` for handling extra schema properties.";
                                                    };
                                                    readonly callbacks: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation has `callbacks` documented.";
                                                    };
                                                    readonly circular_references: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation contains `$ref` schema pointers that resolve to itself.";
                                                    };
                                                    readonly common_parameters: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation utilizes common parameters set at the path level.";
                                                    };
                                                    readonly discriminators: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation utilizes `discriminator` for discriminating between different parts in a polymorphic schema.";
                                                    };
                                                    readonly links: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation has `links` documented.";
                                                    };
                                                    readonly polymorphism: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation contains polymorphic schemas.";
                                                    };
                                                    readonly references: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation, after being dereferenced, has `x-readme-ref-name` entries defining what the original `$ref` schema pointers were named.";
                                                    };
                                                    readonly server_variables: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation has composable variables configured for its server definition.";
                                                    };
                                                    readonly style: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation has parameters that have specific `style` serializations.";
                                                    };
                                                    readonly webhooks: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API definition has `webhooks` documented.";
                                                    };
                                                    readonly xml_requests: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation has request bodies that accept XML.";
                                                    };
                                                    readonly xml_responses: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation has response payloads that return XML.";
                                                    };
                                                    readonly xml_schemas: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation has parameters or schemas that can serialize to XML.";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                                readonly description: "OpenAPI features that are utilized within this API operation.";
                                            };
                                            readonly source: {
                                                readonly type: "string";
                                                readonly enum: ["api", "apidesigner", "apieditor", "bidi", "form", "postman", "rdme", "rdme_github", "url"];
                                                readonly nullable: true;
                                            };
                                            readonly uri: {
                                                readonly type: "string";
                                                readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/apis\\/((([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+.(json|yaml|yml)))";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                };
                                readonly required: ["category", "title"];
                                readonly additionalProperties: false;
                            };
                        };
                    };
                    readonly required: true;
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '201': {
                        readonly description: "Created";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly allow_crawlers: {
                                                    readonly type: "string";
                                                    readonly enum: ["enabled", "disabled"];
                                                    readonly default: "enabled";
                                                    readonly description: "Allow indexing by robots.";
                                                };
                                                readonly appearance: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly icon: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly type: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["icon", "emoji"];
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["name", "type"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["icon"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly category: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/categories\\/(guides|reference)\\/((.*))";
                                                            readonly description: "A URI to the category resource.";
                                                        };
                                                    };
                                                    readonly required: ["uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly content: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly body: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly excerpt: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly link: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly new_tab: {
                                                                    readonly type: "boolean";
                                                                    readonly nullable: true;
                                                                    readonly description: "Should this URL be opened up in a new tab?";
                                                                };
                                                            };
                                                            readonly required: ["url", "new_tab"];
                                                            readonly additionalProperties: false;
                                                            readonly description: "Information about where this page should redirect to; only available when `type` is `link`.";
                                                        };
                                                        readonly next: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly description: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly pages: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly anyOf: [{
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly slug: {
                                                                                    readonly type: "string";
                                                                                };
                                                                                readonly title: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly type: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["basic", "endpoint"];
                                                                                };
                                                                            };
                                                                            readonly required: ["slug", "title", "type"];
                                                                            readonly additionalProperties: false;
                                                                        }, {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly title: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly type: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["link"];
                                                                                };
                                                                                readonly url: {
                                                                                    readonly type: "string";
                                                                                };
                                                                            };
                                                                            readonly required: ["title", "type", "url"];
                                                                            readonly additionalProperties: false;
                                                                        }];
                                                                    };
                                                                };
                                                            };
                                                            readonly required: ["description", "pages"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["body", "excerpt", "link", "next"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly metadata: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly description: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly image: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly uri: {
                                                                    readonly type: "string";
                                                                    readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                    readonly nullable: true;
                                                                    readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                };
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly format: "uri";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["uri", "url"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly keywords: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "A comma-separated list of keywords to place into your page metadata.";
                                                        };
                                                        readonly title: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["description", "image", "keywords", "title"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly parent: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                            readonly nullable: true;
                                                            readonly description: "A URI to the parent page resource including the page ID or slug.";
                                                        };
                                                    };
                                                    readonly required: ["uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "anyone_with_link"];
                                                            readonly default: "anyone_with_link";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly slug: {
                                                    readonly allOf: [{
                                                        readonly type: "string";
                                                    }, {
                                                        readonly type: "string";
                                                        readonly minLength: 1;
                                                    }];
                                                    readonly description: "The accessible URL slug for the page.";
                                                };
                                                readonly state: {
                                                    readonly type: "string";
                                                    readonly enum: ["current", "deprecated"];
                                                    readonly default: "current";
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: ["api_config", "basic", "endpoint", "link", "webhook"];
                                                    readonly default: "basic";
                                                };
                                                readonly api_config: {
                                                    readonly type: "string";
                                                    readonly enum: ["authentication", "getting-started", "my-requests"];
                                                    readonly nullable: true;
                                                };
                                                readonly api: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly method: {
                                                            readonly type: "string";
                                                            readonly enum: ["get", "put", "post", "delete", "options", "head", "patch", "trace"];
                                                            readonly description: "The endpoint HTTP method.";
                                                        };
                                                        readonly path: {
                                                            readonly type: "string";
                                                            readonly description: "The endpoint path.";
                                                        };
                                                        readonly schema: {
                                                            readonly nullable: true;
                                                            readonly description: "The API schema for this reference endpoint. This schema may be a reduced (i.e., only contains the necessary information for this endpoint) and/or dereferenced version of the full API definition, depending upon the query parameters used for this request.";
                                                        };
                                                        readonly stats: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly additional_properties: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation uses `additionalProperties` for handling extra schema properties.";
                                                                };
                                                                readonly callbacks: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has `callbacks` documented.";
                                                                };
                                                                readonly circular_references: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation contains `$ref` schema pointers that resolve to itself.";
                                                                };
                                                                readonly common_parameters: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation utilizes common parameters set at the path level.";
                                                                };
                                                                readonly discriminators: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation utilizes `discriminator` for discriminating between different parts in a polymorphic schema.";
                                                                };
                                                                readonly links: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has `links` documented.";
                                                                };
                                                                readonly polymorphism: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation contains polymorphic schemas.";
                                                                };
                                                                readonly references: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation, after being dereferenced, has `x-readme-ref-name` entries defining what the original `$ref` schema pointers were named.";
                                                                };
                                                                readonly server_variables: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has composable variables configured for its server definition.";
                                                                };
                                                                readonly style: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has parameters that have specific `style` serializations.";
                                                                };
                                                                readonly webhooks: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API definition has `webhooks` documented.";
                                                                };
                                                                readonly xml_requests: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has request bodies that accept XML.";
                                                                };
                                                                readonly xml_responses: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has response payloads that return XML.";
                                                                };
                                                                readonly xml_schemas: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has parameters or schemas that can serialize to XML.";
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                            readonly description: "OpenAPI features that are utilized within this API operation.";
                                                        };
                                                        readonly source: {
                                                            readonly type: "string";
                                                            readonly enum: ["api", "apidesigner", "apieditor", "bidi", "form", "postman", "rdme", "rdme_github", "url"];
                                                            readonly nullable: true;
                                                            readonly description: "The source by which this API definition was ingested.";
                                                        };
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/apis\\/((([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+.(json|yaml|yml)))";
                                                            readonly nullable: true;
                                                            readonly description: "A URI to the API resource.";
                                                        };
                                                    };
                                                    readonly required: ["method", "path", "stats", "source", "uri"];
                                                    readonly additionalProperties: false;
                                                    readonly description: "Information about the API that this reference page is attached to.";
                                                };
                                                readonly connections: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly recipes: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly uri: {
                                                                        readonly type: "string";
                                                                        readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/recipes\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                                        readonly description: "URI of the recipe that this API reference is connected to. The recipe and API reference must exist within the same version.";
                                                                    };
                                                                };
                                                                readonly required: ["uri"];
                                                                readonly additionalProperties: false;
                                                            };
                                                            readonly nullable: true;
                                                            readonly description: "A collection of recipes that are displayed on this API reference.";
                                                        };
                                                    };
                                                    readonly required: ["recipes"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly href: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly dash: {
                                                            readonly type: "string";
                                                            readonly format: "uri";
                                                            readonly description: "A URL to this page in your ReadMe Dash.";
                                                        };
                                                        readonly hub: {
                                                            readonly type: "string";
                                                            readonly format: "uri";
                                                            readonly description: "A URL to this page on your ReadMe hub.";
                                                        };
                                                    };
                                                    readonly required: ["dash", "hub"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project resource.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly project: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly description: "The name of the project.";
                                                        };
                                                        readonly subdomain: {
                                                            readonly type: "string";
                                                            readonly pattern: "[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*";
                                                            readonly maxLength: 30;
                                                            readonly description: "The subdomain of the project.";
                                                        };
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project that this page belongs to.";
                                                        };
                                                    };
                                                    readonly required: ["name", "subdomain", "uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly renderable: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly status: {
                                                            readonly type: "boolean";
                                                            readonly default: true;
                                                            readonly description: "A flag for if the resource is renderable or not.";
                                                        };
                                                        readonly error: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "The rendering error.";
                                                        };
                                                        readonly message: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Additional details about the rendering error.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly updated_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the page was updated.";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                    readonly description: "A URI to the page resource.";
                                                };
                                            };
                                            readonly required: ["appearance", "category", "content", "metadata", "parent", "privacy", "slug", "title", "api_config", "api", "connections", "href", "links", "project", "renderable", "updated_at", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches/{branch}/reference/{slug}': {
            readonly delete: {
                readonly operationId: "deleteReference";
                readonly summary: "Delete a reference page";
                readonly tags: ["API Reference"];
                readonly description: "Delete a page from the API Reference section of your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                    };
                    readonly in: "path";
                    readonly name: "slug";
                    readonly required: true;
                    readonly description: "A URL-safe representation of the resource.";
                }];
                readonly responses: {
                    readonly '204': {
                        readonly description: "No Content";
                    };
                };
            };
            readonly patch: {
                readonly operationId: "updateReference";
                readonly summary: "Update a reference page";
                readonly tags: ["API Reference"];
                readonly description: "Updates an existing page in the API Reference section of your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly allow_crawlers: {
                                        readonly type: "string";
                                        readonly enum: ["enabled", "disabled"];
                                        readonly default: "enabled";
                                        readonly description: "Allow indexing by robots.";
                                    };
                                    readonly appearance: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly icon: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly type: {
                                                        readonly type: "string";
                                                        readonly enum: ["icon", "emoji"];
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly category: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly uri: {
                                                readonly type: "string";
                                                readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/categories\\/(guides|reference)\\/((.*))";
                                                readonly description: "A URI to the category resource.";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly content: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly body: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly excerpt: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly link: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly url: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly new_tab: {
                                                        readonly type: "boolean";
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                                readonly description: "Information about where this page should redirect to; only available when `type` is `link`.";
                                            };
                                            readonly next: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly description: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly pages: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly anyOf: [{
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly slug: {
                                                                        readonly type: "string";
                                                                    };
                                                                    readonly title: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                    };
                                                                    readonly type: {
                                                                        readonly type: "string";
                                                                        readonly enum: ["basic", "endpoint"];
                                                                    };
                                                                };
                                                                readonly required: ["slug", "title", "type"];
                                                                readonly additionalProperties: false;
                                                            }, {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly title: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                    };
                                                                    readonly type: {
                                                                        readonly type: "string";
                                                                        readonly enum: ["link"];
                                                                    };
                                                                    readonly url: {
                                                                        readonly type: "string";
                                                                    };
                                                                };
                                                                readonly required: ["title", "type", "url"];
                                                                readonly additionalProperties: false;
                                                            }];
                                                        };
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly metadata: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly description: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly keywords: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly title: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                            readonly image: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly parent: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly uri: {
                                                readonly type: "string";
                                                readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly privacy: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly view: {
                                                readonly type: "string";
                                                readonly enum: ["public", "anyone_with_link"];
                                                readonly default: "anyone_with_link";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly slug: {
                                        readonly allOf: [{
                                            readonly type: "string";
                                        }, {
                                            readonly type: "string";
                                            readonly minLength: 1;
                                        }];
                                        readonly description: "The accessible URL slug for the page.";
                                    };
                                    readonly state: {
                                        readonly type: "string";
                                        readonly enum: ["current", "deprecated"];
                                        readonly default: "current";
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                    };
                                    readonly type: {
                                        readonly type: "string";
                                        readonly enum: ["api_config", "basic", "endpoint", "link", "webhook"];
                                        readonly default: "basic";
                                    };
                                    readonly connections: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly recipes: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/recipes\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                            readonly description: "URI of the recipe that this API reference is connected to. The recipe and API reference must exist within the same version.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly api: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly method: {
                                                readonly type: "string";
                                                readonly enum: ["get", "put", "post", "delete", "options", "head", "patch", "trace"];
                                                readonly description: "The endpoint HTTP method.";
                                            };
                                            readonly path: {
                                                readonly type: "string";
                                                readonly description: "The endpoint path.";
                                            };
                                            readonly schema: {
                                                readonly nullable: true;
                                                readonly type: "string";
                                            };
                                            readonly stats: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly additional_properties: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation uses `additionalProperties` for handling extra schema properties.";
                                                    };
                                                    readonly callbacks: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation has `callbacks` documented.";
                                                    };
                                                    readonly circular_references: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation contains `$ref` schema pointers that resolve to itself.";
                                                    };
                                                    readonly common_parameters: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation utilizes common parameters set at the path level.";
                                                    };
                                                    readonly discriminators: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation utilizes `discriminator` for discriminating between different parts in a polymorphic schema.";
                                                    };
                                                    readonly links: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation has `links` documented.";
                                                    };
                                                    readonly polymorphism: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation contains polymorphic schemas.";
                                                    };
                                                    readonly references: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation, after being dereferenced, has `x-readme-ref-name` entries defining what the original `$ref` schema pointers were named.";
                                                    };
                                                    readonly server_variables: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation has composable variables configured for its server definition.";
                                                    };
                                                    readonly style: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation has parameters that have specific `style` serializations.";
                                                    };
                                                    readonly webhooks: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API definition has `webhooks` documented.";
                                                    };
                                                    readonly xml_requests: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation has request bodies that accept XML.";
                                                    };
                                                    readonly xml_responses: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation has response payloads that return XML.";
                                                    };
                                                    readonly xml_schemas: {
                                                        readonly type: "boolean";
                                                        readonly default: false;
                                                        readonly description: "This API operation has parameters or schemas that can serialize to XML.";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                                readonly description: "OpenAPI features that are utilized within this API operation.";
                                            };
                                            readonly source: {
                                                readonly type: "string";
                                                readonly enum: ["api", "apidesigner", "apieditor", "bidi", "form", "postman", "rdme", "rdme_github", "url"];
                                                readonly nullable: true;
                                            };
                                            readonly uri: {
                                                readonly type: "string";
                                                readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/apis\\/((([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+.(json|yaml|yml)))";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                        readonly description: "Information about the API that this reference page is attached to. If you wish to detach this page from an API definition, making it a stand page, set `api.uri` to `null`.";
                                    };
                                    readonly position: {
                                        readonly type: "number";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                    };
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                    };
                    readonly in: "path";
                    readonly name: "slug";
                    readonly required: true;
                    readonly description: "A URL-safe representation of the resource.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly allow_crawlers: {
                                                    readonly type: "string";
                                                    readonly enum: ["enabled", "disabled"];
                                                    readonly default: "enabled";
                                                    readonly description: "Allow indexing by robots.";
                                                };
                                                readonly appearance: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly icon: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly type: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["icon", "emoji"];
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["name", "type"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["icon"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly category: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/categories\\/(guides|reference)\\/((.*))";
                                                            readonly description: "A URI to the category resource.";
                                                        };
                                                    };
                                                    readonly required: ["uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly content: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly body: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly excerpt: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly link: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly new_tab: {
                                                                    readonly type: "boolean";
                                                                    readonly nullable: true;
                                                                    readonly description: "Should this URL be opened up in a new tab?";
                                                                };
                                                            };
                                                            readonly required: ["url", "new_tab"];
                                                            readonly additionalProperties: false;
                                                            readonly description: "Information about where this page should redirect to; only available when `type` is `link`.";
                                                        };
                                                        readonly next: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly description: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly pages: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly anyOf: [{
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly slug: {
                                                                                    readonly type: "string";
                                                                                };
                                                                                readonly title: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly type: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["basic", "endpoint"];
                                                                                };
                                                                            };
                                                                            readonly required: ["slug", "title", "type"];
                                                                            readonly additionalProperties: false;
                                                                        }, {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly title: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly type: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["link"];
                                                                                };
                                                                                readonly url: {
                                                                                    readonly type: "string";
                                                                                };
                                                                            };
                                                                            readonly required: ["title", "type", "url"];
                                                                            readonly additionalProperties: false;
                                                                        }];
                                                                    };
                                                                };
                                                            };
                                                            readonly required: ["description", "pages"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["body", "excerpt", "link", "next"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly metadata: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly description: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly image: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly uri: {
                                                                    readonly type: "string";
                                                                    readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                    readonly nullable: true;
                                                                    readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                };
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly format: "uri";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["uri", "url"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly keywords: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "A comma-separated list of keywords to place into your page metadata.";
                                                        };
                                                        readonly title: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["description", "image", "keywords", "title"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly parent: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                            readonly nullable: true;
                                                            readonly description: "A URI to the parent page resource including the page ID or slug.";
                                                        };
                                                    };
                                                    readonly required: ["uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "anyone_with_link"];
                                                            readonly default: "anyone_with_link";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly slug: {
                                                    readonly allOf: [{
                                                        readonly type: "string";
                                                    }, {
                                                        readonly type: "string";
                                                        readonly minLength: 1;
                                                    }];
                                                    readonly description: "The accessible URL slug for the page.";
                                                };
                                                readonly state: {
                                                    readonly type: "string";
                                                    readonly enum: ["current", "deprecated"];
                                                    readonly default: "current";
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: ["api_config", "basic", "endpoint", "link", "webhook"];
                                                    readonly default: "basic";
                                                };
                                                readonly api_config: {
                                                    readonly type: "string";
                                                    readonly enum: ["authentication", "getting-started", "my-requests"];
                                                    readonly nullable: true;
                                                };
                                                readonly api: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly method: {
                                                            readonly type: "string";
                                                            readonly enum: ["get", "put", "post", "delete", "options", "head", "patch", "trace"];
                                                            readonly description: "The endpoint HTTP method.";
                                                        };
                                                        readonly path: {
                                                            readonly type: "string";
                                                            readonly description: "The endpoint path.";
                                                        };
                                                        readonly schema: {
                                                            readonly nullable: true;
                                                            readonly description: "The API schema for this reference endpoint. This schema may be a reduced (i.e., only contains the necessary information for this endpoint) and/or dereferenced version of the full API definition, depending upon the query parameters used for this request.";
                                                        };
                                                        readonly stats: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly additional_properties: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation uses `additionalProperties` for handling extra schema properties.";
                                                                };
                                                                readonly callbacks: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has `callbacks` documented.";
                                                                };
                                                                readonly circular_references: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation contains `$ref` schema pointers that resolve to itself.";
                                                                };
                                                                readonly common_parameters: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation utilizes common parameters set at the path level.";
                                                                };
                                                                readonly discriminators: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation utilizes `discriminator` for discriminating between different parts in a polymorphic schema.";
                                                                };
                                                                readonly links: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has `links` documented.";
                                                                };
                                                                readonly polymorphism: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation contains polymorphic schemas.";
                                                                };
                                                                readonly references: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation, after being dereferenced, has `x-readme-ref-name` entries defining what the original `$ref` schema pointers were named.";
                                                                };
                                                                readonly server_variables: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has composable variables configured for its server definition.";
                                                                };
                                                                readonly style: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has parameters that have specific `style` serializations.";
                                                                };
                                                                readonly webhooks: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API definition has `webhooks` documented.";
                                                                };
                                                                readonly xml_requests: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has request bodies that accept XML.";
                                                                };
                                                                readonly xml_responses: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has response payloads that return XML.";
                                                                };
                                                                readonly xml_schemas: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has parameters or schemas that can serialize to XML.";
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                            readonly description: "OpenAPI features that are utilized within this API operation.";
                                                        };
                                                        readonly source: {
                                                            readonly type: "string";
                                                            readonly enum: ["api", "apidesigner", "apieditor", "bidi", "form", "postman", "rdme", "rdme_github", "url"];
                                                            readonly nullable: true;
                                                            readonly description: "The source by which this API definition was ingested.";
                                                        };
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/apis\\/((([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+.(json|yaml|yml)))";
                                                            readonly nullable: true;
                                                            readonly description: "A URI to the API resource.";
                                                        };
                                                    };
                                                    readonly required: ["method", "path", "stats", "source", "uri"];
                                                    readonly additionalProperties: false;
                                                    readonly description: "Information about the API that this reference page is attached to.";
                                                };
                                                readonly connections: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly recipes: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly uri: {
                                                                        readonly type: "string";
                                                                        readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/recipes\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                                        readonly description: "URI of the recipe that this API reference is connected to. The recipe and API reference must exist within the same version.";
                                                                    };
                                                                };
                                                                readonly required: ["uri"];
                                                                readonly additionalProperties: false;
                                                            };
                                                            readonly nullable: true;
                                                            readonly description: "A collection of recipes that are displayed on this API reference.";
                                                        };
                                                    };
                                                    readonly required: ["recipes"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly href: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly dash: {
                                                            readonly type: "string";
                                                            readonly format: "uri";
                                                            readonly description: "A URL to this page in your ReadMe Dash.";
                                                        };
                                                        readonly hub: {
                                                            readonly type: "string";
                                                            readonly format: "uri";
                                                            readonly description: "A URL to this page on your ReadMe hub.";
                                                        };
                                                    };
                                                    readonly required: ["dash", "hub"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project resource.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly project: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly description: "The name of the project.";
                                                        };
                                                        readonly subdomain: {
                                                            readonly type: "string";
                                                            readonly pattern: "[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*";
                                                            readonly maxLength: 30;
                                                            readonly description: "The subdomain of the project.";
                                                        };
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project that this page belongs to.";
                                                        };
                                                    };
                                                    readonly required: ["name", "subdomain", "uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly renderable: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly status: {
                                                            readonly type: "boolean";
                                                            readonly default: true;
                                                            readonly description: "A flag for if the resource is renderable or not.";
                                                        };
                                                        readonly error: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "The rendering error.";
                                                        };
                                                        readonly message: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Additional details about the rendering error.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly updated_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the page was updated.";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                    readonly description: "A URI to the page resource.";
                                                };
                                            };
                                            readonly required: ["appearance", "category", "content", "metadata", "parent", "privacy", "slug", "title", "api_config", "api", "connections", "href", "links", "project", "renderable", "updated_at", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
            readonly get: {
                readonly operationId: "getReference";
                readonly summary: "Get a reference page";
                readonly tags: ["API Reference"];
                readonly description: "Get a page from the API Reference section of your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly enum: ["true", "false"];
                        readonly default: "false";
                    };
                    readonly in: "query";
                    readonly name: "dereference";
                    readonly required: false;
                    readonly description: "Whether or not to dereference the attached API definition. Defaults to `false` if not specified (subject to change while API v2 is still in beta).";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly enum: ["true", "false"];
                        readonly default: "true";
                    };
                    readonly in: "query";
                    readonly name: "reduce";
                    readonly required: false;
                    readonly description: "Whether or not to reduce the attached API definition. Defaults to `true` if not specified (subject to change while API v2 is still in beta).";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                    };
                    readonly in: "path";
                    readonly name: "slug";
                    readonly required: true;
                    readonly description: "A URL-safe representation of the resource.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly allow_crawlers: {
                                                    readonly type: "string";
                                                    readonly enum: ["enabled", "disabled"];
                                                    readonly default: "enabled";
                                                    readonly description: "Allow indexing by robots.";
                                                };
                                                readonly appearance: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly icon: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly type: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["icon", "emoji"];
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["name", "type"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["icon"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly category: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/categories\\/(guides|reference)\\/((.*))";
                                                            readonly description: "A URI to the category resource.";
                                                        };
                                                    };
                                                    readonly required: ["uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly content: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly body: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly excerpt: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly link: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly new_tab: {
                                                                    readonly type: "boolean";
                                                                    readonly nullable: true;
                                                                    readonly description: "Should this URL be opened up in a new tab?";
                                                                };
                                                            };
                                                            readonly required: ["url", "new_tab"];
                                                            readonly additionalProperties: false;
                                                            readonly description: "Information about where this page should redirect to; only available when `type` is `link`.";
                                                        };
                                                        readonly next: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly description: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly pages: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly anyOf: [{
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly slug: {
                                                                                    readonly type: "string";
                                                                                };
                                                                                readonly title: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly type: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["basic", "endpoint"];
                                                                                };
                                                                            };
                                                                            readonly required: ["slug", "title", "type"];
                                                                            readonly additionalProperties: false;
                                                                        }, {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly title: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                };
                                                                                readonly type: {
                                                                                    readonly type: "string";
                                                                                    readonly enum: ["link"];
                                                                                };
                                                                                readonly url: {
                                                                                    readonly type: "string";
                                                                                };
                                                                            };
                                                                            readonly required: ["title", "type", "url"];
                                                                            readonly additionalProperties: false;
                                                                        }];
                                                                    };
                                                                };
                                                            };
                                                            readonly required: ["description", "pages"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly required: ["body", "excerpt", "link", "next"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly metadata: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly description: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly image: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly uri: {
                                                                    readonly type: "string";
                                                                    readonly pattern: "\\/images\\/([a-f\\d]{24})";
                                                                    readonly nullable: true;
                                                                    readonly description: "A URI to the `getImages` endpoint for this image. If the is a legacy image then this `uri` will be `null`. And if you wish to delete this image then you should set this to `null`.";
                                                                };
                                                                readonly url: {
                                                                    readonly type: "string";
                                                                    readonly format: "uri";
                                                                    readonly nullable: true;
                                                                };
                                                            };
                                                            readonly required: ["uri", "url"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly keywords: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "A comma-separated list of keywords to place into your page metadata.";
                                                        };
                                                        readonly title: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                    };
                                                    readonly required: ["description", "image", "keywords", "title"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly parent: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                            readonly nullable: true;
                                                            readonly description: "A URI to the parent page resource including the page ID or slug.";
                                                        };
                                                    };
                                                    readonly required: ["uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "anyone_with_link"];
                                                            readonly default: "anyone_with_link";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly slug: {
                                                    readonly allOf: [{
                                                        readonly type: "string";
                                                    }, {
                                                        readonly type: "string";
                                                        readonly minLength: 1;
                                                    }];
                                                    readonly description: "The accessible URL slug for the page.";
                                                };
                                                readonly state: {
                                                    readonly type: "string";
                                                    readonly enum: ["current", "deprecated"];
                                                    readonly default: "current";
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                };
                                                readonly type: {
                                                    readonly type: "string";
                                                    readonly enum: ["api_config", "basic", "endpoint", "link", "webhook"];
                                                    readonly default: "basic";
                                                };
                                                readonly api_config: {
                                                    readonly type: "string";
                                                    readonly enum: ["authentication", "getting-started", "my-requests"];
                                                    readonly nullable: true;
                                                };
                                                readonly api: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly method: {
                                                            readonly type: "string";
                                                            readonly enum: ["get", "put", "post", "delete", "options", "head", "patch", "trace"];
                                                            readonly description: "The endpoint HTTP method.";
                                                        };
                                                        readonly path: {
                                                            readonly type: "string";
                                                            readonly description: "The endpoint path.";
                                                        };
                                                        readonly schema: {
                                                            readonly nullable: true;
                                                            readonly description: "The API schema for this reference endpoint. This schema may be a reduced (i.e., only contains the necessary information for this endpoint) and/or dereferenced version of the full API definition, depending upon the query parameters used for this request.";
                                                        };
                                                        readonly stats: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly additional_properties: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation uses `additionalProperties` for handling extra schema properties.";
                                                                };
                                                                readonly callbacks: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has `callbacks` documented.";
                                                                };
                                                                readonly circular_references: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation contains `$ref` schema pointers that resolve to itself.";
                                                                };
                                                                readonly common_parameters: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation utilizes common parameters set at the path level.";
                                                                };
                                                                readonly discriminators: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation utilizes `discriminator` for discriminating between different parts in a polymorphic schema.";
                                                                };
                                                                readonly links: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has `links` documented.";
                                                                };
                                                                readonly polymorphism: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation contains polymorphic schemas.";
                                                                };
                                                                readonly references: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation, after being dereferenced, has `x-readme-ref-name` entries defining what the original `$ref` schema pointers were named.";
                                                                };
                                                                readonly server_variables: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has composable variables configured for its server definition.";
                                                                };
                                                                readonly style: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has parameters that have specific `style` serializations.";
                                                                };
                                                                readonly webhooks: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API definition has `webhooks` documented.";
                                                                };
                                                                readonly xml_requests: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has request bodies that accept XML.";
                                                                };
                                                                readonly xml_responses: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has response payloads that return XML.";
                                                                };
                                                                readonly xml_schemas: {
                                                                    readonly type: "boolean";
                                                                    readonly default: false;
                                                                    readonly description: "This API operation has parameters or schemas that can serialize to XML.";
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                            readonly description: "OpenAPI features that are utilized within this API operation.";
                                                        };
                                                        readonly source: {
                                                            readonly type: "string";
                                                            readonly enum: ["api", "apidesigner", "apieditor", "bidi", "form", "postman", "rdme", "rdme_github", "url"];
                                                            readonly nullable: true;
                                                            readonly description: "The source by which this API definition was ingested.";
                                                        };
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/apis\\/((([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+.(json|yaml|yml)))";
                                                            readonly nullable: true;
                                                            readonly description: "A URI to the API resource.";
                                                        };
                                                    };
                                                    readonly required: ["method", "path", "stats", "source", "uri"];
                                                    readonly additionalProperties: false;
                                                    readonly description: "Information about the API that this reference page is attached to.";
                                                };
                                                readonly connections: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly recipes: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly uri: {
                                                                        readonly type: "string";
                                                                        readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/recipes\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                                        readonly description: "URI of the recipe that this API reference is connected to. The recipe and API reference must exist within the same version.";
                                                                    };
                                                                };
                                                                readonly required: ["uri"];
                                                                readonly additionalProperties: false;
                                                            };
                                                            readonly nullable: true;
                                                            readonly description: "A collection of recipes that are displayed on this API reference.";
                                                        };
                                                    };
                                                    readonly required: ["recipes"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly href: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly dash: {
                                                            readonly type: "string";
                                                            readonly format: "uri";
                                                            readonly description: "A URL to this page in your ReadMe Dash.";
                                                        };
                                                        readonly hub: {
                                                            readonly type: "string";
                                                            readonly format: "uri";
                                                            readonly description: "A URL to this page on your ReadMe hub.";
                                                        };
                                                    };
                                                    readonly required: ["dash", "hub"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project resource.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly project: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly description: "The name of the project.";
                                                        };
                                                        readonly subdomain: {
                                                            readonly type: "string";
                                                            readonly pattern: "[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*";
                                                            readonly maxLength: 30;
                                                            readonly description: "The subdomain of the project.";
                                                        };
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project that this page belongs to.";
                                                        };
                                                    };
                                                    readonly required: ["name", "subdomain", "uri"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly renderable: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly status: {
                                                            readonly type: "boolean";
                                                            readonly default: true;
                                                            readonly description: "A flag for if the resource is renderable or not.";
                                                        };
                                                        readonly error: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "The rendering error.";
                                                        };
                                                        readonly message: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Additional details about the rendering error.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly updated_at: {
                                                    readonly type: "string";
                                                    readonly format: "date-time";
                                                    readonly description: "An ISO 8601 formatted date for when the page was updated.";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                    readonly description: "A URI to the page resource.";
                                                };
                                            };
                                            readonly required: ["appearance", "category", "content", "metadata", "parent", "privacy", "slug", "title", "api_config", "api", "connections", "href", "links", "project", "renderable", "updated_at", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches/{branch}/recipes': {
            readonly get: {
                readonly operationId: "getRecipes";
                readonly summary: "Get all recipes";
                readonly tags: ["Recipes"];
                readonly description: "Get all recipes from your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly total: {
                                            readonly type: "number";
                                        };
                                        readonly data: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly appearance: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly background_color: {
                                                                readonly type: "string";
                                                                readonly pattern: "^(?:#[0-9a-fA-F]{3}|#[0-9a-fA-F]{4}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8})$";
                                                                readonly default: "#000000";
                                                                readonly description: "The color of the recipe card.";
                                                            };
                                                            readonly emoji: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "The Unicode emoji to be displayed within the recipe card.";
                                                            };
                                                        };
                                                        readonly required: ["emoji"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly connections: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly references: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly uri: {
                                                                            readonly type: "string";
                                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                                            readonly description: "URI of the API reference page that this recipe will be connected to. The API reference and recipe must exist within the same version.";
                                                                        };
                                                                    };
                                                                    readonly required: ["uri"];
                                                                    readonly additionalProperties: false;
                                                                };
                                                                readonly nullable: true;
                                                                readonly description: "A collection of API reference pages that this recipe will be displayed on.";
                                                            };
                                                        };
                                                        readonly required: ["references"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly content: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly steps: {
                                                                readonly type: "array";
                                                                readonly items: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly title: {
                                                                            readonly type: "string";
                                                                            readonly description: "Title of the step.";
                                                                        };
                                                                        readonly body: {
                                                                            readonly type: "string";
                                                                            readonly nullable: true;
                                                                            readonly description: "Content of the step.";
                                                                        };
                                                                        readonly line_numbers: {
                                                                            readonly type: "array";
                                                                            readonly items: {
                                                                                readonly type: "string";
                                                                            };
                                                                            readonly description: "Line numbers to highlight in the code snippet. (e.g. `[\"1-5\", \"10\"]).";
                                                                        };
                                                                    };
                                                                    readonly required: ["title", "body", "line_numbers"];
                                                                    readonly additionalProperties: false;
                                                                };
                                                            };
                                                            readonly snippet: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly code_options: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "object";
                                                                            readonly properties: {
                                                                                readonly code: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                    readonly description: "Code to display for the specific language.";
                                                                                };
                                                                                readonly language: {
                                                                                    readonly type: "string";
                                                                                    readonly description: "Language of the code snippet.";
                                                                                };
                                                                                readonly name: {
                                                                                    readonly type: "string";
                                                                                    readonly nullable: true;
                                                                                    readonly description: "Name of the code snippet.";
                                                                                };
                                                                                readonly highlighted_syntax: {
                                                                                    readonly type: "string";
                                                                                    readonly description: "Actual syntax highlighter to use on the code snippet.";
                                                                                };
                                                                            };
                                                                            readonly required: ["code", "language"];
                                                                            readonly additionalProperties: false;
                                                                        };
                                                                        readonly description: "Array of code snippets to display in the recipe.";
                                                                    };
                                                                };
                                                                readonly required: ["code_options"];
                                                                readonly additionalProperties: false;
                                                            };
                                                            readonly response: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "Example response to display in the recipe.";
                                                            };
                                                        };
                                                        readonly required: ["steps", "snippet", "response"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly description: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly privacy: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly view: {
                                                                readonly type: "string";
                                                                readonly enum: ["public", "anyone_with_link"];
                                                                readonly description: "Who can view the recipe.";
                                                            };
                                                        };
                                                        readonly required: ["view"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly title: {
                                                        readonly type: "string";
                                                    };
                                                    readonly links: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly project: {
                                                                readonly type: "string";
                                                                readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                                readonly description: "A URI to the project resource.";
                                                            };
                                                        };
                                                        readonly required: ["project"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly slug: {
                                                        readonly type: "string";
                                                    };
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/recipes\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                    };
                                                };
                                                readonly required: ["appearance", "connections", "content", "description", "privacy", "title", "links", "slug", "uri"];
                                                readonly additionalProperties: false;
                                            };
                                        };
                                    };
                                    readonly required: ["total", "data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
            readonly post: {
                readonly operationId: "createRecipe";
                readonly summary: "Create a recipe";
                readonly tags: ["Recipes"];
                readonly description: "Create a new recipe in your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly appearance: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly background_color: {
                                                readonly type: "string";
                                                readonly pattern: "^(?:#[0-9a-fA-F]{3}|#[0-9a-fA-F]{4}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8})$";
                                                readonly default: "#000000";
                                                readonly description: "The color of the recipe card.";
                                            };
                                            readonly emoji: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly connections: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly references: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                            readonly description: "URI of the API reference page that this recipe will be connected to. The API reference and recipe must exist within the same version.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly content: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly steps: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly title: {
                                                            readonly type: "string";
                                                            readonly description: "Title of the step.";
                                                        };
                                                        readonly body: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly line_numbers: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                            readonly description: "Line numbers to highlight in the code snippet. (e.g. `[\"1-5\", \"10\"]).";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                            };
                                            readonly snippet: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly code_options: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly code: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly language: {
                                                                    readonly type: "string";
                                                                    readonly description: "Language of the code snippet.";
                                                                };
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly highlighted_syntax: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly description: "Array of code snippets to display in the recipe.";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly response: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly nullable: true;
                                    };
                                    readonly privacy: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly view: {
                                                readonly type: "string";
                                                readonly enum: ["public", "anyone_with_link"];
                                                readonly description: "Who can view the recipe.";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                    };
                                };
                                readonly required: ["content", "description", "title"];
                                readonly additionalProperties: false;
                            };
                        };
                    };
                    readonly required: true;
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '201': {
                        readonly description: "Created";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly appearance: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly background_color: {
                                                            readonly type: "string";
                                                            readonly pattern: "^(?:#[0-9a-fA-F]{3}|#[0-9a-fA-F]{4}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8})$";
                                                            readonly default: "#000000";
                                                            readonly description: "The color of the recipe card.";
                                                        };
                                                        readonly emoji: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "The Unicode emoji to be displayed within the recipe card.";
                                                        };
                                                    };
                                                    readonly required: ["emoji"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly connections: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly references: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly uri: {
                                                                        readonly type: "string";
                                                                        readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                                        readonly description: "URI of the API reference page that this recipe will be connected to. The API reference and recipe must exist within the same version.";
                                                                    };
                                                                };
                                                                readonly required: ["uri"];
                                                                readonly additionalProperties: false;
                                                            };
                                                            readonly nullable: true;
                                                            readonly description: "A collection of API reference pages that this recipe will be displayed on.";
                                                        };
                                                    };
                                                    readonly required: ["references"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly content: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly steps: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly title: {
                                                                        readonly type: "string";
                                                                        readonly description: "Title of the step.";
                                                                    };
                                                                    readonly body: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                        readonly description: "Content of the step.";
                                                                    };
                                                                    readonly line_numbers: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                        };
                                                                        readonly description: "Line numbers to highlight in the code snippet. (e.g. `[\"1-5\", \"10\"]).";
                                                                    };
                                                                };
                                                                readonly required: ["title", "body", "line_numbers"];
                                                                readonly additionalProperties: false;
                                                            };
                                                        };
                                                        readonly snippet: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly code_options: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly properties: {
                                                                            readonly code: {
                                                                                readonly type: "string";
                                                                                readonly nullable: true;
                                                                                readonly description: "Code to display for the specific language.";
                                                                            };
                                                                            readonly language: {
                                                                                readonly type: "string";
                                                                                readonly description: "Language of the code snippet.";
                                                                            };
                                                                            readonly name: {
                                                                                readonly type: "string";
                                                                                readonly nullable: true;
                                                                                readonly description: "Name of the code snippet.";
                                                                            };
                                                                            readonly highlighted_syntax: {
                                                                                readonly type: "string";
                                                                                readonly description: "Actual syntax highlighter to use on the code snippet.";
                                                                            };
                                                                        };
                                                                        readonly required: ["code", "language"];
                                                                        readonly additionalProperties: false;
                                                                    };
                                                                    readonly description: "Array of code snippets to display in the recipe.";
                                                                };
                                                            };
                                                            readonly required: ["code_options"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly response: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Example response to display in the recipe.";
                                                        };
                                                    };
                                                    readonly required: ["steps", "snippet", "response"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly description: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "anyone_with_link"];
                                                            readonly description: "Who can view the recipe.";
                                                        };
                                                    };
                                                    readonly required: ["view"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project resource.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly slug: {
                                                    readonly type: "string";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/recipes\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                };
                                            };
                                            readonly required: ["appearance", "connections", "content", "description", "privacy", "title", "links", "slug", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches/{branch}/recipes/{slug}': {
            readonly get: {
                readonly operationId: "getRecipe";
                readonly summary: "Get a recipe";
                readonly tags: ["Recipes"];
                readonly description: "Get a recipe from your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                    };
                    readonly in: "path";
                    readonly name: "slug";
                    readonly required: true;
                    readonly description: "A URL-safe representation of the resource.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly appearance: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly background_color: {
                                                            readonly type: "string";
                                                            readonly pattern: "^(?:#[0-9a-fA-F]{3}|#[0-9a-fA-F]{4}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8})$";
                                                            readonly default: "#000000";
                                                            readonly description: "The color of the recipe card.";
                                                        };
                                                        readonly emoji: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "The Unicode emoji to be displayed within the recipe card.";
                                                        };
                                                    };
                                                    readonly required: ["emoji"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly connections: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly references: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly uri: {
                                                                        readonly type: "string";
                                                                        readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                                        readonly description: "URI of the API reference page that this recipe will be connected to. The API reference and recipe must exist within the same version.";
                                                                    };
                                                                };
                                                                readonly required: ["uri"];
                                                                readonly additionalProperties: false;
                                                            };
                                                            readonly nullable: true;
                                                            readonly description: "A collection of API reference pages that this recipe will be displayed on.";
                                                        };
                                                    };
                                                    readonly required: ["references"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly content: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly steps: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly title: {
                                                                        readonly type: "string";
                                                                        readonly description: "Title of the step.";
                                                                    };
                                                                    readonly body: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                        readonly description: "Content of the step.";
                                                                    };
                                                                    readonly line_numbers: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                        };
                                                                        readonly description: "Line numbers to highlight in the code snippet. (e.g. `[\"1-5\", \"10\"]).";
                                                                    };
                                                                };
                                                                readonly required: ["title", "body", "line_numbers"];
                                                                readonly additionalProperties: false;
                                                            };
                                                        };
                                                        readonly snippet: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly code_options: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly properties: {
                                                                            readonly code: {
                                                                                readonly type: "string";
                                                                                readonly nullable: true;
                                                                                readonly description: "Code to display for the specific language.";
                                                                            };
                                                                            readonly language: {
                                                                                readonly type: "string";
                                                                                readonly description: "Language of the code snippet.";
                                                                            };
                                                                            readonly name: {
                                                                                readonly type: "string";
                                                                                readonly nullable: true;
                                                                                readonly description: "Name of the code snippet.";
                                                                            };
                                                                            readonly highlighted_syntax: {
                                                                                readonly type: "string";
                                                                                readonly description: "Actual syntax highlighter to use on the code snippet.";
                                                                            };
                                                                        };
                                                                        readonly required: ["code", "language"];
                                                                        readonly additionalProperties: false;
                                                                    };
                                                                    readonly description: "Array of code snippets to display in the recipe.";
                                                                };
                                                            };
                                                            readonly required: ["code_options"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly response: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Example response to display in the recipe.";
                                                        };
                                                    };
                                                    readonly required: ["steps", "snippet", "response"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly description: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "anyone_with_link"];
                                                            readonly description: "Who can view the recipe.";
                                                        };
                                                    };
                                                    readonly required: ["view"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project resource.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly slug: {
                                                    readonly type: "string";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/recipes\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                };
                                            };
                                            readonly required: ["appearance", "connections", "content", "description", "privacy", "title", "links", "slug", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
            readonly delete: {
                readonly operationId: "deleteRecipe";
                readonly summary: "Delete a recipe";
                readonly tags: ["Recipes"];
                readonly description: "Delete a recipe from your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                    };
                    readonly in: "path";
                    readonly name: "slug";
                    readonly required: true;
                    readonly description: "A URL-safe representation of the resource.";
                }];
                readonly responses: {
                    readonly '204': {
                        readonly description: "No Content";
                    };
                };
            };
            readonly patch: {
                readonly operationId: "updateRecipe";
                readonly summary: "Update an existing recipe";
                readonly tags: ["Recipes"];
                readonly description: "Update an existing recipe in your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly appearance: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly background_color: {
                                                readonly type: "string";
                                                readonly pattern: "^(?:#[0-9a-fA-F]{3}|#[0-9a-fA-F]{4}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8})$";
                                                readonly default: "#000000";
                                                readonly description: "The color of the recipe card.";
                                            };
                                            readonly emoji: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly connections: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly references: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                            readonly description: "URI of the API reference page that this recipe will be connected to. The API reference and recipe must exist within the same version.";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly content: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly steps: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly title: {
                                                            readonly type: "string";
                                                            readonly description: "Title of the step.";
                                                        };
                                                        readonly body: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                        };
                                                        readonly line_numbers: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "string";
                                                            };
                                                            readonly description: "Line numbers to highlight in the code snippet. (e.g. `[\"1-5\", \"10\"]).";
                                                        };
                                                    };
                                                    readonly additionalProperties: false;
                                                };
                                            };
                                            readonly snippet: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly code_options: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly code: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly language: {
                                                                    readonly type: "string";
                                                                    readonly description: "Language of the code snippet.";
                                                                };
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                };
                                                                readonly highlighted_syntax: {
                                                                    readonly type: "string";
                                                                };
                                                            };
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly description: "Array of code snippets to display in the recipe.";
                                                    };
                                                };
                                                readonly additionalProperties: false;
                                            };
                                            readonly response: {
                                                readonly type: "string";
                                                readonly nullable: true;
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly description: {
                                        readonly type: "string";
                                        readonly nullable: true;
                                    };
                                    readonly privacy: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly view: {
                                                readonly type: "string";
                                                readonly enum: ["public", "anyone_with_link"];
                                                readonly description: "Who can view the recipe.";
                                            };
                                        };
                                        readonly additionalProperties: false;
                                    };
                                    readonly title: {
                                        readonly type: "string";
                                    };
                                    readonly position: {
                                        readonly type: "number";
                                        readonly description: "The position where this recipe should be displayed on your recipe landing page.";
                                    };
                                };
                                readonly additionalProperties: false;
                            };
                        };
                    };
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+";
                    };
                    readonly in: "path";
                    readonly name: "slug";
                    readonly required: true;
                    readonly description: "A URL-safe representation of the resource.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly data: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly appearance: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly background_color: {
                                                            readonly type: "string";
                                                            readonly pattern: "^(?:#[0-9a-fA-F]{3}|#[0-9a-fA-F]{4}|#[0-9a-fA-F]{6}|#[0-9a-fA-F]{8})$";
                                                            readonly default: "#000000";
                                                            readonly description: "The color of the recipe card.";
                                                        };
                                                        readonly emoji: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "The Unicode emoji to be displayed within the recipe card.";
                                                        };
                                                    };
                                                    readonly required: ["emoji"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly connections: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly references: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly uri: {
                                                                        readonly type: "string";
                                                                        readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/(guides|reference)\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                                        readonly description: "URI of the API reference page that this recipe will be connected to. The API reference and recipe must exist within the same version.";
                                                                    };
                                                                };
                                                                readonly required: ["uri"];
                                                                readonly additionalProperties: false;
                                                            };
                                                            readonly nullable: true;
                                                            readonly description: "A collection of API reference pages that this recipe will be displayed on.";
                                                        };
                                                    };
                                                    readonly required: ["references"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly content: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly steps: {
                                                            readonly type: "array";
                                                            readonly items: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly title: {
                                                                        readonly type: "string";
                                                                        readonly description: "Title of the step.";
                                                                    };
                                                                    readonly body: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                        readonly description: "Content of the step.";
                                                                    };
                                                                    readonly line_numbers: {
                                                                        readonly type: "array";
                                                                        readonly items: {
                                                                            readonly type: "string";
                                                                        };
                                                                        readonly description: "Line numbers to highlight in the code snippet. (e.g. `[\"1-5\", \"10\"]).";
                                                                    };
                                                                };
                                                                readonly required: ["title", "body", "line_numbers"];
                                                                readonly additionalProperties: false;
                                                            };
                                                        };
                                                        readonly snippet: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly code_options: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly properties: {
                                                                            readonly code: {
                                                                                readonly type: "string";
                                                                                readonly nullable: true;
                                                                                readonly description: "Code to display for the specific language.";
                                                                            };
                                                                            readonly language: {
                                                                                readonly type: "string";
                                                                                readonly description: "Language of the code snippet.";
                                                                            };
                                                                            readonly name: {
                                                                                readonly type: "string";
                                                                                readonly nullable: true;
                                                                                readonly description: "Name of the code snippet.";
                                                                            };
                                                                            readonly highlighted_syntax: {
                                                                                readonly type: "string";
                                                                                readonly description: "Actual syntax highlighter to use on the code snippet.";
                                                                            };
                                                                        };
                                                                        readonly required: ["code", "language"];
                                                                        readonly additionalProperties: false;
                                                                    };
                                                                    readonly description: "Array of code snippets to display in the recipe.";
                                                                };
                                                            };
                                                            readonly required: ["code_options"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly response: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "Example response to display in the recipe.";
                                                        };
                                                    };
                                                    readonly required: ["steps", "snippet", "response"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly description: {
                                                    readonly type: "string";
                                                    readonly nullable: true;
                                                };
                                                readonly privacy: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly view: {
                                                            readonly type: "string";
                                                            readonly enum: ["public", "anyone_with_link"];
                                                            readonly description: "Who can view the recipe.";
                                                        };
                                                    };
                                                    readonly required: ["view"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly title: {
                                                    readonly type: "string";
                                                };
                                                readonly links: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly project: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/projects\\/(me|[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*)";
                                                            readonly description: "A URI to the project resource.";
                                                        };
                                                    };
                                                    readonly required: ["project"];
                                                    readonly additionalProperties: false;
                                                };
                                                readonly slug: {
                                                    readonly type: "string";
                                                };
                                                readonly uri: {
                                                    readonly type: "string";
                                                    readonly pattern: "\\/(versions|branches)\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)\\/recipes\\/(([a-z0-9-_ ]|[^\\\\x00-\\\\x7F])+)";
                                                };
                                            };
                                            readonly required: ["appearance", "connections", "content", "description", "privacy", "title", "links", "slug", "uri"];
                                            readonly additionalProperties: false;
                                        };
                                    };
                                    readonly required: ["data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/search': {
            readonly get: {
                readonly operationId: "search";
                readonly summary: "Perform a search query";
                readonly tags: ["Search"];
                readonly description: "Searches the ReadMe project.";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                    };
                    readonly in: "query";
                    readonly name: "query";
                    readonly required: true;
                    readonly description: "The plain text search query used to search across the project.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly enum: ["guides", "reference", "recipes", "custom_pages", "discuss", "changelog"];
                    };
                    readonly in: "query";
                    readonly name: "section";
                    readonly required: false;
                    readonly description: "The section to search within.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                    };
                    readonly in: "query";
                    readonly name: "version";
                    readonly required: false;
                    readonly description: "The version to search within. For enterprise, this only applies to the current project.";
                }, {
                    readonly schema: {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "string";
                        };
                    };
                    readonly in: "query";
                    readonly name: "projects";
                    readonly required: false;
                    readonly description: "Limit search to only these projects in an Enterprise group.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly total: {
                                            readonly type: "number";
                                        };
                                        readonly data: {
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly url: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly full: {
                                                                readonly type: "string";
                                                                readonly description: "The full URL of the page.";
                                                            };
                                                            readonly relative: {
                                                                readonly type: "string";
                                                                readonly description: "The relative URL of the page without the version or base URL.";
                                                            };
                                                        };
                                                        readonly required: ["full", "relative"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly title: {
                                                        readonly type: "string";
                                                    };
                                                    readonly excerpt: {
                                                        readonly type: "string";
                                                    };
                                                    readonly highlights: {
                                                        readonly type: "array";
                                                        readonly items: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly score: {
                                                                    readonly type: "number";
                                                                };
                                                                readonly path: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["title", "excerpt", "searchContents"];
                                                                };
                                                                readonly texts: {
                                                                    readonly type: "array";
                                                                    readonly items: {
                                                                        readonly type: "object";
                                                                        readonly properties: {
                                                                            readonly value: {
                                                                                readonly type: "string";
                                                                            };
                                                                            readonly type: {
                                                                                readonly type: "string";
                                                                                readonly enum: ["hit", "text"];
                                                                            };
                                                                        };
                                                                        readonly required: ["value", "type"];
                                                                        readonly additionalProperties: false;
                                                                    };
                                                                };
                                                            };
                                                            readonly required: ["score", "path", "texts"];
                                                            readonly additionalProperties: false;
                                                        };
                                                    };
                                                    readonly slug: {
                                                        readonly type: "string";
                                                    };
                                                    readonly section: {
                                                        readonly type: "string";
                                                        readonly enum: ["guides", "reference", "recipes", "custom_pages", "discuss", "changelog"];
                                                    };
                                                    readonly version: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                        readonly description: "The semver version number this search is scoped to.";
                                                    };
                                                    readonly project: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly subdomain: {
                                                                readonly type: "string";
                                                            };
                                                            readonly name: {
                                                                readonly type: "string";
                                                            };
                                                        };
                                                        readonly required: ["subdomain", "name"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly api: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly method: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                            };
                                                        };
                                                        readonly required: ["method"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly uri: {
                                                        readonly type: "string";
                                                    };
                                                };
                                                readonly required: ["url", "title", "excerpt", "highlights", "slug", "section", "version", "project", "api", "uri"];
                                                readonly additionalProperties: false;
                                            };
                                        };
                                    };
                                    readonly required: ["total", "data"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/validate/api': {
            readonly post: {
                readonly operationId: "validateAPI";
                readonly summary: "Validate an API";
                readonly tags: ["APIs"];
                readonly description: "Validates an API definition for uploading to your ReadMe project.";
                readonly requestBody: {
                    readonly content: {
                        readonly 'multipart/form-data': {
                            readonly schema: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly schema: {
                                        readonly description: "The API definition.";
                                    };
                                    readonly upload_source: {
                                        readonly default: "form";
                                        readonly description: "The source that the API definition is being uploaded through.";
                                    };
                                    readonly url: {
                                        readonly description: "The URL where the API definition is hosted.";
                                    };
                                };
                                readonly additionalProperties: false;
                                readonly description: "The API definition to upload. We provide full support for OpenAPI 3.x and Swagger 2.0 and experimental support for Postman collections.";
                            };
                        };
                    };
                    readonly description: "The API definition to upload. We provide full support for OpenAPI 3.x and Swagger 2.0 and experimental support for Postman collections.";
                };
                readonly security: [];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly schema: {
                                            readonly type: "object";
                                            readonly additionalProperties: {};
                                            readonly description: "The API schema.";
                                        };
                                    };
                                    readonly required: ["schema"];
                                    readonly additionalProperties: false;
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches': {
            readonly get: {
                readonly operationId: "getBranches";
                readonly summary: "Get branches";
                readonly tags: ["Branches"];
                readonly description: "Get a collection of branches in your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "number";
                        readonly minimum: 1;
                        readonly default: 1;
                    };
                    readonly in: "query";
                    readonly name: "page";
                    readonly required: false;
                    readonly description: "Used to specify further pages (starts at 1).";
                }, {
                    readonly schema: {
                        readonly type: "number";
                        readonly minimum: 1;
                        readonly maximum: 100;
                        readonly default: 10;
                    };
                    readonly in: "query";
                    readonly name: "per_page";
                    readonly required: false;
                    readonly description: "Number of items to include in pagination (up to 100, defaults to 10).";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly enum: ["created", "updated", "semver"];
                        readonly default: "semver";
                    };
                    readonly in: "query";
                    readonly name: "sort_by";
                    readonly required: false;
                    readonly description: "The sort that should be used for the returned collection.";
                }, {
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?";
                    };
                    readonly in: "query";
                    readonly name: "prefix";
                    readonly required: false;
                    readonly description: "An optional prefix in the format of `v2.0` used to list all branches with this prefix.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly anyOf: [{
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly total: {
                                                readonly type: "number";
                                            };
                                            readonly page: {
                                                readonly type: "number";
                                            };
                                            readonly per_page: {
                                                readonly type: "number";
                                            };
                                            readonly paging: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly next: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly previous: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly first: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly last: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly required: ["next", "previous", "first", "last"];
                                                readonly additionalProperties: false;
                                            };
                                            readonly data: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly base: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "The name of the version this version was based off of.";
                                                        };
                                                        readonly display_name: {
                                                            readonly type: "string";
                                                            readonly nullable: true;
                                                            readonly description: "A non-semver display name for the version.";
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly pattern: "stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?";
                                                            readonly description: "The semver name for the version.";
                                                        };
                                                        readonly privacy: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly view: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["default", "hidden", "public"];
                                                                    readonly description: "Whether the version is public, hidden, or the stable version that's visible by default.";
                                                                };
                                                            };
                                                            readonly required: ["view"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly release_stage: {
                                                            readonly type: "string";
                                                            readonly enum: ["beta", "release"];
                                                            readonly description: "Whether the version is released or in beta.";
                                                        };
                                                        readonly source: {
                                                            readonly type: "string";
                                                            readonly enum: ["readme", "bidi"];
                                                            readonly description: "Whether the version was created in ReadMe or via Bi-Directional Sync.";
                                                        };
                                                        readonly state: {
                                                            readonly type: "string";
                                                            readonly enum: ["current", "deprecated"];
                                                            readonly description: "Whether the version is current or deprecated.";
                                                        };
                                                        readonly updated_at: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                            readonly description: "An ISO 8601 formatted date for when the version was last updated.";
                                                        };
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/branches\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)";
                                                            readonly description: "A URI to the version resource.";
                                                        };
                                                    };
                                                    readonly required: ["base", "display_name", "name", "privacy", "release_stage", "source", "state", "updated_at", "uri"];
                                                    readonly additionalProperties: false;
                                                };
                                            };
                                            readonly type: {
                                                readonly type: "string";
                                                readonly enum: ["version"];
                                            };
                                        };
                                        readonly required: ["total", "page", "per_page", "paging", "data", "type"];
                                        readonly additionalProperties: false;
                                    }, {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly total: {
                                                readonly type: "number";
                                            };
                                            readonly page: {
                                                readonly type: "number";
                                            };
                                            readonly per_page: {
                                                readonly type: "number";
                                            };
                                            readonly paging: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly next: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly previous: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly first: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                    readonly last: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                    };
                                                };
                                                readonly required: ["next", "previous", "first", "last"];
                                                readonly additionalProperties: false;
                                            };
                                            readonly data: {
                                                readonly type: "array";
                                                readonly items: {
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly base: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly base: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                    readonly description: "The name of the version this version was based off of.";
                                                                };
                                                                readonly display_name: {
                                                                    readonly type: "string";
                                                                    readonly nullable: true;
                                                                    readonly description: "A non-semver display name for the version.";
                                                                };
                                                                readonly name: {
                                                                    readonly type: "string";
                                                                    readonly pattern: "stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?";
                                                                    readonly description: "The semver name for the version.";
                                                                };
                                                                readonly privacy: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly view: {
                                                                            readonly type: "string";
                                                                            readonly enum: ["default", "hidden", "public"];
                                                                            readonly description: "Whether the version is public, hidden, or the stable version that's visible by default.";
                                                                        };
                                                                    };
                                                                    readonly required: ["view"];
                                                                    readonly additionalProperties: false;
                                                                };
                                                                readonly release_stage: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["beta", "release"];
                                                                    readonly description: "Whether the version is released or in beta.";
                                                                };
                                                                readonly source: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["readme", "bidi"];
                                                                    readonly description: "Whether the version was created in ReadMe or via Bi-Directional Sync.";
                                                                };
                                                                readonly state: {
                                                                    readonly type: "string";
                                                                    readonly enum: ["current", "deprecated"];
                                                                    readonly description: "Whether the version is current or deprecated.";
                                                                };
                                                                readonly updated_at: {
                                                                    readonly type: "string";
                                                                    readonly format: "date-time";
                                                                    readonly description: "An ISO 8601 formatted date for when the version was last updated.";
                                                                };
                                                                readonly uri: {
                                                                    readonly type: "string";
                                                                    readonly pattern: "\\/branches\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)";
                                                                    readonly description: "A URI to the version resource.";
                                                                };
                                                            };
                                                            readonly required: ["base", "display_name", "name", "privacy", "release_stage", "source", "state", "updated_at", "uri"];
                                                            readonly additionalProperties: false;
                                                            readonly description: "The representation of the version the branch was created from or the stable version.";
                                                        };
                                                        readonly href: {
                                                            readonly type: "object";
                                                            readonly properties: {
                                                                readonly external: {
                                                                    readonly type: "object";
                                                                    readonly properties: {
                                                                        readonly diff: {
                                                                            readonly type: "string";
                                                                            readonly nullable: true;
                                                                            readonly description: "A link to the external branch diff on bi-directionally synced projects.";
                                                                        };
                                                                        readonly view: {
                                                                            readonly type: "string";
                                                                            readonly nullable: true;
                                                                            readonly description: "A link to view the external branch on bi-directionally synced projects.";
                                                                        };
                                                                    };
                                                                    readonly required: ["diff", "view"];
                                                                    readonly additionalProperties: false;
                                                                };
                                                            };
                                                            readonly required: ["external"];
                                                            readonly additionalProperties: false;
                                                        };
                                                        readonly name: {
                                                            readonly type: "string";
                                                            readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                                                            readonly description: "The name of the branch and its version prefix.";
                                                        };
                                                        readonly updated_at: {
                                                            readonly type: "string";
                                                            readonly format: "date-time";
                                                            readonly description: "An ISO 8601 formatted date for when the branch was last updated.";
                                                        };
                                                        readonly uri: {
                                                            readonly type: "string";
                                                            readonly pattern: "\\/branches\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)";
                                                            readonly description: "A URI to the branch resource.";
                                                        };
                                                    };
                                                    readonly required: ["base", "href", "name", "updated_at", "uri"];
                                                    readonly additionalProperties: false;
                                                };
                                            };
                                            readonly type: {
                                                readonly type: "string";
                                                readonly enum: ["branch"];
                                            };
                                        };
                                        readonly required: ["total", "page", "per_page", "paging", "data", "type"];
                                        readonly additionalProperties: false;
                                    }];
                                };
                            };
                        };
                    };
                };
            };
            readonly post: {
                readonly operationId: "createBranch";
                readonly summary: "Create a branch";
                readonly tags: ["Branches"];
                readonly description: "Create a new branch in your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly anyOf: [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly base: {
                                            readonly type: "string";
                                            readonly description: "The clean string of version we are basing off of.";
                                        };
                                        readonly display_name: {
                                            readonly type: "string";
                                            readonly description: "A non-semver display name for the version.";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly pattern: "stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?";
                                            readonly description: "The semver name for the version.";
                                        };
                                        readonly privacy: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly view: {
                                                    readonly type: "string";
                                                    readonly enum: ["default", "hidden", "public"];
                                                    readonly default: "hidden";
                                                    readonly description: "Whether the version is public, hidden, or the stable version that's visible by default.";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly release_stage: {
                                            readonly type: "string";
                                            readonly enum: ["beta", "release"];
                                            readonly default: "release";
                                            readonly description: "Whether the version is released or in beta.";
                                        };
                                        readonly state: {
                                            readonly type: "string";
                                            readonly enum: ["current", "deprecated"];
                                            readonly default: "current";
                                            readonly description: "Whether the version is current or deprecated.";
                                        };
                                    };
                                    readonly required: ["base", "name"];
                                    readonly additionalProperties: false;
                                }, {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                                            readonly description: "The name of the branch.";
                                        };
                                    };
                                    readonly required: ["name"];
                                    readonly additionalProperties: false;
                                }];
                            };
                        };
                    };
                };
                readonly responses: {
                    readonly '201': {
                        readonly description: "Created";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly anyOf: [{
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly data: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly base: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                        readonly description: "The name of the version this version was based off of.";
                                                    };
                                                    readonly display_name: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                        readonly description: "A non-semver display name for the version.";
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly pattern: "stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?";
                                                        readonly description: "The semver name for the version.";
                                                    };
                                                    readonly privacy: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly view: {
                                                                readonly type: "string";
                                                                readonly enum: ["default", "hidden", "public"];
                                                                readonly description: "Whether the version is public, hidden, or the stable version that's visible by default.";
                                                            };
                                                        };
                                                        readonly required: ["view"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly release_stage: {
                                                        readonly type: "string";
                                                        readonly enum: ["beta", "release"];
                                                        readonly description: "Whether the version is released or in beta.";
                                                    };
                                                    readonly source: {
                                                        readonly type: "string";
                                                        readonly enum: ["readme", "bidi"];
                                                        readonly description: "Whether the version was created in ReadMe or via Bi-Directional Sync.";
                                                    };
                                                    readonly state: {
                                                        readonly type: "string";
                                                        readonly enum: ["current", "deprecated"];
                                                        readonly description: "Whether the version is current or deprecated.";
                                                    };
                                                    readonly updated_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                        readonly description: "An ISO 8601 formatted date for when the version was last updated.";
                                                    };
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/branches\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)";
                                                        readonly description: "A URI to the version resource.";
                                                    };
                                                };
                                                readonly required: ["base", "display_name", "name", "privacy", "release_stage", "source", "state", "updated_at", "uri"];
                                                readonly additionalProperties: false;
                                            };
                                            readonly type: {
                                                readonly type: "string";
                                                readonly enum: ["version"];
                                            };
                                        };
                                        readonly required: ["data", "type"];
                                        readonly additionalProperties: false;
                                    }, {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly data: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly base: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly base: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "The name of the version this version was based off of.";
                                                            };
                                                            readonly display_name: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "A non-semver display name for the version.";
                                                            };
                                                            readonly name: {
                                                                readonly type: "string";
                                                                readonly pattern: "stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?";
                                                                readonly description: "The semver name for the version.";
                                                            };
                                                            readonly privacy: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly view: {
                                                                        readonly type: "string";
                                                                        readonly enum: ["default", "hidden", "public"];
                                                                        readonly description: "Whether the version is public, hidden, or the stable version that's visible by default.";
                                                                    };
                                                                };
                                                                readonly required: ["view"];
                                                                readonly additionalProperties: false;
                                                            };
                                                            readonly release_stage: {
                                                                readonly type: "string";
                                                                readonly enum: ["beta", "release"];
                                                                readonly description: "Whether the version is released or in beta.";
                                                            };
                                                            readonly source: {
                                                                readonly type: "string";
                                                                readonly enum: ["readme", "bidi"];
                                                                readonly description: "Whether the version was created in ReadMe or via Bi-Directional Sync.";
                                                            };
                                                            readonly state: {
                                                                readonly type: "string";
                                                                readonly enum: ["current", "deprecated"];
                                                                readonly description: "Whether the version is current or deprecated.";
                                                            };
                                                            readonly updated_at: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                                readonly description: "An ISO 8601 formatted date for when the version was last updated.";
                                                            };
                                                            readonly uri: {
                                                                readonly type: "string";
                                                                readonly pattern: "\\/branches\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)";
                                                                readonly description: "A URI to the version resource.";
                                                            };
                                                        };
                                                        readonly required: ["base", "display_name", "name", "privacy", "release_stage", "source", "state", "updated_at", "uri"];
                                                        readonly additionalProperties: false;
                                                        readonly description: "The representation of the version the branch was created from or the stable version.";
                                                    };
                                                    readonly href: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly external: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly diff: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                        readonly description: "A link to the external branch diff on bi-directionally synced projects.";
                                                                    };
                                                                    readonly view: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                        readonly description: "A link to view the external branch on bi-directionally synced projects.";
                                                                    };
                                                                };
                                                                readonly required: ["diff", "view"];
                                                                readonly additionalProperties: false;
                                                            };
                                                        };
                                                        readonly required: ["external"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                                                        readonly description: "The name of the branch and its version prefix.";
                                                    };
                                                    readonly updated_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                        readonly description: "An ISO 8601 formatted date for when the branch was last updated.";
                                                    };
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/branches\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)";
                                                        readonly description: "A URI to the branch resource.";
                                                    };
                                                };
                                                readonly required: ["base", "href", "name", "updated_at", "uri"];
                                                readonly additionalProperties: false;
                                            };
                                            readonly type: {
                                                readonly type: "string";
                                                readonly enum: ["branch"];
                                            };
                                        };
                                        readonly required: ["data", "type"];
                                        readonly additionalProperties: false;
                                    }];
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly '/branches/{branch}': {
            readonly get: {
                readonly operationId: "getBranch";
                readonly summary: "Get a branch";
                readonly tags: ["Branches"];
                readonly description: "Get a branch of your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly anyOf: [{
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly data: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly base: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                        readonly description: "The name of the version this version was based off of.";
                                                    };
                                                    readonly display_name: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                        readonly description: "A non-semver display name for the version.";
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly pattern: "stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?";
                                                        readonly description: "The semver name for the version.";
                                                    };
                                                    readonly privacy: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly view: {
                                                                readonly type: "string";
                                                                readonly enum: ["default", "hidden", "public"];
                                                                readonly description: "Whether the version is public, hidden, or the stable version that's visible by default.";
                                                            };
                                                        };
                                                        readonly required: ["view"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly release_stage: {
                                                        readonly type: "string";
                                                        readonly enum: ["beta", "release"];
                                                        readonly description: "Whether the version is released or in beta.";
                                                    };
                                                    readonly source: {
                                                        readonly type: "string";
                                                        readonly enum: ["readme", "bidi"];
                                                        readonly description: "Whether the version was created in ReadMe or via Bi-Directional Sync.";
                                                    };
                                                    readonly state: {
                                                        readonly type: "string";
                                                        readonly enum: ["current", "deprecated"];
                                                        readonly description: "Whether the version is current or deprecated.";
                                                    };
                                                    readonly updated_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                        readonly description: "An ISO 8601 formatted date for when the version was last updated.";
                                                    };
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/branches\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)";
                                                        readonly description: "A URI to the version resource.";
                                                    };
                                                };
                                                readonly required: ["base", "display_name", "name", "privacy", "release_stage", "source", "state", "updated_at", "uri"];
                                                readonly additionalProperties: false;
                                            };
                                            readonly type: {
                                                readonly type: "string";
                                                readonly enum: ["version"];
                                            };
                                        };
                                        readonly required: ["data", "type"];
                                        readonly additionalProperties: false;
                                    }, {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly data: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly base: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly base: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "The name of the version this version was based off of.";
                                                            };
                                                            readonly display_name: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "A non-semver display name for the version.";
                                                            };
                                                            readonly name: {
                                                                readonly type: "string";
                                                                readonly pattern: "stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?";
                                                                readonly description: "The semver name for the version.";
                                                            };
                                                            readonly privacy: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly view: {
                                                                        readonly type: "string";
                                                                        readonly enum: ["default", "hidden", "public"];
                                                                        readonly description: "Whether the version is public, hidden, or the stable version that's visible by default.";
                                                                    };
                                                                };
                                                                readonly required: ["view"];
                                                                readonly additionalProperties: false;
                                                            };
                                                            readonly release_stage: {
                                                                readonly type: "string";
                                                                readonly enum: ["beta", "release"];
                                                                readonly description: "Whether the version is released or in beta.";
                                                            };
                                                            readonly source: {
                                                                readonly type: "string";
                                                                readonly enum: ["readme", "bidi"];
                                                                readonly description: "Whether the version was created in ReadMe or via Bi-Directional Sync.";
                                                            };
                                                            readonly state: {
                                                                readonly type: "string";
                                                                readonly enum: ["current", "deprecated"];
                                                                readonly description: "Whether the version is current or deprecated.";
                                                            };
                                                            readonly updated_at: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                                readonly description: "An ISO 8601 formatted date for when the version was last updated.";
                                                            };
                                                            readonly uri: {
                                                                readonly type: "string";
                                                                readonly pattern: "\\/branches\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)";
                                                                readonly description: "A URI to the version resource.";
                                                            };
                                                        };
                                                        readonly required: ["base", "display_name", "name", "privacy", "release_stage", "source", "state", "updated_at", "uri"];
                                                        readonly additionalProperties: false;
                                                        readonly description: "The representation of the version the branch was created from or the stable version.";
                                                    };
                                                    readonly href: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly external: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly diff: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                        readonly description: "A link to the external branch diff on bi-directionally synced projects.";
                                                                    };
                                                                    readonly view: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                        readonly description: "A link to view the external branch on bi-directionally synced projects.";
                                                                    };
                                                                };
                                                                readonly required: ["diff", "view"];
                                                                readonly additionalProperties: false;
                                                            };
                                                        };
                                                        readonly required: ["external"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                                                        readonly description: "The name of the branch and its version prefix.";
                                                    };
                                                    readonly updated_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                        readonly description: "An ISO 8601 formatted date for when the branch was last updated.";
                                                    };
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/branches\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)";
                                                        readonly description: "A URI to the branch resource.";
                                                    };
                                                };
                                                readonly required: ["base", "href", "name", "updated_at", "uri"];
                                                readonly additionalProperties: false;
                                            };
                                            readonly type: {
                                                readonly type: "string";
                                                readonly enum: ["branch"];
                                            };
                                        };
                                        readonly required: ["data", "type"];
                                        readonly additionalProperties: false;
                                    }];
                                };
                            };
                        };
                    };
                };
            };
            readonly patch: {
                readonly operationId: "updateBranch";
                readonly summary: "Updates an existing branch";
                readonly tags: ["Branches"];
                readonly description: "Update an existing branch in your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly requestBody: {
                    readonly content: {
                        readonly 'application/json': {
                            readonly schema: {
                                readonly anyOf: [{
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly display_name: {
                                            readonly type: "string";
                                            readonly description: "A non-semver display name for the version.";
                                        };
                                        readonly name: {
                                            readonly type: "string";
                                            readonly pattern: "stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?";
                                            readonly description: "The semver name for the version.";
                                        };
                                        readonly privacy: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly view: {
                                                    readonly type: "string";
                                                    readonly enum: ["default", "hidden", "public"];
                                                    readonly default: "hidden";
                                                    readonly description: "Whether the version is public, hidden, or the stable version that's visible by default.";
                                                };
                                            };
                                            readonly additionalProperties: false;
                                        };
                                        readonly release_stage: {
                                            readonly type: "string";
                                            readonly enum: ["beta", "release"];
                                            readonly default: "release";
                                        };
                                        readonly state: {
                                            readonly type: "string";
                                            readonly enum: ["current", "deprecated"];
                                            readonly default: "current";
                                        };
                                    };
                                    readonly additionalProperties: false;
                                }, {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly type: "string";
                                            readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                                            readonly description: "The target rename of the branch and its version prefix.";
                                        };
                                    };
                                    readonly required: ["name"];
                                    readonly additionalProperties: false;
                                }];
                                readonly description: "Dependent upon the type of resource you are updating this is the representation for a branch or version.";
                            };
                        };
                    };
                    readonly description: "Dependent upon the type of resource you are updating this is the representation for a branch or version.";
                };
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '200': {
                        readonly description: "OK";
                        readonly content: {
                            readonly 'application/json': {
                                readonly schema: {
                                    readonly anyOf: [{
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly data: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly base: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                        readonly description: "The name of the version this version was based off of.";
                                                    };
                                                    readonly display_name: {
                                                        readonly type: "string";
                                                        readonly nullable: true;
                                                        readonly description: "A non-semver display name for the version.";
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly pattern: "stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?";
                                                        readonly description: "The semver name for the version.";
                                                    };
                                                    readonly privacy: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly view: {
                                                                readonly type: "string";
                                                                readonly enum: ["default", "hidden", "public"];
                                                                readonly description: "Whether the version is public, hidden, or the stable version that's visible by default.";
                                                            };
                                                        };
                                                        readonly required: ["view"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly release_stage: {
                                                        readonly type: "string";
                                                        readonly enum: ["beta", "release"];
                                                        readonly description: "Whether the version is released or in beta.";
                                                    };
                                                    readonly source: {
                                                        readonly type: "string";
                                                        readonly enum: ["readme", "bidi"];
                                                        readonly description: "Whether the version was created in ReadMe or via Bi-Directional Sync.";
                                                    };
                                                    readonly state: {
                                                        readonly type: "string";
                                                        readonly enum: ["current", "deprecated"];
                                                        readonly description: "Whether the version is current or deprecated.";
                                                    };
                                                    readonly updated_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                        readonly description: "An ISO 8601 formatted date for when the version was last updated.";
                                                    };
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/branches\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)";
                                                        readonly description: "A URI to the version resource.";
                                                    };
                                                };
                                                readonly required: ["base", "display_name", "name", "privacy", "release_stage", "source", "state", "updated_at", "uri"];
                                                readonly additionalProperties: false;
                                            };
                                            readonly type: {
                                                readonly type: "string";
                                                readonly enum: ["version"];
                                            };
                                        };
                                        readonly required: ["data", "type"];
                                        readonly additionalProperties: false;
                                    }, {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly data: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly base: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly base: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "The name of the version this version was based off of.";
                                                            };
                                                            readonly display_name: {
                                                                readonly type: "string";
                                                                readonly nullable: true;
                                                                readonly description: "A non-semver display name for the version.";
                                                            };
                                                            readonly name: {
                                                                readonly type: "string";
                                                                readonly pattern: "stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?";
                                                                readonly description: "The semver name for the version.";
                                                            };
                                                            readonly privacy: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly view: {
                                                                        readonly type: "string";
                                                                        readonly enum: ["default", "hidden", "public"];
                                                                        readonly description: "Whether the version is public, hidden, or the stable version that's visible by default.";
                                                                    };
                                                                };
                                                                readonly required: ["view"];
                                                                readonly additionalProperties: false;
                                                            };
                                                            readonly release_stage: {
                                                                readonly type: "string";
                                                                readonly enum: ["beta", "release"];
                                                                readonly description: "Whether the version is released or in beta.";
                                                            };
                                                            readonly source: {
                                                                readonly type: "string";
                                                                readonly enum: ["readme", "bidi"];
                                                                readonly description: "Whether the version was created in ReadMe or via Bi-Directional Sync.";
                                                            };
                                                            readonly state: {
                                                                readonly type: "string";
                                                                readonly enum: ["current", "deprecated"];
                                                                readonly description: "Whether the version is current or deprecated.";
                                                            };
                                                            readonly updated_at: {
                                                                readonly type: "string";
                                                                readonly format: "date-time";
                                                                readonly description: "An ISO 8601 formatted date for when the version was last updated.";
                                                            };
                                                            readonly uri: {
                                                                readonly type: "string";
                                                                readonly pattern: "\\/branches\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)";
                                                                readonly description: "A URI to the version resource.";
                                                            };
                                                        };
                                                        readonly required: ["base", "display_name", "name", "privacy", "release_stage", "source", "state", "updated_at", "uri"];
                                                        readonly additionalProperties: false;
                                                        readonly description: "The representation of the version the branch was created from or the stable version.";
                                                    };
                                                    readonly href: {
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly external: {
                                                                readonly type: "object";
                                                                readonly properties: {
                                                                    readonly diff: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                        readonly description: "A link to the external branch diff on bi-directionally synced projects.";
                                                                    };
                                                                    readonly view: {
                                                                        readonly type: "string";
                                                                        readonly nullable: true;
                                                                        readonly description: "A link to view the external branch on bi-directionally synced projects.";
                                                                    };
                                                                };
                                                                readonly required: ["diff", "view"];
                                                                readonly additionalProperties: false;
                                                            };
                                                        };
                                                        readonly required: ["external"];
                                                        readonly additionalProperties: false;
                                                    };
                                                    readonly name: {
                                                        readonly type: "string";
                                                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                                                        readonly description: "The name of the branch and its version prefix.";
                                                    };
                                                    readonly updated_at: {
                                                        readonly type: "string";
                                                        readonly format: "date-time";
                                                        readonly description: "An ISO 8601 formatted date for when the branch was last updated.";
                                                    };
                                                    readonly uri: {
                                                        readonly type: "string";
                                                        readonly pattern: "\\/branches\\/((v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?)";
                                                        readonly description: "A URI to the branch resource.";
                                                    };
                                                };
                                                readonly required: ["base", "href", "name", "updated_at", "uri"];
                                                readonly additionalProperties: false;
                                            };
                                            readonly type: {
                                                readonly type: "string";
                                                readonly enum: ["branch"];
                                            };
                                        };
                                        readonly required: ["data", "type"];
                                        readonly additionalProperties: false;
                                    }];
                                };
                            };
                        };
                    };
                };
            };
            readonly delete: {
                readonly operationId: "deleteBranch";
                readonly summary: "Delete a branch";
                readonly tags: ["Branches"];
                readonly description: "Delete a branch from your ReadMe project.\n\n>📘\n> This route is only available to projects that are using [ReadMe Refactored](https://docs.readme.com/main/docs/welcome-to-readme-refactored).";
                readonly parameters: [{
                    readonly schema: {
                        readonly type: "string";
                        readonly pattern: "(v{0,1})(stable|([0-9]+)(?:\\.([0-9]+))?(?:\\.([0-9]+))?(-.*)?)(_(.*))?";
                    };
                    readonly in: "path";
                    readonly name: "branch";
                    readonly required: true;
                    readonly description: "Project version number, `stable` for your project's stable version, or a valid branch name.";
                }];
                readonly responses: {
                    readonly '204': {
                        readonly description: "No Content";
                    };
                };
            };
        };
    };
    readonly servers: [{
        readonly url: "https://api.readme.com/v2";
        readonly description: "The ReadMe API";
    }];
    readonly security: [{
        readonly bearer: [];
    }];
    readonly 'x-readme': {
        readonly 'proxy-enabled': true;
    };
    readonly tags: [{
        readonly name: "API Keys";
    }, {
        readonly name: "API Reference";
    }, {
        readonly name: "APIs";
    }, {
        readonly name: "Apply to ReadMe";
    }, {
        readonly name: "Branches";
    }, {
        readonly name: "Categories";
    }, {
        readonly name: "Changelog";
    }, {
        readonly name: "Custom Pages";
    }, {
        readonly name: "Guides";
    }, {
        readonly name: "Images";
    }, {
        readonly name: "IP Addresses";
    }, {
        readonly name: "Owlbot AI";
    }, {
        readonly name: "Projects";
    }, {
        readonly name: "Recipes";
    }, {
        readonly name: "Search";
    }];
};
export default document;
