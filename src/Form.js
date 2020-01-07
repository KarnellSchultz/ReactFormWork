import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import Name from './Name';
import Email from './Email';
import Address from './Address';
import Phone from './Phone';
import DataTable from './DataTable';
// import Toggle from './Toggle';
// import Modal from './Modal';
import Heading from './Heading';

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

	const [submittedFromData, setSubmittedFromData] = useState({});

	function setFormOnChangeValue(value, setValue) {
		setFromData({ ...formData, [value]: setValue });
	}

	const clearFormHandle = event => {
		event.preventDefault();
		setIsToggle(false);
		setFromData(formDataInitialState);
		setFormState(formInitialState);
		setSubmittedFromData({});
	};

	function handleSubmit(event) {
		event.preventDefault();
    setSubmittedFromData(formData);
    setFromData(formDataInitialState)

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
			<Heading />
			<form
				name="contactInformation"
				onSubmit={e => {
					handleSubmit(e);
				}}
			>
				<Email
					email={email}
					marketingCheckBox={marketingCheckBox}
					setFormOnChangeValue={setFormOnChangeValue}
				/>
				<Name
					firstName={firstName}
					lastName={lastName}
					setFormOnChangeValue={setFormOnChangeValue}
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
								setFormOnChangeValue={setFormOnChangeValue}
							/>
							<Phone
								phoneNumber={phoneNumber}
								setFormOnChangeValue={setFormOnChangeValue}
							/>
							{formState === stateOptionsForForm[3] ? (
								<button disabled className="muted-button" type="submit">
									Form Submitted
								</button>
							) : (
								<button type="submit">Submit Form</button>
							)}
						</animated.div>
					) : null}
				</>
			</form>
			{formState === stateOptionsForForm[3] && (
				<DataTable
					submittedFromData={submittedFromData}
					clearFormHandle={clearFormHandle}
				/>
			)}
		</div>
	);
}
