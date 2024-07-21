import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Welcome to AI Meta Generator</h1>
      <p className="text-xl mb-8">Generate meta information for your files using advanced AI technology.</p>
      <Button asChild size="lg">
        <Link to="/docs">Get Started</Link>
      </Button>
    </div>
  );
};

export default Home;