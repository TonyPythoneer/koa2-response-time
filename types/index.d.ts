/// <reference types="koa" />
import * as Koa from "koa";
/**
 * Add X-Response-Time header field.
 *
 * @return {Function} It's a middleware for koa2
 */
export declare function responseTime(): Koa.Middleware;
export default responseTime;
