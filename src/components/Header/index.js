import {HeaderContainer} from './style';
import React from 'react';
import {IoChevronBack} from 'react-icons/io5';
import {BiTrophy} from 'react-icons/bi';
import {Link} from 'react-router-dom';

const styleIcon = {position: 'absolute', left: 0, top: 0, padding: 30};
const styleRight = {position: 'absolute', right: 0, top: 0, padding: 30};

// eslint-disable-next-line react/prop-types
const Header = ({children, to, right}) => {
	return(
		<HeaderContainer>
			<Link style={{margin: 0, padding: 0}} to={to || '/'}>
				<IoChevronBack style={styleIcon} />
			</Link>
			{children}
			{right && (
				// eslint-disable-next-line react/prop-types
				<Link style={{margin: 0, padding: 0}} to={right.to}>
					<BiTrophy style={styleRight} />
				</Link>
			)}
		</HeaderContainer>
	);
};

export default Header;