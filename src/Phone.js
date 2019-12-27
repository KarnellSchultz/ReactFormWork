import React from "react";

export default function Phone({ phoneNumber, onPhoneNumberChange }) {
  function handleChange(event) {
    onPhoneNumberChange(event.target.value);
  }
  return (
    <>
      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        placeholder="076-123-3210"
        onChange={handleChange}
        value={phoneNumber}
      ></input>
    </>
  );
}
