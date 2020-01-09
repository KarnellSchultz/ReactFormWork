import React from 'react';
import ClearFormButton from './ClearFormButton';
import { useSpring, animated } from 'react-spring';

export default function DataTable({ submittedFromData, clearFormHandle }) {
	const tableFade = useSpring({
		from: { opacity: 0 , transform: 'translateY(20%)' },
		to: { opacity: 1, transform: 'translateY(0%)' }
	});

	 function rows(submittedFromData) {
	let keys = Object.keys(submittedFromData);
		return keys.map((element, index) => {
			return (
				<tr key={index}>
					<td>{element}:</td>
					<td>{submittedFromData[element].toString()}</td>
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
				<tbody>{rows(submittedFromData)}</tbody>
			</table>
			<ClearFormButton clearFormHandle={clearFormHandle} />
		</animated.div>
	);
}
