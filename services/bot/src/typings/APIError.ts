/* istanbul ignore file */

import { HTTPMethods } from './MethodEnum';

export default class APIError extends Error {
    public constructor(public path: string, public method: HTTPMethods, public errCode: number, msg: string) {
        super(`[APIError:${method}:${errCode}] on path ${path}. ${msg}`);
        Error.captureStackTrace(this);
    }
}
