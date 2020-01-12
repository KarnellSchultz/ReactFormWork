import React from 'react';
import ClearFormButton from './ClearFormButton';
import { useSpring, animated } from 'react-spring';

type Props = {
	submittedFromData: {} | {
		email: string
		marketingCheckBox:string;
		firstName:string;
		lastName:string;
		address1:string;
		address2:string;
		country: string;
		postalCode: string;
		phoneNumber: string 	};
	clearFormHandle: (event: React.FormEvent<HTMLButtonElement>) => void;
}

export default function DataTable({ submittedFromData, clearFormHandle }: Props ) {
	const tableFade = useSpring({
		from: { opacity: 0 , transform: 'translateY(50%)' },
		to: { opacity: 1, transform: 'translateY(0%)' },
	config: {duration: 680}
	});

	 function rows(submittedFromData: any) {
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
						<th></th>
					</tr>
				</thead>
				<tbody>{rows(submittedFromData)}</tbody>
			</table>
			<ClearFormButton clearFormHandle={clearFormHandle} />
		</animated.div>
	);
}

