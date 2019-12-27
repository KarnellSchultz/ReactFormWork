import React from "react";


export default function Name({
  firstName,
  onFirstNameChange,
  lastName,
  onLastNameChange
}) {
  function handleFirstChange(event) {
    onFirstNameChange(event.target.value);
  }
  function handleLastChange(event) {
    onLastNameChange(event.target.value);
  }

  return (
    <div>
      <div className="flex-row">
        <div className="flex-small">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            onChange={handleFirstChange}
            value={firstName}
          />
        </div>
        <div className="flex-small">
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            onChange={handleLastChange}
            value={lastName}
          />
        </div>
      </div>
    </div>
  );
}
