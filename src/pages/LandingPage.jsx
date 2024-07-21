import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">AI-Powered Meta Generator</h1>
            <p className="text-xl mb-8">Upload your files and let our AI generate meta information instantly.</p>
            <Button asChild size="lg">
              <Link to="/docs">Get Started</Link>
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Placeholder for SVG */}
            <div className="w-64 h-64 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-2xl font-bold">
              SVG Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Animation Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="flex justify-center">
            <AnimatedProcess />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Instant Meta Generation</h3>
              <p>Our AI quickly analyzes your files and generates accurate meta information.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Multiple File Types</h3>
              <p>Support for various file formats including images, documents, and more.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
              <p>Seamlessly integrate our API into your existing workflows and applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to streamline your workflow?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied users and start generating meta information effortlessly!</p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/signup">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

const AnimatedProcess = () => {
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 1,
        repeat: Infinity,
        repeatDelay: 1
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={itemVariants} className="mb-4">
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl">1</div>
        <p className="mt-2 text-center">Upload File</p>
      </motion.div>
      <motion.div variants={itemVariants} className="mb-4">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl">2</div>
        <p className="mt-2 text-center">AI Processing</p>
      </motion.div>
      <motion.div variants={itemVariants}>
        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl">3</div>
        <p className="mt-2 text-center">Meta Info Generated</p>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;