import React, { useState } from "react";

export default function Email({
  email,
  onEmailChange,
  marketingCheckBox,
  onMarketingCheckBoxChange
}) {
  const [errors, setErrors] = useState({});

  function handleEmailChange(event) {
    onEmailChange(event.target.value);
  }
  function handleMarketingCheckBox(event) {
    onMarketingCheckBoxChange(event.target.value);
  }
  function handleBlur(event) {
    if (ValidateEmail(event.target.value) === false) {
      console.log("errors");
    }
  }
  function ValidateEmail(emailInput) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
      setErrors({}); //setting error object to empty
      return true;
    } else {
      setErrors({ ...errors, email: "invalid email" });
      return false;
    }
  }

  return (
    <>
      <label
        className={
          email.length >= 1
            ? "transition-label  transition-label-active"
            : "transition-label"
        }
        htmlFor="emailAddress"
      >
         📧E-mail
      </label>
      <input
        type="email"
        className={Object.keys(errors).length > 0 ? "has-error " : "is-success"}
        name="email"
        id="emailAddress"
        aria-describedby="emailHelpId"
        placeholder="E-mail"
        onChange={handleEmailChange}
        onBlur={handleBlur}
        value={email}
      ></input>
      <small id="emailHelpId " className="form-text text-muted">
        <label>
          <input
            value={marketingCheckBox}
            onChange={handleMarketingCheckBox}
            type="checkbox"
          ></input>
          &nbsp; Keep me up to date with marketing stuff
        </label>
      </small>
    </>
  );
}
