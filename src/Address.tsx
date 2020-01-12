import React from 'react';
import { useSpring, animated } from 'react-spring';
import Emoji from './Util/Emoji';

type Props = {
	address1: string;
	address2: string;
	postalCode: string;
	country: string;
	setFormOnChangeValue: any;
};

export default function Address({
	address1,
	address2,
	postalCode,
	country,
	setFormOnChangeValue
}: Props) {
	const handleChange = (
		event:
			| React.FormEvent<HTMLInputElement>
			| React.FormEvent<HTMLSelectElement>
	) => {
		setFormOnChangeValue(event.currentTarget.name, event.currentTarget.value);
	};

	const address1Fade = useSpring({
		opacity: address1.length > 1 ? 1 : 0,
		transform: address1.length > 1 ? 'translate(3%)' : 'translateX(-7%)',
		config: { duration: 200 }
	});
	const address2Fade = useSpring({
		opacity: address1.length > 1 ? 1 : 0,
		transform: address1.length > 1 ? 'translate(3%)' : 'translateX(-7%)',
		config: { duration: 200 }
	});

	const postalCodeFade = useSpring({
		opacity: postalCode.length > 1 ? 1 : 0,
		transform: postalCode.length > 1 ? 'translate(3%)' : 'translateX(-7%)',
		config: { duration: 200 }
	});

	return (
		<>
			<h3>
			<Emoji label={'house'} symbol={'📦'} />
				Shipping Address
			</h3>
			<animated.label style={address1Fade} htmlFor="address1">
				<Emoji label={'house'} symbol={'🏠'} />
				Address
			</animated.label>
			<input
				required
				type="text"
				id="address1"
				name="address1"
				placeholder="Mailing Addy"
				value={address1}
				onChange={(e: React.FormEvent<HTMLInputElement>) => {
					e.preventDefault();
					handleChange(e);
				}}
			></input>
			<animated.label style={address2Fade} htmlFor="address2"></animated.label>
			<input
				type="text"
				id="address2"
				name="address2"
				placeholder="Apartment, suite, ect (optional)"
				value={address2}
				onChange={(e: React.FormEvent<HTMLInputElement>) => {
					e.preventDefault();
					handleChange(e);
				}}
			></input>

			<div className="flex-row">
				<div className="flex-small">
					<label htmlFor="country">
						<Emoji label={'house'} symbol={'🗺'} />
						Country
					</label>
					<select
						name="country"
						onChange={(e: React.FormEvent<HTMLSelectElement>) => {
							handleChange(e);
						}}
						value={country}
						id="country"
					>
						<option disabled>Please select</option>
						<option value="Sweden">Sweden</option>
						<option value="UnitedStates">United States</option>
						<option value="EuropeanUnion">European Union</option>
						<option value="Japan">Japan</option>
					</select>
				</div>
				<div className="flex-small">
					<animated.label style={postalCodeFade} htmlFor="postalCode">
						<Emoji label={'house'} symbol={'📬'} />
						Postal Code
					</animated.label>
					<input
						type="text"
						id="postalCode"
						name="postalCode"
						placeholder="Postal Code"
						value={postalCode}
						onChange={(e: React.FormEvent<HTMLInputElement>) => {
							e.preventDefault();
							handleChange(e);
						}}
					></input>
				</div>
			</div>
		</>
	);
}
