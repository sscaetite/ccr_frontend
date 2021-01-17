import {JourneyContainer} from './styles';

const JourneyCard = ({children, after, ...props}) => {
	return(
		<JourneyContainer after={after} {...props}>{children}</JourneyContainer>
	);
};

export default JourneyCard;