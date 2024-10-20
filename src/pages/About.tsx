import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>
        
        <motion.section 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Our Vision: Expanding Boundaries in the Digital Era</h2>
          <p className="mb-4">At XPAND, we believe in pushing the boundaries of technology to create a world where data privacy, security, and scalability are not just options but standards. Inspired by the vastness of space, we aim to build solutions that transcend traditional limits, much like space exploration defies the confines of our planet.</p>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="mb-4">We are a team of visionary tech enthusiasts, innovators, and problem solvers. Our mission is simple: to leverage blockchain technology and cutting-edge AI-powered tools to provide businesses and individuals with secure, decentralized solutions for data storage, processing, and access control. At XPAND, we focus on privacy-first architecture, ensuring your data remains in your hands, and we harness blockchain to build transparency and trust in every interaction.</p>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">What We Do</h2>
          <p className="mb-4">XPAND offers a range of products and services designed to help businesses navigate the digital landscape with ease:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Privacy-First Data Storage: Our decentralized storage solutions ensure that your data is secure and accessible only to those with permission.</li>
            <li>AI-Powered Data Analytics: Our powerful AI tools help you draw meaningful insights from your data, driving growth and innovation.</li>
            <li>Blockchain-Based Access Control: With blockchain technology at our core, we create transparent, tamper-proof systems that guarantee security and trust.</li>
            <li>Seamless User Interfaces: Every solution we build is designed with usability in mind, ensuring that complex processes are simple and intuitive for the user.</li>
          </ul>
        </motion.section>

        <motion.section 
          className="mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Our Inspiration</h2>
          <p className="mb-4">Much like how the vastness of space challenges us to innovate and explore, we view the digital world as an infinite frontier. We are constantly pushing the limits of what's possible in the realms of blockchain, AI, and decentralized systems, creating technology that empowers users to take control of their data and interactions.</p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Why Blockchain?</h2>
          <p className="mb-4">Blockchain represents a revolution in the way we store, secure, and share information. It's a decentralized system that removes the need for intermediaries, enabling secure, transparent, and trusted transactions. At XPAND, we utilize blockchain's power to provide our clients with the peace of mind that their data and operations are safe from interference and manipulation.</p>
          <p>Through our work, we aim to transform the way businesses and individuals interact with digital systems. Join us as we continue to expand the boundaries of technology and redefine the future of data and security.</p>
        </motion.section>
      </div>
    </div>
  );
};

export default About;