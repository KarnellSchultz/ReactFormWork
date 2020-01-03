import React from "react";
import {useSpring, animated} from 'react-spring';

export default function Name({
  firstName,
  onFirstNameChange,
  lastName,
  onLastNameChange
}) {
  function handleFirstChange(event) {
    onFirstNameChange(event.target.value);
  }
  function handleLastChange(event) {
    onLastNameChange(event.target.value);
  }

  const FirstNameFade = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		from: { transform: 'translateX(-100%)' },
		to: { transform: 'translateX(0%)' }
	});
  const LastNameFade = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		from: { transform: 'translateX(100%)' },
		to: { transform: 'translateX(0%)' }
	});

  return (
    <div>
      <div className="flex-row">
        <animated.div  style={FirstNameFade} className="flex-small">
          <label
            className={
              firstName.length > 1
                ? "transition-label transition-label-active "
                : "transition-label"
            }
            htmlFor="firstName"
          >
            😄 First Name
          </label>

          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            onChange={handleFirstChange}
            value={firstName}
          />
        </animated.div>
        <animated.div style={LastNameFade} className="flex-small">
          <label
            className={
              lastName.length > 1
                ? "transition-label transition-label-active"
                : "transition-label"
            }
            htmlFor="name"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            onChange={handleLastChange}
            value={lastName}
          />
        </animated.div>
      </div>
    </div>
  );
}
