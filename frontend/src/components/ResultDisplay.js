/*import React from 'react';

function ResultDisplay({ result }) {
  return (
    <div>
      <h2>Eligibility Result:</h2>
      <p>{result.eligible ? "Eligible" : "Not Eligible"}</p>
      <pre>{JSON.stringify(result.results, null, 2)}</pre>
    </div>
  );
}

export default ResultDisplay;*/

// src/ResultDisplay.js
import React from 'react';
//import './src/App.css';

function ResultDisplay({ result }) {
  if (!result) return null;

  const isEligible = result.eligible;
  const resultClass = isEligible ? 'success' : 'failure';
  const resultText = isEligible ? 'Eligible' : 'Not Eligible';

  return (
    <div className={`result ${resultClass}`}>
      <h2>{resultText}</h2>
      <ul>
        {Object.entries(result.results).map(([rule, outcome]) => (
          <li key={rule} className={outcome === true ? 'success' : 'failure'}>
            {rule}: {outcome === true ? 'Passed' : outcome}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultDisplay;


