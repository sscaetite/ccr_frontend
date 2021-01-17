import React from 'react';
import Header from '../../components/Header';
import {CircularGradient, ProgressContainer} from './styles';

const ProgressPage = () => {
	return(
		<>
			<Header right={{to: '/progress/highscores'}}>Seu progresso</Header>
			<ProgressContainer>
				<CircularGradient percent={54} url='https://cdn.pixabay.com/photo/2017/11/02/20/31/guitars-2912447__340.jpg'>
					<div>
						<div>2</div>
					</div>
				</CircularGradient>
			</ProgressContainer>
		</>
	);
};

export default ProgressPage;