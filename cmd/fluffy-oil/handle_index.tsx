import { Handler } from "~/deps.ts";
import { Html } from "~/jsx/dom/html.tsx";

export function handleIndex(): Handler {
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
                    <hgroup>
                        <h1>Heading 1</h1>
                        <h2>Just a pure semantic HTML markup, without classes</h2>
                    </hgroup>

                    {/* <!-- Typography --> */}
                    <section id="typography">
                        <h2>Typography</h2>
                        <p>
                            Aliquam lobortis vitae nibh nec rhoncus. Morbi mattis neque eget efficitur feugiat.
                            Vivamus porta nunc a erat mattis, mattis feugiat turpis pretium. <a href="#">Quisque sed tristique
                                felis.</a>
                        </p>

                        {/* <!-- Blockquote--> */}
                        <blockquote>
                            "Maecenas vehicula metus tellus, vitae congue turpis hendrerit non. Nam at dui sit amet
                            ipsum cursus ornare."
                            <footer>
                                <cite>- Phasellus eget lacinia</cite>
                            </footer>
                        </blockquote>

                        {/* <!-- Headings--> */}
                        <h3>Heading 3</h3>
                        <p>
                            Integer bibendum malesuada libero vel eleifend. Fusce iaculis turpis ipsum, at efficitur
                            sem scelerisque vel. Aliquam auctor diam ut purus cursus fringilla. Class aptent taciti
                            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                        <h4>Heading 4</h4>
                        <p>
                            Cras fermentum velit vitae auctor aliquet. Nunc non congue urna, at blandit nibh. Donec ac
                            fermentum felis. Vivamus tincidunt arcu ut lacus hendrerit, eget mattis dui finibus.
                        </p>
                        <h5>Heading 5</h5>
                        <p>
                            Donec nec egestas nulla. Sed varius placerat felis eu suscipit. Mauris maximus ante in
                            consequat luctus. Morbi euismod sagittis efficitur. Aenean non eros orci. Vivamus ut diam
                            sem.
                        </p>
                        <h6>Heading 6</h6>
                        <p>
                            Ut sed quam non mauris placerat consequat vitae id risus. Vestibulum tincidunt nulla ut
                            tortor posuere, vitae malesuada tortor molestie. Sed nec interdum dolor. Vestibulum id
                            auctor nisi, a efficitur sem. Aliquam sollicitudin efficitur turpis, sollicitudin
                            hendrerit ligula semper id. Nunc risus felis, egestas eu tristique eget, convallis in
                            velit.
                        </p>

                        {/* <!-- Inline text elements--> */}
                        <h3>Inline text elements</h3>
                        <figure>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><a href="#" onclick="event.preventDefault()">Link</a></td>
                                        <td><strong>Bold</strong></td>
                                        <td><em>Italic</em></td>
                                    </tr>
                                    <tr>
                                        <td><u>Underline</u></td>
                                        <td><del>Deleted</del></td>
                                        <td><ins>Inserted</ins></td>
                                    </tr>
                                    <tr>
                                        <td><s>Strikethrough</s></td>
                                        <td><small>Small </small></td>
                                        <td><abbr title="Abbreviation" data-tooltip="Abbreviation">Abbr.</abbr></td>
                                    </tr>
                                    <tr>
                                        <td>Text <sub>Sub</sub></td>
                                        <td>Text <sup>Sup</sup></td>
                                        <td><kbd>Kbd</kbd></td>
                                    </tr>
                                    <tr>
                                        <td><mark>Highlighted</mark></td>
                                        <td>&nbsp;</td>
                                        <td>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </figure>
                    </section>
                    {/* <!-- ./Typography  --> */}

                    {/* <!-- Button--> */}
                    <section id="button">
                        <h2>Button</h2>
                        {/* <!-- Add feedback --> */}
                        <button type="button">Primary</button>
                        {/* <!-- Remove the underline when styled as a button --> */}
                        <a href="/" role="button">Anchor</a>
                    </section>
                    {/* <!-- ./ Button --> */}

                    {/* <!-- Article--> */}
                    <article id="article">
                        <h2>Article</h2>
                        <p>
                            Nullam dui arcu, malesuada et sodales eu, efficitur vitae dolor. Sed ultricies dolor non
                            ante <u>vulputate hendrerit</u>. Vivamus sit amet suscipit sapien. Nulla iaculis eros a elit
                            pharetra egestas. Nunc placerat facilisis cursus. Sed vestibulum metus eget dolor pharetra
                            rutrum.
                        </p>
                        <footer><small>Duis nec elit placerat, suscipit nibh quis, finibus neque.</small></footer>
                    </article>
                    {/* <!-- ./ Article--> */}

                    {/* <!-- Progress --> */}
                    <section id="progress">
                        <h2>Progress bar</h2>
                        <progress id="progress-1" value="25" max="100"></progress>
                        <progress id="progress-2"></progress>
                    </section>
                    {/* <!-- ./ Progress --> */}

                    {/* <!-- Loading --> */}
                    <section id="loading">
                        <h2>Loading</h2>
                        <article aria-busy="true"></article>
                        <button aria-busy="true">Please wait…</button>
                    </section>
                    {/* <!-- ./ Loading --> */}
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