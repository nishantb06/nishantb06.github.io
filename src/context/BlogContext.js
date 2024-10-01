import React, { createContext, useState, useEffect } from 'react';
import bigQueryRowsGo from '../data/blogs/bigquery-rows-go.json';
import quantisationNotes from '../data/blogs/quantisation-notes.json';
import quickTipGitStash from '../data/blogs/quick-tip-git-stash.json';
import devContainersVscodeDocker from '../data/blogs/dev-containers-vscode-docker.json';
import distributedTrainingNotes from '../data/blogs/distributed-training-notes.json';
import selfSupervisedDescriptorImageCopyDetection from '../data/blogs/self-supervised-descriptor-image-copy-detection.json';
import dockerCheatsheet from '../data/blogs/docker-cheatsheet.json';
import tmuxForMlEngineers from '../data/blogs/tmux-for-ml-engineers.json';
import mobileVITPaperSummary from '../data/blogs/mobile-vit-paper-summary.json';
import torchServe from '../data/blogs/torchserve.json';
import theAnnotatedLlama from '../data/blogs/the-annotated-llama.json';
import workAtSharechat from '../data/blogs/work-at-sharechat.json';
import jetsonNano from '../data/blogs/jetson-nano.json';
import sshIntoEc2Instance from '../data/blogs/ssh-into-ec2-instance.json';
import writingBetterClasses from '../data/blogs/writing-better-classes.json';

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
                devContainersVscodeDocker,
                distributedTrainingNotes,
                selfSupervisedDescriptorImageCopyDetection,
                dockerCheatsheet,
                tmuxForMlEngineers,
                mobileVITPaperSummary,
                torchServe,
                theAnnotatedLlama,
                workAtSharechat,
                jetsonNano,
                sshIntoEc2Instance,
                writingBetterClasses
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