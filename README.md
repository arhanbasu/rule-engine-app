## Eligibility Rule Engine
A 3-tier rule engine application that checks a user's eligibility based on custom rules. The frontend, built with React, allows users to define rules, input user data, and check eligibility. The backend, powered by Express.js, evaluates the rules based on the given user data and returns the result.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [License](#license)

## Features
- Define custom eligibility rules (e.g., age > 20, income > 20000, spend < income * 0.5)
- Input user data to check against rules
- Display eligibility results along with detailed feedback on each rule
- Simple, user-friendly interface

## Demo
- The app looks like this:
  ![Screenshot from 2024-10-26 20-07-53](https://github.com/user-attachments/assets/b8591e84-14b1-45fb-8b16-4e94cc4b640b)
- Enter the number of rules you want to add, then enter the rules and click **Save Rules**.
  ![Screenshot from 2024-10-26 20-04-03](https://github.com/user-attachments/assets/359ad63b-5ccb-4dfd-b605-a9275c00d538)
- Enter the data of the user to check against the rules and click **Check Eligibility**.
  ![Screenshot from 2024-10-26 20-04-53](https://github.com/user-attachments/assets/878e7b46-fdc4-42c8-92f5-f1dcf466b1e8)
- Another example where data doesn't match with rule.
  ![Screenshot from 2024-10-26 20-07-21](https://github.com/user-attachments/assets/d5e88683-8069-4586-89c8-5df95ed1a786)

## Dependencies
### 1. Backend (Express.js)
- Node.js (v14 or above)
- Express.js
- CORS (Cross-Origin Resource Sharing)
### 2. Frontend (React.js)
- React
- Axios (for HTTP requests)

## Getting Started
### 1. Backend Setup
- Clone the Repository:
```bash
git clone https://github.com/your-username/eligibility-rule-engine.git
cd eligibility-rule-engine
```
- Navigate to Backend:
```bash
cd backend
```
- Install Backend Dependencies:
```bash
npm install
```
- Start Backend Server:
```bash
npm start
```
By default, the server will run on http://localhost:5000.

### 2. Frontend Setup
Navigate to Frontend:
```bash
cd ../frontend
```
- Install Frontend Dependencies:
```bash
npm install
```
- Start Frontend Server:
```bash
npm start
```
The React app will run on http://localhost:3000.

### 3. Running the Application
Ensure Both Servers Are Running:

The backend server on http://localhost:5000
The frontend server on http://localhost:3000

### 4. Access the Application:

Open a web browser and go to http://localhost:3000.

## Usage
- Define the Number of Rules: Input the number of rules you’d like to create.
- Input Custom Rules: Define each rule in the format variable operator value. Examples:
age > 20
income > 20000
spend < income * 0.5
Save Rules:
- Click "Save Rules" to store the defined rules on the backend.
- Input User Data: Provide user data for each relevant variable (e.g., age, income, spend).
- Check Eligibility: Click "Check Eligibility" to evaluate the user data against the rules.
- View Results: The results will display eligibility status (Eligible or Not Eligible) along with feedback on each rule (Passed or Failed).

## Directory Structure
```bash
eligibility-rule-engine
├── backend
│   ├── controllers
│   │   └── ruleController.js   # Rule management and evaluation logic
│   ├── routes
│   │   └── rules.js            # API routes for rule storage and evaluation
│   ├── server.js               # Express server setup
│   └── package.json
├── frontend
│   ├── src
│   │   ├── App.js              # Main component
│   │   ├── App.css             # Styling for UI components
│   │   ├── RuleInput.js        # Component for inputting rules
│   │   ├── UserDataInput.js    # Component for inputting user data
│   │   └── ResultDisplay.js    # Component for displaying eligibility results
│   └── package.json
└── README.md
```
## License
This project is licensed under the MIT License.

