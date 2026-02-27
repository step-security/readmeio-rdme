/**
 * APIv1ErrorResponse is the shape of the error response we get from ReadMe API v1.
 */
interface APIv1ErrorResponse {
    docs?: string;
    error: string;
    help?: string;
    message: string;
    poem?: string[];
    suggestion?: string;
}
/**
 * APIv2ErrorResponse is the shape of the error response we get from ReadMe API v2.
 */
export type APIv2ErrorResponse = Partial<{
    detail: string;
    errors?: {
        key: string;
        message: string;
    }[];
    poem: string[];
    status: number;
    title: string;
    type: string;
}>;
/**
 * Error class for handling ReadMe API v1 errors.
 *
 * @deprecated Use {@link APIv2Error} instead.
 */
export declare class APIv1Error extends Error {
    code: string;
    constructor(res: APIv1ErrorResponse | string | {
        error: APIv1ErrorResponse;
    });
}
/**
 * Error class for handling ReadMe API v2 errors.
 */
export declare class APIv2Error extends Error {
    response: APIv2ErrorResponse;
    constructor(res: APIv2ErrorResponse);
}
export {};
