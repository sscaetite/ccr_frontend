import {JourneyContainer} from './styles';

const JourneyCard = ({children, ...props}) => {
	return(
		<JourneyContainer {...props}>{children}</JourneyContainer>
	);
};

export default JourneyCard;