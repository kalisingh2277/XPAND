import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wallet } from 'lucide-react';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulating payment processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Payment processed successfully!');
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Secure Blockchain Payment</h1>
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
          <form onSubmit={handlePayment}>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Select Payment Method</label>
              <div className="grid grid-cols-3 gap-4">
                <PaymentOption
                  icon={<CreditCard className="h-8 w-8" />}
                  name="Credit Card"
                  selected={paymentMethod === 'credit'}
                  onClick={() => setPaymentMethod('credit')}
                />
                <PaymentOption
                  icon={<Wallet className="h-8 w-8" />}
                  name="Crypto"
                  selected={paymentMethod === 'crypto'}
                  onClick={() => setPaymentMethod('crypto')}
                />
                <PaymentOption
                  icon={<svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 9V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><rect x="10" y="9" width="12" height="12" rx="2"/><path d="M15 13h2"/><path d="M15 17h2"/></svg>}
                  name="PayPal"
                  selected={paymentMethod === 'paypal'}
                  onClick={() => setPaymentMethod('paypal')}
                />
              </div>
            </div>
            {paymentMethod && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-6">
                  <label htmlFor="amount" className="block text-sm font-medium mb-2">Amount</label>
                  <input
                    type="number"
                    id="amount"
                    className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter amount"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                  disabled={isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Pay Now'}
                </button>
              </motion.div>
            )}
          </form>
        </div>
      </div>
      <BlockchainAnimation />
    </div>
  );
};

const PaymentOption = ({ icon, name, selected, onClick }) => (
  <motion.div
    className={`flex flex-col items-center justify-center p-4 rounded-lg cursor-pointer ${
      selected ? 'bg-blue-500' : 'bg-gray-700'
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <span className="mt-2 text-sm">{name}</span>
  </motion.div>
);

const BlockchainAnimation = () => (
  <div className="fixed inset-0 pointer-events-none">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-full max-w-4xl max-h-96 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-blue-500 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  </div>
);

export default Payment;