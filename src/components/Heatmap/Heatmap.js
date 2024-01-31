import React, { useState, useEffect } from 'react';
import positiveMessages from './positiveMessages'; // Import positive reinforcement messages

const CigaretteTrackerWithGauge = ({ dailyCigarettes }) => {
  const [fillLevel, setFillLevel] = useState(0);

  useEffect(() => {
    // Calculate fill level based on dailyCigarettes and a healthy goal
    const healthyGoal = 2; 
    const calculatedFillLevel = Math.min((dailyCigarettes / healthyGoal) * 100, 100);
    setFillLevel(calculatedFillLevel);
  }, [dailyCigarettes]);

  const getMessage = () => {
    // Determine encouraging message based on fill level
    if (fillLevel <= 5) {
      return positiveMessages.low; // You can define your own positive messages
    } else if (fillLevel <= 10) {
      return positiveMessages.moderate;
    } else {
      return positiveMessages.high;
    }
  };
  const getImage= () => {
    // Determine encouraging message based on fill level
    if (fillLevel <= 5) {
      return 'https://res.cloudinary.com/damtnzoo8/image/upload/v1706738777/Reasons_you_have_been_Smoking_xonaqt.png';
    } else if (fillLevel <= 10) {
      return 'https://res.cloudinary.com/damtnzoo8/image/upload/v1706738946/Reasons_you_have_been_Smoking_1_cu0zfl.png';
    } else {
      return 'https://res.cloudinary.com/damtnzoo8/image/upload/v1706739227/Reasons_you_have_been_Smoking_2_du5sb3.png';
    }
  };

  const gaugeStyle = {
    width: '200px', // Adjust the width based on your image size
    height: '200px', // Adjust the height based on your image size
    backgroundImage: `conic-gradient(#4CAF50 0% ${fillLevel}%, #fff ${fillLevel}% 100%)`,
    borderRadius: '50%',
    position: 'relative',
  };

  return (
    <div>
      <div style={gaugeStyle}>
        <img src={getImage()} alt="Gauge" style={{ width: '100%', height: '100%' }} />
      </div>
      <p>{getMessage()}</p>
    </div>
  );
};

export default CigaretteTrackerWithGauge;
