import React from 'react';
import {JourneyContainer} from './styles';

// eslint-disable-next-line react/prop-types
const JourneyCard = ({children, after, ...props}) => {
	return(
		<JourneyContainer after={after} {...props}>{children}</JourneyContainer>
	);
};

export default JourneyCard;