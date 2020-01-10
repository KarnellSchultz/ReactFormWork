import { useState } from 'react';


export const Toggle = ({ children }) => {
	const initalState = {
		on: false
	};
	const [isToggled, setIsToggled] = useState(initalState);
	const toggle = ()=> {
		setIsToggled({ on: !isToggled.on });
	};
	return children({
		on: isToggled.on,
		toggle: toggle
	});
}
