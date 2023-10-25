import { Handler, markdown } from "~/deps.ts";
import { Head, Html, Font, Stylesheet } from "~/jsx/dom/mod.ts";
import { getBlog } from "../../blog/fs/get_blog.ts";

// http://html5doctor.com/the-article-element/
export function handleBlog(): Handler {
    return async (c) => {
        const blog = await getBlog("first-blog-post");

        const head = (
            <Head>
                <title>{blog.title}</title>
                <Font href="/fonts/7/ibm_plex_mono.woff2" />
                <Font href="/fonts/4/ibm_plex_mono.woff2" />
                <Stylesheet href="/stylesheets/blog.css" />
            </Head>
        );

        return c.html(
            <Html head={head}>
                <header>
                    <h1>{blog.title}</h1>
                    <time pubdate="pubdate">{blog.publishedAt.toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}</time>
                </header>
                <main>
                    <article
                        dangerouslySetInnerHTML={{ __html: markdown(blog.content) }}
                    />
                </main>
                <footer>
                    <small hx-boost={false}>
                        Powered by{" "}
                        <a href="https://deno.com">Deno</a>. Source code on{" "}
                        <a href="https://github.com/adoublef/fluffy-oil">
                            GitHub
                        </a>
                    </small>
                </footer>
            </Html>,
        );
    };
}
