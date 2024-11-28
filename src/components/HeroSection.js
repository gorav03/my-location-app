import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './HeroSection.css';

function HeroSection() {
  const [startDate, setStartDate] = useState(null);
  const [inputText, setInputText] = useState('');
  const [showDemoPicker, setShowDemoPicker] = useState(false);

  const handleRequestDemoClick = () => {
    setShowDemoPicker(!showDemoPicker);
  };

  return (
    <div className="hero-section">
      <div className="overlay">
        <h1>
          AI Agents for <span className="highlight">Location</span>
        </h1>
        <p>Automatically enrich and validate your location data</p>
        <button className="cta-button" onClick={handleRequestDemoClick}>
          {startDate && inputText
            ? `Demo: ${inputText} on ${startDate.toDateString()}`
            : 'Request Demo'}
        </button>
        {showDemoPicker && (
          <div className="demo-picker-container">
            <input
              type="text"
              placeholder="Enter your name or details"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="text-input"
            />
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MMMM d, yyyy"
              placeholderText="Select a date"
              className="date-picker-input"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroSection;
