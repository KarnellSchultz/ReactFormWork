import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import Name from './Name';
import Email from './Email';
import Address from './Address';
import Phone from './Phone';
import DataTable from './DataTable';
import Toggle from './Toggle';
import Modal from './Modal';

export default function Form() {
	const formDataInitialState = {
		email: '',
		marketingCheckBox: false,
		firstName: '',
		lastName: '',
		address1: '',
		address2: '',
		country: 'Sweden',
		postalCode: '',
		phoneNumber: ''
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
		1: 'contactInfo',
		2: 'fullForm',
		3: 'formSubmitted'
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

	const clearFormHandle = event => {
		event.preventDefault();
		setFromData(formDataInitialState);
		setFormState(formInitialState);
	};

	function handleSubmit(event) {
		event.preventDefault();
		if (formState !== stateOptionsForForm[1]) {
			console.log('form submitted', stateOptionsForForm[3]);
			console.log(formData);
      setFormState(stateOptionsForForm[3]);
		}
	}

	useEffect(() => {
		if (
			email &&
			firstName &&
			lastName &&
			formState !== stateOptionsForForm[3]
		) {
			setFormState(stateOptionsForForm[2]);
		}
		if (
			formState === stateOptionsForForm[2] ||
			formState === stateOptionsForForm[3]
		) {
			setIsToggle(true);
		} else {
			setIsToggle(false);
		}
	}, [formData, formState]);

	const [isToggled, setIsToggle] = useState(false);
	const fade = useSpring({
		opacity: isToggled ? 1 : 0,
		transform: isToggled ? 'translateY(0%)' : 'translateY(20%)'
	});

	return (
		<div className="small-container">
			<h1 className="vertical-center"> 📇 Karnell's Contact Form</h1>
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
				{/* <Toggle>
					{({ on, toggle }) => (
						<>
							<button onClick={toggle}>CLICK ME</button>
							{on && (
								<Modal on={on} toggle={toggle}>
									<h3>YO this is sick</h3>
								</Modal>
							)}
						</>
					)}
				</Toggle> */}

				<>
					{formState === stateOptionsForForm[2] ||
					formState === stateOptionsForForm[3] ? (
						<animated.div style={fade}>
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
							<button type="submit">Submit Form</button>
						</animated.div>
					) : null}
				</>
			</form>
			{formState === stateOptionsForForm[3] && (
					<DataTable
          formData={formData}
          clearFormHandle={clearFormHandle}/>
			)}
		</div>
	);
}
