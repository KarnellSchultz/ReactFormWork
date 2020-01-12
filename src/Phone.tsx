import React from 'react';
import { useSpring, animated } from 'react-spring';
import Emoji from './Util/Emoji';

type Props = {
	phoneNumber: string;
	setFormOnChangeValue: (name: string, value: string) => void;
};

export default function Phone({ phoneNumber, setFormOnChangeValue }: Props) {
	const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
		return setFormOnChangeValue(
			event.currentTarget.name,
			event.currentTarget.value
		);
	};

	const phoneNumberAnimated = useSpring({
		opacity: phoneNumber.length > 1 ? 1 : 0,
		transform: phoneNumber.length > 1 ? 'translate(3%)' : 'translateX(-7%)',
		config: { duration: 200 }
	});

	return (
		<>
			<animated.label style={phoneNumberAnimated} htmlFor="phone">
    <Emoji label={'phone'} symbol={'☎️'} />
				Phone Number
			</animated.label>
			<input
				type="tel"
				id="phone"
				name="phoneNumber"
				// pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
				placeholder="Phone Number"
				onChange={e => {
					e.preventDefault();
					handleChange(e);
				}}
				value={phoneNumber}
			></input>
		</>
	);
}
