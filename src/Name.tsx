import React from 'react';
import { useSpring, animated } from 'react-spring';
import Emoji from './Util/Emoji';

type Props = {
	firstName: string;
	lastName: string;
	setFormOnChangeValue: (name: string, value: string) => void;
};

export default function Name({
	firstName,
	lastName,
	setFormOnChangeValue
}: Props) {
	const FirstNameFade = useSpring({
		from: { opacity: 0, transform: 'translateX(-100%)' },
		to: { opacity: 1, transform: 'translateX(0%)' },
		config: { duration: 500 }
	});
	const LastNameFade = useSpring({
		from: { opacity: 0, transform: 'translateX(100%)' },
		to: { opacity: 1, transform: 'translateX(0%)' },
		config: { duration: 500 }
	});

	const labelTextFadeFirstName = useSpring({
		opacity: firstName.length > 1 ? 1 : 0,
		transform: firstName.length > 1 ? 'translate(3%)' : 'translateX(-7%)',
		config: { duration: 200 }
	});
	const labelTextFadeLastName = useSpring({
		opacity: lastName.length > 1 ? 1 : 0,
		transform: lastName.length > 1 ? 'translate(3%)' : 'translateX(-7%)',
		config: { duration: 200 }
	});

	const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
		setFormOnChangeValue(event.currentTarget.name, event.currentTarget.value);
	};

	return (
		<div>
			<div className="flex-row">
				<animated.div style={FirstNameFade} className="flex-small">
					<animated.label style={labelTextFadeFirstName} htmlFor="firstName">
						<Emoji label={'smileface'} symbol={'😄'}  />
						First Name
					</animated.label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						placeholder="First Name"
						onChange={(e: React.FormEvent<HTMLInputElement>) => {
							e.preventDefault();
							handleChange(e);
						}}
						value={firstName}
					/>
				</animated.div>
				<animated.div style={LastNameFade} className="flex-small">
					<animated.label style={labelTextFadeLastName} htmlFor="name">
						<Emoji label={'whoknows'} symbol={'👷🏽‍♀️'} />
						Last Name
					</animated.label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						placeholder="Last Name"
						onChange={(e: React.FormEvent<HTMLInputElement>) => {
							e.preventDefault();
							handleChange(e);
						}}
						value={lastName}
					/>
				</animated.div>
			</div>
		</div>
	);
}
