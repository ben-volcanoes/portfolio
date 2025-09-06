import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-600">
          This is the home page of my portfolio website.
        </p>
      </div>
    </div>
  );
};

export default HomePage;