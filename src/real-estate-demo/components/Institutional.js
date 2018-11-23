import React from 'react';
import {
	ComponentWrapper,
	Title,
	CustomHr
} from './styles';

const data = {
	title: 'Institucional',
	body: [
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
	]
};

const Institutional = () => (
	<ComponentWrapper>
		<Title>{data.title}</Title>
		<CustomHr />
		{
			data.body.map((paragraph, ix) => {
				const key = `institutional-text-${ix}`;
				return <p key={key}>{paragraph}</p>;
			})
		}
	</ComponentWrapper>
);

export default Institutional;
