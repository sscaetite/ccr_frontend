import {HeaderContainer} from "./style";
import {IoChevronBack} from 'react-icons/io5';
import {Link} from "react-router-dom";

const styleIcon = {position: 'absolute', left: 0, top: 0, padding: 30};

const Header = ({children}) => {
	return(
		<HeaderContainer>
			<Link style={{margin: 0, padding: 0}} to='/'><IoChevronBack style={styleIcon} /></Link>
			{children}
		</HeaderContainer>
	);
};

export default Header;