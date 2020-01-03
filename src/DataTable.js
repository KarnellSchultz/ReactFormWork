import React from 'react';
import ClearFormButton from './ClearFormButton';
import { useSpring, animated } from 'react-spring';

export default function DataTable({ formData, clearFormHandle }) {
	const tableFade = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		from: { transform: 'translateY(20%)' },
		to: { transform: 'translateY(0%)' }
	});

	function rows(formData) {
		let keys = Object.keys(formData);
		return keys.map((element, index) => {
			return (
				<tr key={index}>
					<td>{element}:</td>
					<td>{formData[element].toString()}</td>
				</tr>
			);
		});
	}

	return (
		<animated.div style={tableFade}>
			<table className="striped-table">
				<thead>
					<tr>
						<th>User Submitted Information</th>
					</tr>
				</thead>
				<tbody>{rows(formData)}</tbody>
			</table>
			<ClearFormButton clearFormHandle={clearFormHandle} />
		</animated.div>
	);
}
