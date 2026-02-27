import readmeAPIv2Oas from './openapiDoc.js';
export const categoryUriRegexPattern = readmeAPIv2Oas.paths['/branches/{branch}/guides'].post.requestBody.content['application/json'].schema.properties
    .category.properties.uri.pattern;
export const parentUriRegexPattern = readmeAPIv2Oas.paths['/branches/{branch}/guides'].post.requestBody.content['application/json'].schema.properties
    .parent.properties.uri.pattern;
