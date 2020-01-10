import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Name({ firstName, lastName, setFormOnChangeValue }) {
	const FirstNameFade = useSpring({
		from: { opacity: 0, transform: 'translateX(-100%)' },
		to: { opacity: 1, transform: 'translateX(0%)' },
		config: {duration: 500},
	});
	const LastNameFade = useSpring({
		from: { opacity: 0, transform: 'translateX(100%)' },
		to: { opacity: 1, transform: 'translateX(0%)' },
		config: {duration: 500},

	});

	const handleChange = event => {
		setFormOnChangeValue(event.target.name, event.target.value);
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
						onChange={e => {
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
						onChange={e => {
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
