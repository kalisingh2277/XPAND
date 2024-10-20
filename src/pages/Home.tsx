import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const stars = [];
    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = 0, x = stars.length; i < x; i++) {
        const s = stars[i];

        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();

        s.x += s.vx / 30;
        s.y += s.vy / 30;

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      }
    };

    const animate = () => {
      draw();
      animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10">
        <header className="h-screen flex items-center justify-center">
          <div className="text-center px-4">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              XPAND: Unlock the Infinite Digital Frontier
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Explore the future of blockchain and decentralized technology
            </motion.p>
            <motion.button
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 animate-pulse"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Get Started <ArrowRight className="inline-block ml-2" />
            </motion.button>
          </div>
        </header>

        <section id="features" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">What We Do</h2>
            <p className="text-xl mb-12 text-center text-gray-300">XPAND is at the forefront of blockchain technology, providing secure, scalable, and innovative solutions for the digital age.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard title="Security" icon="🔒" description="State-of-the-art encryption and decentralized architecture ensure your data remains safe." />
              <FeatureCard title="Privacy" icon="🕵️" description="Your information is yours alone. We prioritize user privacy in every aspect of our platform." />
              <FeatureCard title="Scalability" icon="📈" description="Built to grow with you, our infrastructure can handle projects of any size." />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-800 bg-opacity-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Why Blockchain?</h2>
            <p className="text-xl mb-12 text-center text-gray-300">Blockchain technology offers unparalleled security, transparency, and efficiency. It's not just a buzzword - it's the foundation of the next digital revolution.</p>
            <div className="flex justify-center">
              <img src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Blockchain Visualization" className="rounded-lg shadow-2xl max-w-full h-auto" />
            </div>
          </div>
        </section>

        <section id="upload" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Technology</h2>
            <p className="text-xl mb-12 text-center text-gray-300">Experience the power of XPAND's cutting-edge blockchain solutions. Upload your files securely and witness the future of digital storage and transmission.</p>
            <div className="flex justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
                Try File Upload
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, icon, description }) => (
  <motion.div 
    className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default Home;