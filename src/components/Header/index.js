import {HeaderContainer} from './style';
import React from 'react';
import {IoChevronBack} from 'react-icons/io5';
import {Link} from 'react-router-dom';

const styleIcon = {position: 'absolute', left: 0, top: 0, padding: 30};

// eslint-disable-next-line react/prop-types
const Header = ({children, to}) => {
	return(
		<HeaderContainer>
			<Link style={{margin: 0, padding: 0}} to={to || '/'}><IoChevronBack style={styleIcon} /></Link>
			{children}
		</HeaderContainer>
	);
};

export default Header;