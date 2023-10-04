import { serveDir } from "~/deps.ts";

if (
    import.meta.main
) {
    const handler = (req: Request): Promise<Response> => {
        return serveDir(req, {
            fsRoot: "./static",
            showDirListing: false,
            showDotfiles: false,
            enableCors: true,
            //   quiet: !serverArgs.verbose,
            //   headers,
        });
    };

    await Deno.serve({ port: 4507 }, handler).finished;
}