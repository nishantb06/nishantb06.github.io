/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

const RayTracer = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">3D Ray Tracer</h1>
      <h3 className="text-2xl mb-4">Implementation of the Ray tracing challenge book by James Buck</h3>
      
      <img 
        src="https://imgs.search.brave.com/xnFM2mwRtzt7ZILyoZLWoltEAPZ0v2iAk6gDH-WeyU8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEv/dmMvODRhNzFlMTAt/NTA0YS00MTcyLWJl/ZGYtMjM0MTEwZDFh/MTk3Ll9DUjAsNDE5/LDIyNTAsMjI1MF9Q/VDBfU1gzMDBfXy5q/cGc"
        alt="Cover Photo"
        className="w-full max-w-2xl mx-auto mb-8"
      />

      <hr className="my-8" />

      <p className="mb-4">
        This is a C implementation of the Ray tracing challenge book. It basically simulates any scene by simulating a ray of light bouncing off of different objects until it finally hits the canvas.
      </p>

      <p className="mb-4">Picking this project up to learn:</p>
      <ul className="list-disc list-inside mb-8">
        <li>Learn C language</li>
        <li>Test-driven development</li>
        <li>SOLID design patterns</li>
        <li>Accelerate the code using the CUDA-C library</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Implementation after chapter 7</h2>
      <img 
        src="/blogs/images/plot_spheres_ch8.png" 
        alt="Sphere" 
        className="w-full max-w-xl mx-auto mb-8"
      />

      <h3 className="text-xl font-semibold mb-4">Sphere after applying scaling and shearing transformations</h3>
      <img 
        src="/blogs/images/sphere_transformed.png" 
        alt="Transformed Sphere" 
        className="w-full max-w-xl mx-auto mb-8"
      />

      <h2 className="text-2xl font-semibold mb-4">Implementation after chapter 8</h2>
      <img 
        src="/blogs/images/shadowed_spheres_ch8.png" 
        alt="Plot Spheres Chapter 8" 
        className="w-full max-w-4xl mx-auto mb-8"
      />
    </div>
  );
};

export default RayTracer;