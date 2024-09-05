import React from 'react';
import { useParams } from 'react-router-dom';

const PrototypeDetail = () => {
    const { id } = useParams();

    return (
        <div className="container">
            <h1 className="title">Prototype {id}</h1>
            <p>This is a blank page for Prototype {id}. You can customize it as needed.</p>
        </div>
    );
}

export default PrototypeDetail;