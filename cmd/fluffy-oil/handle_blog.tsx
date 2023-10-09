import { Handler } from "~/deps.ts";
import { Html } from "~/jsx/dom/html.tsx";

// http://html5doctor.com/the-article-element/
export function handleBlog(): Handler {
    return c => {
        return c.html(
            <Html head={{ title: "Welcome" }}>
                <header>
                    <nav>
                        <ul>
                            <li><a href="/" aria-current="page">Home</a></li>
                            <li>
                                <button type="button" aria-expanded="true" aria-controls="options"
                                    _="on click toggle @hidden on #menu then if target's @aria-expanded is 'true' set target's @aria-expanded to 'false' else set target's @aria-expanded to 'true'">More</button>
                                <ul id="menu" hidden>
                                    <li><a href="/blog">Blog</a></li>
                                    <li><a href="#">About</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <article id="article">
                        <header>
                            <hgroup>
                                <h1>Heading 1</h1>
                                <h2>Just a pure semantic HTML markup, without classes</h2>
                            </hgroup>
                            <p>Published: <time pubdate datetime="2009-10-09">9th October, 2009</time></p>
                        </header>

                        <section>
                            <h2>Red Delicious</h2>
                            <p>These bright red apples are the most common found in many supermarkets...</p>
                        </section>

                        <section>
                            <h2>Granny Smith</h2>
                            <p>These juicy, green apples make a great filling for apple pies...</p>
                        </section>
                    </article>
                    {/* <!-- ./ Article--> */}
                </main>
                <footer>
                    {/* <!-- https://www.realtimecolors.com/ --> */}
                    <small hx-boost={false}>
                        Powered by <a href="https://deno.com">Deno</a>.
                        Source code on <a href="https://github.com/adoublef/fluffy-oil">GitHub</a>
                    </small>
                </footer>
            </Html>
        );
    };
}