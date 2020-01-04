import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Heading() {
	const HeadingFadeIn = useSpring({
		from: { opacity: .80 },
		to: { opacity: 1 },
		from: { transform: 'translateY(-90%)' },
		to: { transform: 'translateY(0%)' }
	});

	return (
		<>
			<animated.h1 style={HeadingFadeIn} className="vertical-center">
				{' '}
				📇 Karnell's Contact Form
			</animated.h1>
		</>
	);
}
