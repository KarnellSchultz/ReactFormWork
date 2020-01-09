import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Heading() {
	const HeadingFadeIn = useSpring({
		from: { opacity: .80, transform: 'translateY(-90%)' },
		to: { opacity: 1, transform: 'translateY(0%)' }
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
