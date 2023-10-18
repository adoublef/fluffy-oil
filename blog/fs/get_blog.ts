import { extract, join } from "~/deps.ts";

type Attrs = {
    slug: string;
    title: string;
    published_at: string;
    content: string;
    snippet: string;
};

export async function getBlog(slug: string)/* : Promise<Attr> */ {
    const text = await Deno.readTextFile(join("./blog/content", `${slug}.md`));
    // Record<string, unknown> -> FrontMatter
    const { attrs, body, frontMatter: _ } = extract<Attrs>(text);

    return {
        slug,
        title: attrs.title,
        publishedAt: new Date(attrs.published_at),
        content: body,
        snippet: attrs.snippet,
    } satisfies Blog;
}

type Blog = {
    slug: string;
    title: string;
    publishedAt: Date;
    content: string;
    snippet: string;
}

/* 
// https://deno.com/blog/build-a-blog-with-fresh
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=optional" rel="stylesheet"></link>
*/