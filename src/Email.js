import React, { useState } from 'react';

export default function Email({
	email,
	marketingCheckBox,
	setFormOnChangeValue
}) {
	const [errors, setErrors] = useState({});

	function handleBlur(event) {
		if (ValidateEmail(event.target.value) === false) {
			console.log('errors');
		}
	}
	function ValidateEmail(emailInput) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
			setErrors({}); //setting error object to empty
			return true;
		} else {
			setErrors({ ...errors, email: 'invalid email' });
			return false;
		}
	}

	const handleChange = event => {
		setFormOnChangeValue(event.target.name, event.target.value);
  };
  const handleCheckboxChange = event => {
    setFormOnChangeValue(event.target.name, !marketingCheckBox)
  }

	return (
		<>
			<label
				className={
					email.length >= 1
						? 'transition-label  transition-label-active'
						: 'transition-label'
				}
				htmlFor="emailAddress"
			>
				<span role="img" aria-label="emailemoji">📧 </span>E-mail
			</label>
			<input
				type="email"
				className={Object.keys(errors).length > 0 ? 'has-error ' : 'is-success'}
				name="email"
				id="emailAddress"
				aria-describedby="emailHelpId"
				placeholder="E-mail"
				onChange={e => {
					e.preventDefault();
					handleChange(e);
				}}
				onBlur={handleBlur}
				value={email}
			></input>
			<small id="emailHelpId " className="form-text text-muted">
				<label>
					<input
						name="marketingCheckBox"
						value={marketingCheckBox}
            onClick={e => {
              handleCheckboxChange(e)
            }} 
						type="checkbox"
					></input>
					&nbsp; Keep me up to date with marketing stuff
				</label>
			</small>
		</>
	);
}
