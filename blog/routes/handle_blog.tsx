import { Handler, markdown } from "~/deps.ts";
import { Head, Html, Font, Stylesheet } from "~/jsx/dom/mod.ts";
import { getBlog } from "../fs/get_blog.ts";

function Time(props: { date: Date; }) {
    return (<time pubdate="pubdate">{props.date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })}</time>);
}

// http://html5doctor.com/the-article-element/
export function handleBlog(): Handler {
    const formatDate = (date: Date) => date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    return async (c) => {
        const blog = await getBlog("first-blog-post");
        return c.html(
            <Html>
                <header>
                    <h1>{blog.title}</h1>
                    <Time date={blog.publishedAt} />
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
