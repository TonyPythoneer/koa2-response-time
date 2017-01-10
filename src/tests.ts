import test from "ava";
import * as http from "http";
import * as Koa from "koa";
import * as supertest from "supertest-as-promised";

import responseTime from "./index";


/////////////////////
// globals         //
/////////////////////
const app = new Koa();
app
    .use(responseTime())
    .use(async function (ctx) {
        ctx.body = "Hello World";
    });
const server = http.createServer(app.callback()).listen(3000);
const request = supertest(server);


///////////////////
// tests         //
///////////////////
test("Test the middlware", async function (t) {
    let res = await request.get("/");
    let text: string = res.text;
    let header = res.header;
    t.true(res.text === "Hello World");
    t.true("x-response-time" in header);
    t.true(header["x-response-time"].indexOf("ms") > 0);
});
