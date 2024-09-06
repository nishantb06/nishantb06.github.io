import React, { createContext, useState, useEffect } from 'react';
import bigQueryRowsGo from '../data/blogs/bigquery-rows-go.json';
import quantisationNotes from '../data/blogs/quantisation-notes.json';
import quickTipGitStash from '../data/blogs/quick-tip-git-stash.json';
import devContainersVscodeDocker from '../data/blogs/dev-containers-vscode-docker.json';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const posts = [
                bigQueryRowsGo,
                quantisationNotes,
                quickTipGitStash,
                devContainersVscodeDocker
            ];

            setBlogPosts(posts);

            // Extract unique tags
            const uniqueTags = new Set();
            posts.forEach(post => {
                post.tags.forEach(tag => uniqueTags.add(tag));
            });
            setTags([...uniqueTags]);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }, []);

    return (
        <BlogContext.Provider value={{ blogPosts, tags, loading, error }}>
            {children}
        </BlogContext.Provider>
    );
};