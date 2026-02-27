import type { Hook } from '@oclif/core';
import type { APIv2PageCommands, CommandClass } from '../index.js';
import type { SpecFileType } from './prepareOas.js';
/**
 * This contains a few pieces of information about a file so
 * we can properly construct a source URL for it.
 */
interface FilePathDetails {
    /** The URL or local file path */
    filePath: string;
    /** This is derived from the `oas-normalize` `type` property. */
    fileType: SpecFileType;
}
export interface Mappings {
    categories: Record<string, string>;
    parentPages: Record<string, string>;
}
/**
 * A generic response body type for responses from the ReadMe API.
 */
export interface ResponseBody extends Record<string, any> {
}
export declare const emptyMappings: Mappings;
/**
 * Getter function for a string to be used in the user-agent header based on the current
 * environment. Used for API v1 requests.
 *
 */
export declare function getUserAgent(): string;
/**
 * Wrapper for the `fetch` API so we can add rdme-specific headers to all ReadMe API v1 requests.
 *
 * @deprecated This is for APIv1 only. Use {@link readmeAPIv2Fetch} instead, if possible.
 */
export declare function readmeAPIv1Fetch(
/** The pathname to make the request to. Must have a leading slash. */
pathname: string, options?: RequestInit, 
/** optional object containing information about the file being sent.
 * We use this to construct a full source URL for the file. */
fileOpts?: FilePathDetails): Promise<Response>;
/**
 * Wrapper for the `fetch` API so we can add rdme-specific headers to all ReadMe API v2 requests.
 */
export declare function readmeAPIv2Fetch<T extends Hook.Context = Hook.Context>(
/**
 * `this` does not have to be a hook, it can also be a Command class.
 * This type ensures that `this` has the `config` and `debug` properties.
 */
this: T, 
/** The pathname to make the request to. Must have a leading slash. */
pathname: string, options?: RequestInit, 
/** optional object containing information about the file being sent.
 * We use this to construct a full source URL for the file. */
fileOpts?: FilePathDetails): Promise<Response>;
/**
 * Small handler for handling responses from ReadMe API v1.
 *
 * If we receive JSON errors, we throw an APIv1Error exception.
 *
 * If we receive non-JSON responses, we consider them errors and throw them.
 *
 * @deprecated This is for APIv1 only. Use {@link handleAPIv2Res} instead, if possible.
 */
export declare function handleAPIv1Res(res: Response, 
/**
 * If omitted (or set to true), the function will return an `APIv1Error`
 * if the JSON body contains an `error` property. If set to false,
 * the function will return a resolved promise containing the JSON object.
 */
rejectOnJsonError?: boolean): Promise<any>;
/**
 * Small handler for handling responses from ReadMe API v2.
 *
 * If we receive JSON errors, we throw an APIError exception.
 *
 * If we receive non-JSON responses, we consider them errors and throw them.
 */
export declare function handleAPIv2Res<R extends ResponseBody = ResponseBody, T extends Hook.Context = Hook.Context>(
/**
 * `this` does not have to be a hook, it can also be a Command class.
 * This type ensures that `this` has the `config` and `debug` properties.
 */
this: T, res: Response): Promise<R>;
/**
 * Returns the basic auth header and any other defined headers for use in `fetch` calls against ReadMe API v1.
 *
 * @deprecated This is for APIv1 only.
 */
export declare function cleanAPIv1Headers(key: string, 
/** used for `x-readme-header` */
version?: string, headers?: Headers): Headers;
/**
 * Fetches the category and parent page mappings from the ReadMe API.
 * Used for migrating frontmatter in Guides pages to the new API v2 format.
 */
export declare function fetchMappings(this: CommandClass['prototype']): Promise<Mappings>;
/**
 * Fetches the schema for the current route from the OpenAPI description for ReadMe API v2.
 */
export declare function fetchSchema(this: APIv2PageCommands): {
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
} | {
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
} | {
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
} | {
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
export {};
