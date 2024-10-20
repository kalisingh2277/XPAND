import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload as UploadIcon } from 'lucide-react';

const Upload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const handleFileInput = (e) => {
    const selectedFile = e.target.files[0];
    handleFile(selectedFile);
  };

  const handleFile = (file) => {
    setFile(file);
    simulateUpload();
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 500);
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
          Secure File Upload
        </motion.h1>
        <motion.div 
          className="max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div
            className={`border-4 border-dashed rounded-lg p-12 text-center ${
              isDragging ? 'border-blue-500 bg-blue-100 bg-opacity-10' : 'border-gray-600'
            }`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <UploadIcon className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <p className="text-lg mb-4">Drag and drop your file here, or click to select</p>
            <input
              type="file"
              className="hidden"
              onChange={handleFileInput}
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer transition-colors duration-300"
            >
              Select File
            </label>
          </div>
          {file && (
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg mb-2">Uploading: {file.name}</p>
              <div className="bg-gray-700 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-blue-500 h-full transition-all duration-500 ease-out"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-right mt-2">{uploadProgress}%</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Upload;