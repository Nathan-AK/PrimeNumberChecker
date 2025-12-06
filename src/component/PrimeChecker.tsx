import React, { useState } from "react";
import { isPrime } from "../utils/isPrime";
import { Sparkles, CheckCircle, XCircle } from "lucide-react";

export default function PrimeChecker() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [isPrimeResult, setIsPrimeResult] = useState<boolean | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCheck = () => {
    const num = Number(value);
    
    if (isNaN(num)) {
      setResult("Please enter a valid number.");
      setIsPrimeResult(null);
      return;
    }
    
    setIsAnimating(true);
    
    setTimeout(() => {
      const primeCheck = isPrime(num);
      setIsPrimeResult(primeCheck);
      
      if (primeCheck) {
        setResult(`${num} is a prime number!`);
      } else {
        setResult(`${num} is not a prime number`);
      }
      
      setIsAnimating(false);
    }, 300);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCheck();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 flex items-center justify-center p-6">
      {/* Background Animasi */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative bg-white shadow-2xl rounded-3xl p-8 max-w-md w-full">
        {/* Header icon */}
        <div className="flex items-center justify-center mb-2">
          <Sparkles className="text-blue-500 w-10 h-10 animate-pulse" />
        </div>
        
        <h1 className="text-4xl font-bold text-blue-600 mb-2 text-center">
          Prime Number Checker
        </h1>
        {/* <p className="text-gray-600 text-center mb-8 text-sm">
          Try ur prime number!
        </p> */}

        {/* Input glow effect */}
        <div className="relative mb-6">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a number..."
            className="w-full px-6 py-4 rounded-2xl border-2 border-blue-200 bg-blue-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition-all text-lg font-medium"
          />
        </div>

        {/* Button blue */}
        <button
          onClick={handleCheck}
          disabled={isAnimating}
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isAnimating ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Checking...
            </span>
          ) : (
            "Check Prime Number"
          )}
        </button>

        {/* Hasil Card Animasi */}
        {result && (
          <div className={`mt-6 transform transition-all duration-500 ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
            <div className={`text-center p-6 rounded-2xl border-2 ${
              isPrimeResult === null 
                ? 'bg-yellow-50 border-yellow-300' 
                : isPrimeResult 
                  ? 'bg-green-50 border-green-300' 
                  : 'bg-red-50 border-red-300'
            }`}>
              <div className="flex items-center justify-center mb-3">
                {isPrimeResult === null ? (
                  <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">⚠️</span>
                  </div>
                ) : isPrimeResult ? (
                  <CheckCircle className="w-12 h-12 text-green-500 animate-bounce" />
                ) : (
                  <XCircle className="w-12 h-12 text-red-500" />
                )}
              </div>
              <p className="text-xl font-bold text-gray-800 leading-relaxed">
                {result}
              </p>
              {isPrimeResult && (
                <p className="text-sm text-gray-600 mt-2">
                  Prime numbers are only divisible by 1 and themselves!
                </p>
              )}
            </div>
          </div>
        )}

        {/* Fun fact */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-xs">
            Fun Fact!
          </p>
          <p className="text-gray-500 text-xs">
            💡 Did you know? 2 is the only even prime number!
          </p>
        </div>
      </div>
    </div>
  );
}