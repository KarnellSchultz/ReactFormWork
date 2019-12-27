import React, { useState } from "react";
import Name from "./Name";
import Email from "./Email";
import Address from "./Address";
import Phone from "./Phone";

export default function Form() {
  const formInitialState = {
    email: "",
    marketingCheckBox: false,
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    country: "Sweden",
    postalCode: "",
    phoneNumber: ""
  };
  const [formData, setFromData] = useState(formInitialState);
  const {
    email,
    marketingCheckBox,
    firstName,
    lastName,
    address1,
    address2,
    country,
    postalCode,
    phoneNumber
  } = formData;

  function onFirstNameChange(event) {
    setFromData({ ...formData, firstName: event });
  }
  function onLastNameChange(event) {
    setFromData({ ...formData, lastName: event });
  }
  function onEmailChange(event) {
    setFromData({ ...formData, email: event });
  }
  function onMarketingCheckBoxChange(event) {
    marketingCheckBox === true ? (event = false) : (event = true);
    setFromData({ ...formData, marketingCheckBox: event });
  }
  function onPhoneNumberChange(event) {
    setFromData({ ...formData, phoneNumber: event });
  }
  function onAddress1Change(event) {
    setFromData({ ...formData, address1: event });
  }
  function onAddress2Change(event) {
    setFromData({ ...formData, address2: event });
  }
  function onCountryChange(event) {
    setFromData({ ...formData, country: event });
  }
  function onPostalCodeChange(event) {
    setFromData({ ...formData, postalCode: event });
  }

  function handleSubmit(event) {
    // console.log(event.target)
    // setFormValue(event.target.formValue);
    event.preventDefault();
  }

  return (
    <div className="small-container">
      <h1 className="vertical-center">Contact Information</h1>
      <form name="contactInformation" onSubmit={handleSubmit}>
        <Email
          email={email}
          onEmailChange={onEmailChange}
          onMarketingCheckBoxChange={onMarketingCheckBoxChange}
          marketingCheckBox={marketingCheckBox}
        />
        <Name
          firstName={firstName}
          lastName={lastName}
          onFirstNameChange={onFirstNameChange}
          onLastNameChange={onLastNameChange}
        />
        <Address
          address1={address1}
          address2={address2}
          postalCode={postalCode}
          country={country}
          onAddress1Change={onAddress1Change}
          onAddress2Change={onAddress2Change}
          onPostalCodeChange={onPostalCodeChange}
          onCountryChange={onCountryChange}
        />
        <Phone
          phoneNumber={phoneNumber}
          onPhoneNumberChange={onPhoneNumberChange}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
