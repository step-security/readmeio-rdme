type Section = 'Changelog' | 'Custom Pages' | 'Guides' | 'Reference';
export declare function summary(section: Section): string;
export declare function description(section: Section): string;
export declare function args(section: Section): {
    path: import("@oclif/core/interfaces").Arg<string, Record<string, unknown>>;
};
export declare function examples(section: Section): {
    description: string;
    command: string;
}[];
export declare function baseFlags(section: Section): {
    'confirm-autofixes': import("@oclif/core/interfaces").BooleanFlag<boolean>;
    'dry-run': import("@oclif/core/interfaces").BooleanFlag<boolean>;
    'max-errors': import("@oclif/core/interfaces").OptionFlag<number, import("@oclif/core/interfaces").CustomOptions>;
    'skip-validation': import("@oclif/core/interfaces").BooleanFlag<boolean>;
};
export {};
