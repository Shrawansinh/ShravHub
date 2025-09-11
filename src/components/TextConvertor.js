import React, { useState } from 'react';
import '../TextConverter.css';

const TextConverter = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isConverted, setIsConverted] = useState(false);

  const handleConvert = () => {
    if (inputText.trim()) {
      setOutputText(inputText.toUpperCase());
      setIsConverted(true);
    }
  };

  const handleClear = () => {
    setInputText('');
    setOutputText('');
    setIsConverted(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    alert('Copied to clipboard!');
  };

  return (
    <div className="converter-container">
      <div className="converter-card">
        <h1 className="title">Text to Uppercase Converter</h1>
        <p className="description">Transform your text to uppercase instantly</p>
        
        <div className="input-section">
          <textarea
            className="text-input"
            placeholder="Enter your text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows="5"
          />
        </div>

        <div className="button-group">
          <button 
            className="btn btn-convert" 
            onClick={handleConvert}
            disabled={!inputText.trim()}
          >
            Convert to UPPERCASE
          </button>
          <button 
            className="btn btn-clear" 
            onClick={handleClear}
            disabled={!inputText.trim() && !outputText}
          >
            Clear All
          </button>
        </div>

        {isConverted && (
          <div className="output-section">
            <div className="output-header">
              <h2>Converted Text</h2>
              <button className="btn btn-copy" onClick={handleCopy}>
                Copy Text
              </button>
            </div>
            <div className="text-output">
              {outputText}
            </div>
            <div className="text-info">
              <p>Character count: {outputText.length} | Word count: {outputText.split(/\s+/).filter(word => word !== '').length}</p>
            </div>
          </div>
        )}

        <div className="features">
          <h3>Why use this converter?</h3>
          <ul>
            <li>Instant uppercase conversion</li>
            <li>Easy copy to clipboard</li>
            <li>Character and word count</li>
            <li>Clean and simple interface</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextConverter;