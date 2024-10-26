import React from 'react';

function UserDataInput({ onUserDataChange }) {
  return (
    <div>
      <h2>User Data</h2>
      <input type="number" placeholder="age" onChange={(e) => onUserDataChange("age", Number(e.target.value))} />
      <input type="text" placeholder="department" onChange={(e) => onUserDataChange("department", e.target.value)} />
      <input type="number" placeholder="income" onChange={(e) => onUserDataChange("income", Number(e.target.value))} />
      <input type="number" placeholder="spend" onChange={(e) => onUserDataChange("spend", Number(e.target.value))} />
    </div>
  );
}

export default UserDataInput;

