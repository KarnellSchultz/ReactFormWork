import React from 'react';
import { useSpring, animated } from 'react-spring';
import  Emoji from './Util/Emoji'

export default function Heading() {
	const HeadingFadeIn = useSpring({
		from: { opacity: .5, transform: 'translateY(-120%)' },
		to: { opacity: 1, transform: 'translateY(0%)' },
		config: {duration: 500},
	});
	return (
		<>
			<animated.h1 style={HeadingFadeIn} className="vertical-center">
				<Emoji label={'Contact'} symbol={'📇'} />
				Contact Form
			</animated.h1>
		</>
	);
}
