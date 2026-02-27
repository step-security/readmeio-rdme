import BaseCommand from '../../lib/baseCommand.js';
export default class OpenAPIResolveCommand extends BaseCommand<typeof OpenAPIResolveCommand> {
    id: "openapi resolve";
    static summary: string;
    static description: string;
    static args: {
        spec: import("@oclif/core/interfaces").Arg<string | undefined, Record<string, unknown>>;
    };
    static examples: {
        description: string;
        command: string;
    }[];
    static flags: {
        out: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        title: import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
        'working-directory': import("@oclif/core/interfaces").OptionFlag<string | undefined, import("@oclif/core/interfaces").CustomOptions>;
    };
    /**
     * Identifies circular references in the OpenAPI document.
     *
     */
    private getCircularRefs;
    /**
     * Replaces a reference in a schema with an object if it's circular or recursive.
     *
     */
    private replaceRefWithObjectProxySchemes;
    /**
     * Recursively replaces references in schemas, transforming circular references to objects.
     */
    private replaceRefsInSchema;
    /**
     * Replaces circular references within a collection of schemas.
     *
     */
    private replaceCircularRefs;
    /**
     * Replaces all remaining circular references in the schema with `{ type: "object" }`.
     *
     */
    private replaceAllRefsWithObject;
    /**
     * Resolves circular references in the provided OpenAPI document.
     */
    private resolveCircularRefs;
    run(): Promise<{
        success: boolean;
        outputPath: any;
    }>;
}
