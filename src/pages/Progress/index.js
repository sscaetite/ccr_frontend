import React, {useEffect, useState} from 'react';
import {RiCoinsLine} from 'react-icons/ri';
import Header from '../../components/Header';
import {
	CircularGradient,
	ProgressContainer,
	Name,
	Detail,
	Balance
} from './styles';
import journey from '../../services/journeyAPI_MOCK';

const ProgressPage = () => {
	const [finished,  setFinished] = useState([]);
	const [notFinished,  setNotFinished] = useState([]);

	useEffect(() => {
		const alreadFinished = journey.map(
			(step) => step.lessons.map((lesson) => lesson.isDone && lesson));
		const yetNotFinished = journey.map(
			(step) => step.lessons.map((lesson) => !lesson.isDone && lesson));
		setFinished(alreadFinished.flat(Infinity));
		setNotFinished(yetNotFinished.flat(Infinity));
	}, []);

	return (
		<>
			<Header right={{to: '/progress/highscores'}}>Seu progresso</Header>
			<ProgressContainer>
				<CircularGradient
					percent={54}
					// eslint-disable-next-line max-len
					url='https://cdn.pixabay.com/photo/2017/11/02/20/31/guitars-2912447__340.jpg'
				>
					<div>
						<div>2</div>
					</div>
				</CircularGradient>
				<Name>Nicolly</Name>
				<Detail>São Paulo - SP</Detail>
				<Balance><RiCoinsLine /> 500</Balance>
			</ProgressContainer>
			{finished.map((lesson, index) => (
				<h2 key={index}>{lesson.name}</h2>
			))}
			{notFinished.map((lesson, index) => (
				<h2 key={index}>{lesson.name}</h2>
			))}
		</>
	);
};

export default ProgressPage;