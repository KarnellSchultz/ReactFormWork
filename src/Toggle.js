import { useState } from 'react';

export default function Toggle({ children }) {
    const initalState = {
        on: false
    }
	const [isToggled, setIsToggled] = useState(initalState);
	const toggle = () => {

		setIsToggled({on: !isToggled.on} );
	};
	return children ({
        on: isToggled.on,
        toggle: toggle
    }
	);
}
