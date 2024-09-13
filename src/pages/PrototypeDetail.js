import React from 'react';
import { useParams } from 'react-router-dom';
import HuggingFaceEmbed from '../components/HuggingFaceEmbed';

const PrototypeDetail = () => {
    const { id } = useParams();

    const isHuggingFacePrototype = id === 'hugging-face-embed';

    return (
        <div className="container">
            <h1 className="title">Prototype {id}</h1>
            {isHuggingFacePrototype ? (
                <HuggingFaceEmbed />
            ) : (
                <p>This is a blank page for Prototype {id}. You can customize it as needed.</p>
            )}
        </div>
    );
}

export default PrototypeDetail;