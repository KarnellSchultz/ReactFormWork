import React from 'react';

export default function Address({
	address1,
	address2,
	postalCode,
	country,
	setFormOnChangeValue
}) {
	const handleChange = event => {
		setFormOnChangeValue(event.target.name, event.target.value);
	};

	return (
		<>
			<h3> <span role="img" aria-label="shippingbox"> 📦</span>Shipping Address</h3>
			<label
				className={
					address1.length > 1
						? 'transition-label  transition-label-active'
						: 'transition-label'
				}
				htmlFor="address1"
			>
				<span role="img" aria-label="home"> 🏠 </span> Address
			</label>
			<input
				required
				type="text"
        id="address1"
        name='address1'
				placeholder="Mailing Addy"
				value={address1}
				onChange={e => {
					e.preventDefault();
					handleChange(e);
				}}
			></input>
			<label
				className={
					address2.length > 1
						? 'transition-label  transition-label-active'
						: 'transition-label'
				}
				htmlFor="address2"
			></label>
			<input
				type="text"
        id="address2"
        name='address2'
				placeholder="Apartment, suite, ect (optional)"
				value={address2}
				onChange={e => {
					e.preventDefault();
					handleChange(e);
				}}
			></input>

			<div className="flex-row">
				<div className="flex-small">
					<label
						className={
							country.length > 1
								? 'transition-label  transition-label-active'
								: 'transition-label'
						}
						htmlFor="country"
					>
					<span role="img" aria-label="earth map"> 🗺</span>	Country
					</label>
					<select
          name='country'
						onChange={e => {
							e.preventDefault();
							handleChange(e);
						}}
						value={country}
						id="country"
					>
						<option disabled defaultValue>
							Please select
						</option>
						<option value="Sweden">Sweden</option>
						<option value="UnitedStates">United States</option>
						<option value="EuropeanUnion">European Union</option>
						<option value="Japan">Japan</option>
					</select>
				</div>
				<div className="flex-small">
					<label
						className={
							postalCode.length > 1
								? 'transition-label  transition-label-active'
								: 'transition-label'
						}
						htmlFor="postalCode"
					>
					<span role="img" aria-label="mailbox">📬 </span>	Postal Code
					</label>
					<input
						type="text"
            id="postalCode"
            name='postalCode'
						placeholder="Postal Code"
						value={postalCode}
						onChange={e => {
							e.preventDefault();
							handleChange(e);
						}}
					></input>
				</div>
			</div>
		</>
	);
}
