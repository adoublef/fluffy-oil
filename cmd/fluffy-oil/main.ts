import { Hono, etag, cors } from "~/deps.ts";
import { serve } from "~/lib/serve.ts";
import { serveStatic } from "~/lib/serve_static.ts";
import { handleIndex } from "./handle_index.tsx";
import { handleBlog } from "./handle_blog.tsx";

if (
    import.meta.main
) {
    const app = new Hono()
        .use("*", etag({ weak: true }))
        .use("*", cors());

    app.get("/", handleIndex());
    app.get("/blog", handleBlog());

    app.use("/stylesheets/*", serveStatic({ root: "stylesheets/", replace: /^\/stylesheets/ }));
    app.use("/scripts/*", serveStatic({ root: "scripts/", replace: /^\/scripts/ }));
    app.use("/fonts/*", serveStatic({ root: "fonts/", replace: /^\/fonts/ }));

    await serve(app, { port: 4507 });
}