import React from "react";
import ClearFormButton from "./ClearFormButton";
import { useSpring, animated } from "react-spring";

export default function DataTable({ formData, clearFormHandle }) {
  const tableFade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    from: { transform: "translateY(20%)" },
    to: { transform: "translateY(0%)" }
  });

  return (
    <animated.div style={tableFade}>
      <table className="striped-table">
        <thead>
          <tr>
            <th>Info</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{formData.firstName}</td>
            <td>{formData.lastName}</td>
          </tr>
          <tr>
            <td>E-mail:</td>
            <td>{formData.email}</td>
            <td>Marketing?{formData.marketingCheckBox.toString()}</td>
          </tr>
          <tr>
            <td>Address 1:</td>
            <td>{formData.address1}</td>
            <td>{formData.postalCode}</td>
          </tr>
          <tr>
            <td>Address 2:</td>
            <td>
              {formData.address2 !== "" ? formData.address2 : "no apt data"}
            </td>
            <td>{formData.country}</td>
          </tr>
        </tbody>
      </table>
      <ClearFormButton clearFormHandle={clearFormHandle} />
    </animated.div>
  );
}
