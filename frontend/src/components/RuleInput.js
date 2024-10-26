/*import React from 'react';

function RuleInput({ numRules, onRuleChange }) {
  return (
    <div>
      <h2>Define Rules</h2>
      {[...Array(numRules)].map((_, index) => (
        <div key={index}>
          <input 
            type="text" 
            placeholder={`Rule ${index + 1}`} 
            onChange={(e) => onRuleChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

export default RuleInput;*/

// src/RuleInput.js
import React from 'react';

function RuleInput({ numRules, onRuleChange }) {
  const handleChange = (index, e) => {
    onRuleChange(index, e.target.value);
  };

  return (
    <div className="rule-input">
      <h2>Define Rules</h2>
      {[...Array(parseInt(numRules))].map((_, index) => (
        <input
          key={index}
          type="text"
          placeholder={`Rule ${index + 1}`}
          onChange={(e) => handleChange(index, e)}
        />
      ))}
    </div>
  );
}

export default RuleInput;


