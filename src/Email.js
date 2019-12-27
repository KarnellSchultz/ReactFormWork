import React from "react";

export default function Email({
  email,
  onEmailChange,
  marketingCheckBox,
  onMarketingCheckBoxChange
}) {
  function handleEmailChange(event) {
    onEmailChange(event.target.value);
  }
  function handleMarketingCheckBox(event) {
    onMarketingCheckBoxChange(event.target.value);
  }

  return (
    <>
      <label htmlFor="emailAddress">Email</label>
      <input
        type="email"
        className="form-control"
        name=""
        id="emailAddress"
        aria-describedby="emailHelpId"
        placeholder="Nellzus@mailing.com"
        onChange={handleEmailChange}
        value={email}
      ></input>
      <small id="emailHelpId" className="form-text text-muted">
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

// function ValidateEmail(mail) {
//   if (
//     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)
//   ) {
//     return true;
//   }
//   alert("You have entered an invalid email address!");
//   return false;
// }
