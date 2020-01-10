import React from "react";

type Props = {
  phoneNumber: string;
  setFormOnChangeValue: (name: string, value: string) => void
}

export default function Phone({ phoneNumber, setFormOnChangeValue }: Props) {

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
		return setFormOnChangeValue(event.currentTarget.name, event.currentTarget.value);
  };
  
  return (
    <>
      <label
        className={
          phoneNumber.length > 1
            ? "transition-label  transition-label-active"
            : "transition-label"
        }
        htmlFor="phone"
      >
       <span role="img" aria-label="phone">☎️  </span> Phone Number
      </label>
      <input
        type="tel"
        id="phone"
        name='phoneNumber'
        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="Phone Number"
        onChange={e => {
          e.preventDefault();
          handleChange(e)
        }}
        value={phoneNumber}
      ></input>
    </>
  );
}
