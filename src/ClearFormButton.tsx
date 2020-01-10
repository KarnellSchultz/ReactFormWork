import React from 'react';
import { useSpring, animated } from 'react-spring';

type Props = {
	clearFormHandle: (event: React.FormEvent<HTMLButtonElement>) => void;
}

export default function ClearFormButton({ clearFormHandle }: Props) {
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
