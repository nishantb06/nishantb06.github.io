import React from 'react';
import './Newspaper.css';

const Newspaper = () => {
    return (
        <div className="newspaper">
            <header>
                <h1>The Daily Chronicle</h1>
                <p className="date">May 1, 2023</p>
            </header>
            <main>
                <section className="top-news">
                    <article className="column">
                        <h2>Breaking News</h2>
                        <img src="https://picsum.photos/seed/news1/300/200" alt="News" className="news-image bw-image" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </article>
                    <article className="column">
                        <h2>Local Events</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <h3>Community Gathering</h3>
                        <img src="https://picsum.photos/seed/event/300/200" alt="Community Event" className="news-image" />
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </article>
                    <article className="column">
                        <h2>Opinion</h2>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                    </article>
                </section>
                <section className="more-news">
                    <h2 className="section-title">More Headlines</h2>
                    <div className="grid-columns">
                        <article>
                            <h3>Technology</h3>
                            <img src="https://picsum.photos/seed/tech/300/200" alt="Technology" className="news-image" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.</p>
                        </article>
                        <article>
                            <h3>Sports</h3>
                            <img src="https://picsum.photos/seed/sports/300/200" alt="Sports" className="news-image" />
                            <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                        </article>
                        <article>
                            <h3>Entertainment</h3>
                            <img src="https://picsum.photos/seed/entertainment/300/200" alt="Entertainment" className="news-image" />
                            <p>Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.</p>
                        </article>
                        <article>
                            <h3>Health</h3>
                            <img src="https://picsum.photos/seed/health/300/200" alt="Health" className="news-image" />
                            <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam.</p>
                        </article>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Newspaper;