import React from "react";

export default function Phone({ phoneNumber, onPhoneNumberChange }) {
  function handleChange(event) {
    onPhoneNumberChange(event.target.value);
  }
  return (
    <>
      <label
        className={
          phoneNumber.length > 1
            ? "transition-label  transition-label-active"
            : "transition-label"
        }
        htmlFor="phone"
      >
        Phone Number
      </label>
      <input
        type="tel"
        id="phone"
        placeholder="Phone Number"
        onChange={handleChange}
        value={phoneNumber}
      ></input>
    </>
  );
}
