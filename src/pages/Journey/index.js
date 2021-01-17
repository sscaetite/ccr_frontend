import React from 'react';
import Header from '../../components/Header';
import JourneyCard from '../../components/JourneyCard';
import journey from '../../services/journeyAPI_MOCK';

const JourneyPage = () => {
	return(
		<>
			<Header>Jornada</Header>
			{journey.map((journey, index) => <JourneyCard key={index} after={index + 1}>{journey.name}</JourneyCard>)}
		</>
	);
};

export default JourneyPage;