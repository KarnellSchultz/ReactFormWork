import React from "react";

export default function Address() {
  return (
    <>
    <h1>Shipping Address</h1>
      <label htmlFor="address1">Address</label>
      <input type="text" id="address1" placeholder="Mailing Addy"></input>
      <label htmlFor="address2"></label>
      <input
        type="text"
        id="address2"
        placeholder="Apartment, suite, ect (optional)"
      ></input>

      <div className="flex-row">
        <div className="flex-small">
          <label htmlFor="country">Country</label>
          <select id="country">
            <option disabled defaultValue>
              Please select
            </option>
            <option value="Sweden">
              Sweden
            </option>
            <option value="UnitedStates">United States</option>
            <option value="EuropeanUnion">European Union</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
        <div className="flex-small">
          <label htmlFor="postCode">Postal Code</label>
          <input type="text" id="postCode" placeholder="Postal Code"></input>
        </div>
      </div>
    </>
  );
}
