import * as Koa from "koa";


/**
 * Add X-Response-Time header field.
 *
 * @return {Function} It's a middleware for koa2
 */
export function responseTime(): Koa.Middleware {
    return async function(ctx, next) {
        const start = Date.now();
        await next();
        const delta = Math.ceil(Date.now() - start);
        ctx.set("X-Response-Time", `${delta} ms`);
    };
};
export default responseTime;
