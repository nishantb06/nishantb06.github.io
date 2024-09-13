import React, { useEffect } from 'react';

const HuggingFaceEmbed = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = 'https://gradio.s3-us-west-2.amazonaws.com/4.44.0/gradio.js';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <h2>Hugging Face Embed</h2>
            <gradio-app src="https://nishantb06-facebook-fasttext-language-identification.hf.space"></gradio-app>
        </div>
    );
}

export default HuggingFaceEmbed;