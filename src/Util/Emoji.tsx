import React from 'react';

type Props = {
	label: string;
	symbol: any;
};

const Emoji = ({ label, symbol }: Props) => (
	<span
		className="emoji"
		role="img"
		aria-label={label ? label : ''}
		aria-hidden={label ? 'false' : 'true'}>
		{symbol}&nbsp;
	</span>
);

export default Emoji;
