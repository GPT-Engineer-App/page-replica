import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Upload, Cpu, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4">AI-Powered Meta Generator</h1>
            <p className="text-xl mb-8">Upload your files and let our AI generate meta information instantly.</p>
            <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link to="/docs">Get Started</Link>
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <AnimatedProcess />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-indigo-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Instant Meta Generation"
              description="Our AI quickly analyzes your files and generates accurate meta information."
            />
            <FeatureCard
              title="Multiple File Types"
              description="Support for various file formats including images, documents, and more."
            />
            <FeatureCard
              title="Easy Integration"
              description="Seamlessly integrate our API into your existing workflows and applications."
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to streamline your workflow?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied users and start generating meta information effortlessly!</p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-indigo-800 hover:bg-gray-100">
            <Link to="/signup">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2 text-indigo-700">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

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

  const arrowVariants = {
    initial: { opacity: 0, pathLength: 0 },
    animate: { 
      opacity: 1, 
      pathLength: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const metaFieldVariants = {
    initial: { width: 0 },
    animate: { 
      width: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-wrap justify-center items-center relative w-full max-w-2xl"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={itemVariants} className="mb-16 text-center mx-4">
        <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-2">
          <Upload size={32} />
        </div>
        <p className="mt-2 font-semibold">Upload File</p>
      </motion.div>

      <motion.svg
        width="100"
        height="60"
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-4"
      >
        <motion.path
          d="M0 30 Q 50 0, 100 30"
          stroke="white"
          strokeWidth="2"
          fill="none"
          variants={arrowVariants}
        />
        <motion.path
          d="M90 20 L100 30 L90 40"
          stroke="white"
          strokeWidth="2"
          fill="none"
          variants={arrowVariants}
        />
      </motion.svg>

      <motion.div variants={itemVariants} className="mb-16 text-center mx-4">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-2">
          <Cpu size={32} />
        </div>
        <p className="mt-2 font-semibold">AI Processing</p>
      </motion.div>

      <motion.svg
        width="100"
        height="60"
        viewBox="0 0 100 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-4"
      >
        <motion.path
          d="M0 30 Q 50 60, 100 30"
          stroke="white"
          strokeWidth="2"
          fill="none"
          variants={arrowVariants}
        />
        <motion.path
          d="M90 20 L100 30 L90 40"
          stroke="white"
          strokeWidth="2"
          fill="none"
          variants={arrowVariants}
        />
      </motion.svg>

      <motion.div variants={itemVariants} className="text-center mx-4">
        <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-2">
          <ArrowRight size={32} />
        </div>
        <p className="mt-2 font-semibold">Meta Info Generated</p>
        <motion.div className="mt-4 text-left w-48">
          <motion.div variants={metaFieldVariants} className="h-6 bg-white rounded mb-2 overflow-hidden">
            <motion.span className="block h-full bg-blue-300 text-xs px-2 py-1">Title: AI Image</motion.span>
          </motion.div>
          <motion.div variants={metaFieldVariants} className="h-6 bg-white rounded mb-2 overflow-hidden">
            <motion.span className="block h-full bg-green-300 text-xs px-2 py-1">Tags: AI, Tech</motion.span>
          </motion.div>
          <motion.div variants={metaFieldVariants} className="h-6 bg-white rounded overflow-hidden">
            <motion.span className="block h-full bg-purple-300 text-xs px-2 py-1">Size: 1024x1024</motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;