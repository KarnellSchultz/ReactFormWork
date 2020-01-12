import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Emoji from './Util/Emoji'

type Props = {
	email: string;
	marketingCheckBox: boolean;
	setFormOnChangeValue: any;
};

export default function Email({
	email,
	marketingCheckBox,
	setFormOnChangeValue
}: Props) {

	const [errors, setErrors] = useState({});

	function handleBlur(event: React.FormEvent<HTMLFormElement>) {
		if (ValidateEmail(event.currentTarget.value) === false) {
			console.log('errors');
		}
	}
	function ValidateEmail(emailInput: string) {
		// eslint-disable-next-line no-useless-escape
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
			setErrors({}); //setting error object to empty
			return true;
		} else {
			setErrors({ ...errors, email: 'invalid email' });
			return false;
		}
	}

	const handleChange = (event: React.FormEvent<HTMLInputElement>): any => {
		return setFormOnChangeValue(
			event.currentTarget.name,
			event.currentTarget.value
		);
	};
	const handleCheckboxChange = (
		event: React.FormEvent<HTMLInputElement>
	): any => {
		return setFormOnChangeValue(event.currentTarget.name, !marketingCheckBox);
	};

	const labelTextFade = useSpring({
		opacity: email.length > 1 ? 1 : 0,
		transform: email.length > 1 ? 'translate(3%)' : 'translateX(-7%)',
		config: { duration: 200 }
	});


	return (
		<>
			<animated.label style={labelTextFade} htmlFor="emailAddress">
				<Emoji label={'email' } symbol={'✉️'}  /> 
				E-mail
			</animated.label>
			<input
				type="email"
				className={Object.keys(errors).length > 0 ? 'has-error ' : 'is-success'}
				name="email"
				id="emailAddress"
				aria-describedby="emailHelpId"
				placeholder="E-mail"
				onChange={(e: React.FormEvent<HTMLInputElement>) => {
					e.preventDefault();
					handleChange(e);
				}}
				onBlur={(e: React.FormEvent) => handleBlur}
				value={email}
			></input>
			<small id="emailHelpId " className="form-text text-muted">
				<label>
					<input
						name="marketingCheckBox"
						type="checkbox"
						value={marketingCheckBox.toString()}
						onClick={(e: React.FormEvent<HTMLInputElement>) =>
							handleCheckboxChange
						}
					></input>
					&nbsp; Keep me up to date with marketing stuff
				</label>
			</small>
		</>
	);
}
