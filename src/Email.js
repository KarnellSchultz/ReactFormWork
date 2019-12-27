import React from "react";

export default function Email({email, onEmailChange}) {

    function handleEmailChange(event) {
        onEmailChange(event.target.value)
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
          <input type="checkbox"></input>
          Keep me up to date with marketing stuff
        </label>
      </small>
    </>
  );
}
