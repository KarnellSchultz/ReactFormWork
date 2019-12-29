import React, { useState, useEffect } from "react";
import Name from "./Name";
import Email from "./Email";
import Address from "./Address";
import Phone from "./Phone";
import DataTable from "./DataTable";

export default function Form() {
  const formDataInitialState = {
    email: "",
    marketingCheckBox: false,
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    country: "",
    postalCode: "",
    phoneNumber: ""
  };
  const [formData, setFromData] = useState(formDataInitialState);
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

  const stateOptionsForForm = {
    1: "contactInfo",
    2: "fullForm",
    3: "formSubmitted"
  };
  const formInitialState = stateOptionsForForm[1];
  const [formState, setFormState] = useState(formInitialState);

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

  const clearFormHandle = (event) => {
    event.preventDefault()
    setFromData(formDataInitialState)
    setFormState(formInitialState)
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (formState !== stateOptionsForForm[1] ) {
    console.log("form submitted", stateOptionsForForm[3]);
    setFormState(stateOptionsForForm[3]);
    }
  }

  useEffect(() => {
    console.log("we are using effect");
    if (
      email &&
      firstName &&
      lastName &&
      formState !== stateOptionsForForm[3]
    ) {
      setFormState(stateOptionsForForm[2]);
    }
  }, [formData, formState]);

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

        <>
          <div
            className={
              formState !== stateOptionsForForm[1]
                ? "form-fade form-fade-active"
                : "hidden form-fade"
            }
          >
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
            <button type="submit">Submit</button>
          </div>
        </>
      </form>
      {formState === "formSubmitted" ? <DataTable formData={formData} clearFormHandle={clearFormHandle} /> : null}
    </div>
  );
}
