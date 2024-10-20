import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback data to a server
    console.log('Feedback submitted:', { rating, comment });
    alert('Thank you for your feedback!');
    setRating(0);
    setComment('');
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Feedback
        </motion.h1>
        <motion.div 
          className="max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Rate your experience</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((value) => (
                  <Star
                    key={value}
                    className={`h-8 w-8 cursor-pointer ${
                      value <= rating ? 'text-yellow-400 fill-current' : 'text-gray-400'
                    }`}
                    onClick={() => handleRatingChange(value)}
                  />
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-medium mb-2">Your feedback</label>
              <textarea
                id="comment"
                value={comment}
                onChange={handleCommentChange}
                rows={4}
                className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your experience..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
            >
              Submit Feedback
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Feedback;