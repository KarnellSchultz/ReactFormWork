import React, { useState } from "react";
import Name from "./Name";
import Email from "./Email";
import Address from "./Address";
import Phone from "./Phone";

export default function Form() {
  const formInitialState = {
    email: "",
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    country: "",
    postalCode: "",
    phoneNumber: ""
  };
  const [formData, setFromData] = useState(formInitialState);
  const {
    email,
    firstName,
    lastName,
    address1,
    address2,
    country,
    postalCode,
    phoneNumber
  } = formData;

  function onFirstNameChange(event) {
    setFromData({ firstName: event });
  }
  function onLastNameChange(event) {
    setFromData({ lastName: event });
  }
  function onEmailChange(event) {
    setFromData({ email: event });
  }
  function onPhoneNumberChange(event) {
    setFromData({ phoneNumber: event });
  }
  

  function handleSubmit(event) {
    // console.log(event.target)
    // setFormValue(event.target.formValue);
    event.preventDefault();
  }

  return (
    <div className="small-container">
      <h1 className="vertical-center">React Form Stuff</h1>
      <form onSubmit={handleSubmit}>
        <Email email={email} onEmailChange={onEmailChange} />
        <Name
          firstName={firstName}
          lastName={lastName}
          onFirstNameChange={onFirstNameChange}
          onLastNameChange={onLastNameChange}
        />
        <Address />
        <Phone
          phoneNumber={phoneNumber}
          onPhoneNumberChange={onPhoneNumberChange}
        />
        <button type="submit" className="vertical-center">
          Submit
        </button>
      </form>
    </div>
  );
}
