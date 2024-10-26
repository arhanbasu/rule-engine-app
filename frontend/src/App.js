import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import RuleInput from './components/RuleInput';
import UserDataInput from './components/UserDataInput';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [numRules, setNumRules] = useState(1);
  const [rules, setRules] = useState([]);
  const [userData, setUserData] = useState({});
  const [result, setResult] = useState(null);

  const handleRuleChange = (index, value) => {
    const updatedRules = [...rules];
    updatedRules[index] = value;
    setRules(updatedRules);
  };

  const handleUserDataChange = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const submitRules = async () => {
    try {
      await axios.post('http://localhost:5000/api/rules', { rules });
      alert("Rules saved successfully!");
    } catch (error) {
      console.error("Error saving rules", error);
    }
  };

  const evaluateEligibility = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/evaluate', { user_data: userData });
      setResult(response.data);
    } catch (error) {
      console.error("Error evaluating eligibility", error);
    }
  };

  return (
    <div className="App">
      <h1>Eligibility Rule Engine</h1>
      
      <label>Number of Rules:</label>
      <input 
        type="number" 
        value={numRules} 
        onChange={(e) => setNumRules(Number(e.target.value))}
        min="1"
      />
      
      <RuleInput numRules={numRules} onRuleChange={handleRuleChange} />
      <button onClick={submitRules}>Save Rules</button>
      
      <UserDataInput onUserDataChange={handleUserDataChange} />
      <button onClick={evaluateEligibility}>Check Eligibility</button>
      
      {result && <ResultDisplay result={result} />}
    </div>
  );
}

export default App;


/*
import React, { useState } from 'react';
import './App.css';
import RuleInput from './components/RuleInput';
import UserDataInput from './components/UserDataInput';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [numRules, setNumRules] = useState(1);
  const [rules, setRules] = useState([]);
  const [userData, setUserData] = useState({});
  const [result, setResult] = useState(null);

  const handleNumRulesChange = (e) => setNumRules(e.target.value);
  const handleRuleChange = (index, rule) => {
    const updatedRules = [...rules];
    updatedRules[index] = rule;
    setRules(updatedRules);
  };
  const handleUserDataChange = (data) => setUserData(data);

  const submitRules = async () => {
    await fetch('http://localhost:5000/api/rules', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rules }),
    });
  };

  const evaluateEligibility = async () => {
    const response = await fetch('http://localhost:5000/api/evaluate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_data: userData }),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div className="container">
      <h1>Eligibility Rule Engine</h1>
      <div>
        <label htmlFor="numRules">Number of Rules:</label>
        <input
          id="numRules"
          type="number"
          value={numRules}
          onChange={handleNumRulesChange}
          min="1"
        />
      </div>

      <RuleInput numRules={numRules} onRuleChange={handleRuleChange} />
      <button onClick={submitRules}>Save Rules</button>

      <UserDataInput onUserDataChange={handleUserDataChange} />
      <button onClick={evaluateEligibility}>Check Eligibility</button>

      {result && <ResultDisplay result={result} />}
    </div>
  );
}

export default App;
*/


