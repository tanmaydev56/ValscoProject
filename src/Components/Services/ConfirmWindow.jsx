import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ConfirmWindow = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedCourse = new URLSearchParams(location.search).get('course');
  const [countdown, setCountdown] = useState(5); // 3-second countdown

  useEffect(() => {
    // Countdown timer
    const timerInterval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Redirect to Services after countdown reaches 0
    const redirectTimer = setTimeout(() => {
      navigate("/Services");
    }, countdown * 1000);

    return () => {
      clearInterval(timerInterval);
      clearTimeout(redirectTimer);
    };
  }, [countdown, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-black border border-gray-700 shadow-lg rounded-lg p-8 max-w-lg w-full text-center space-y-6">
        <div className="flex items-center justify-center">
          {/* Green tick mark */}
          
        </div>
        <h2 className="text-3xl font-semibold text-green-500">Selection Confirmed!</h2>
        <p className="text-gray-300">
          You have successfully selected the <span className="font-bold text-white">{selectedCourse}</span> service.
        </p>
        <p className="text-[#fff]">
          Redirecting in <span className="font-bold text-[#fe1515]">{countdown}</span> seconds...
        </p>
      </div>
    </div>
  );
};

export default ConfirmWindow;
