import { Hono } from "$hono/mod.ts";

if (
    import.meta.main
) {
    const app = new Hono();

    app.get("/", ({ html }) => html(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="http://localhost:4507/style.css">
</head>
<body>
    <h1>Heading</h1>
    <p>Paragraph</p>
</body>
</html>
    `));

    // app.use("*", serveStatic({ root: "/static" }));

    await Deno.serve({ port: 5618 }, app.fetch).finished;
}