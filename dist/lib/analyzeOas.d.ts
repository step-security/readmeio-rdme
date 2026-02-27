import type { OASAnalysis, OASAnalysisFeature } from 'oas/analyzer/types';
import type { OASDocument } from 'oas/types';
export interface AnalyzedFeature extends OASAnalysisFeature {
    description: string;
    /**
     * The analyzed feature is not worth reporting within the inspector.
     */
    hidden?: boolean;
    url?: string | {
        /**
         * OpenAPI 3.1 introduced some new features so there won't be any docs on 3.0.
         */
        '3.0'?: string;
        '3.1': string;
    };
}
export interface Analysis extends OASAnalysis {
    openapi: {
        additionalProperties: AnalyzedFeature;
        callbacks: AnalyzedFeature;
        circularRefs: AnalyzedFeature;
        commonParameters: AnalyzedFeature;
        discriminators: AnalyzedFeature;
        links: AnalyzedFeature;
        polymorphism: AnalyzedFeature;
        serverVariables: AnalyzedFeature;
        style: AnalyzedFeature;
        webhooks: AnalyzedFeature;
        /**
         * @deprecated The data contained within this has been split apart into `xmlRequests`, `xmlResponses`, and `xmlSchemas`. This property will be removed in a future release.
         */
        xml: AnalyzedFeature;
        xmlRequests: AnalyzedFeature;
        xmlResponses: AnalyzedFeature;
        xmlSchemas: AnalyzedFeature;
    };
    readme: {
        /**
         * RAW_BODY is specific to our Manual API editor and we don't recommend anyone writing their
         * own API definition should use it so this is considered deprecated.
         */
        raw_body?: AnalyzedFeature;
        'x-default': AnalyzedFeature;
        'x-readme-ref-name': AnalyzedFeature;
        'x-readme.code-samples': AnalyzedFeature;
        'x-readme.explorer-enabled': AnalyzedFeature;
        'x-readme.headers': AnalyzedFeature;
        'x-readme.proxy-enabled': AnalyzedFeature;
        /**
         * @deprecated `samples-enabled` is deprecated.
         */
        'x-readme.samples-enabled'?: AnalyzedFeature;
        'x-readme.samples-languages'?: AnalyzedFeature;
    };
}
/**
 * Analyze a given OpenAPI or Swagger definition for any OpenAPI, JSON Schema, and ReadMe-specific
 * feature uses it may contain.
 *
 */
declare function analyzeOas(definition: OASDocument): Promise<Analysis>;
export declare function getSupportedFeatures(): string[];
export default analyzeOas;
