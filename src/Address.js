import React from "react";

export default function Address({
  address1,
  address2,
  postalCode,
  country,
  onAddress1Change,
  onAddress2Change,
  onPostalCodeChange,
  onCountryChange
}) {
  function handleAddress1Change(event) {
    onAddress1Change(event.target.value);
  }
  function handleAddress2Change(event) {
    onAddress2Change(event.target.value);
  }
  function handlePostalCodeChange(event) {
    onPostalCodeChange(event.target.value);
  }
  function handleCountryChange(event) {
    onCountryChange(event.target.value);
  }

  return (
    <>
      <h3> 📦Shipping Address</h3>
      <label
        className={
          address1.length > 1
            ? "transition-label  transition-label-active"
            : "transition-label"
        }
        htmlFor="address1"
      >
         🏠Address
      </label>
      <input
      required
        type="text"
        id="address1"
        placeholder="Mailing Addy"
        value={address1}
        onChange={handleAddress1Change}
      ></input>
      <label
        className={
          address2.length > 1
            ? "transition-label  transition-label-active"
            : "transition-label"
        }
        htmlFor="address2"
      ></label>
      <input
        type="text"
        id="address2"
        placeholder="Apartment, suite, ect (optional)"
        value={address2}
        onChange={handleAddress2Change}
      ></input>

      <div className="flex-row">
        <div className="flex-small">
          <label
            className={
              country.length > 1
                ? "transition-label  transition-label-active"
                : "transition-label"
            }
            htmlFor="country"
          >
              🗺Country
          </label>
          <select onChange={handleCountryChange} value={country} id="country">
            <option disabled defaultValue>
              Please select
            </option>
            <option value="Sweden">Sweden</option>
            <option value="UnitedStates">United States</option>
            <option value="EuropeanUnion">European Union</option>
            <option value="Japan">Japan</option>
          </select>
        </div>
        <div className="flex-small">
          <label
            className={
              postalCode.length > 1
                ? "transition-label  transition-label-active"
                : "transition-label"
            }
            htmlFor="postalCode"
          >
             📬Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            placeholder="Postal Code"
            value={postalCode}
            onChange={handlePostalCodeChange}
          ></input>
        </div>
      </div>
    </>
  );
}

