import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function ClearFormButton({ clearFormHandle }) {
	const buttonBump = useSpring({
		from: { transform: 'translateX(-80%)' },
		to: { transform: 'translateX(0%)' }
	});
	return (
		<animated.div style={buttonBump}>
			<button onClick={clearFormHandle} className="accent-button">
				Clear/Reset Form
			</button>
		</animated.div>
	);
}
