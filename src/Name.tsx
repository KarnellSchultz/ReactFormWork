import React from 'react';
import { useSpring, animated } from 'react-spring';

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

	const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
		setFormOnChangeValue(event.currentTarget.name, event.currentTarget.value);
	};

	return (
		<div>
			<div className="flex-row">
				<animated.div style={FirstNameFade} className="flex-small">
					<label
						className={
							firstName.length > 1
								? 'transition-label transition-label-active '
								: 'transition-label'
						}
						htmlFor="firstName"
					>
						<span role="img" aria-label="smileface">
							{' '}
							😄
						</span>{' '}
						First Name
					</label>

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
					<label
						className={
							lastName.length > 1
								? 'transition-label transition-label-active'
								: 'transition-label'
						}
						htmlFor="name"
					>
						Last Name
					</label>
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
