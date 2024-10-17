import React from 'react';

const ReadingStack = () => {
    return (
        <div className="container">
            <section className="section">
                <h1 className="title is-1">Reading Stack - Chrome Extension</h1>
                <div className="columns">
                    <div className="column is-three-quarters">
                        <div className="content">
                            <img src="/blogs/images/reading-stack-icon.png" alt="Reading Stack Logo" className="image is-64x64 mb-4" />
                            <p>
                                Reading Stack is a Chrome extension that helps you manage your active reading list with ease. 
                                Keep track of articles you want to read, mark them as read, and access them quickly.
                            </p>
                            <p>
                                Currently this is not published on the Chrome Web Store, but you can install it by following the instructions below. 
                                I made it for my use with cursor ai.
                            </p>

                            <h2 className="title is-3">Features</h2>
                            <ul>
                                <li>Add the current page to your reading list with one click</li>
                                <li>Manually add articles by URL</li>
                                <li>Mark articles as read or unread</li>
                                <li>Open articles in a new tab</li>
                                <li>Remove articles from your list</li>
                                <li>Syncs across devices (when signed into Chrome)</li>
                            </ul>

                            <h2 className="title is-3">Screenshot</h2>
                            <figure className="image">
                                <img src="/blogs/images/readingstack-preview.png" alt="Reading Stack Demo" />
                            </figure>

                            <h2 className="title is-3">Installation</h2>
                            <ol>
                                <li>Clone this repository or download the ZIP file.</li>
                                <li>Open Chrome and navigate to <code>chrome://extensions</code>.</li>
                                <li>Enable "Developer mode" in the top right corner.</li>
                                <li>Click "Load unpacked" and select the directory containing the extension files.</li>
                            </ol>

                            <h2 className="title is-3">Usage</h2>
                            <ol>
                                <li>Click the Reading Stack icon in your Chrome toolbar to open the popup.</li>
                                <li>Use the "Add Current Site" button to quickly add the current page to your list.</li>
                                <li>Alternatively, enter a URL manually and click "Add" to add it to your list.</li>
                                <li>Manage your reading list using the "Read", "Open", and "Remove" buttons for each article.</li>
                            </ol>

                            <h2 className="title is-3">Development</h2>
                            <p>To modify or enhance the extension:</p>
                            <ol>
                                <li>Edit the HTML in <code>popup.html</code> to change the structure.</li>
                                <li>Modify the styles in <code>custom.css</code> to adjust the appearance.</li>
                                <li>Update the functionality in <code>popup.js</code> to add or change features.</li>
                                <li>If necessary, update the <code>manifest.json</code> file to reflect any changes in permissions or metadata.</li>
                            </ol>

                            <h2 className="title is-3">Contributing</h2>
                            <p>Contributions are welcome! Please feel free to submit a Pull Request.</p>

                            <h2 className="title is-3">License</h2>
                            <p>This project is open source and available under the <a href="#">MIT License</a>.</p>

                            <h2 className="title is-3">Credits</h2>
                            <p>Bookmark icon by <a href="https://icons8.com" target="_blank" rel="noopener noreferrer">Icons8</a></p>

                            <h2 className="title is-3">Contact</h2>
                            <p>If you have any questions, feel free to reach out or open an issue.</p>

                            <p className="has-text-weight-bold">Happy reading!</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <h3 className="title is-4">Quick Links</h3>
                            <div className="buttons">
                                <a href="https://github.com/nishantb06/readinglist" className="button is-info">View on GitHub</a>
                            </div>
                            <div className="buttons">
                                <a href="https://youtu.be/5g2C41GErRQ?si=pRPlxv_zxqQ4wdJG" className="button is-info">Demo on Youtube</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ReadingStack;
