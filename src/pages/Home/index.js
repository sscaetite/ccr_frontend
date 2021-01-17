import React from 'react';
import {Card, CardsContainer, Title, Icon, MainCard} from './styles';
import logo from '../../assets/vector/via_perifa_logo.svg';
import {GiJourney} from 'react-icons/gi';
import {
	FaChessKnight,
	FaMapMarkedAlt,
	// FaStore,
	FaBookmark
} from 'react-icons/fa';
import {MdPhotoLibrary} from 'react-icons/md';

const HomePage = () => {
	return (
		<div>
			<MainCard>
				<img src={logo} alt="Via Perifa Logo" />
				<div>
					<h2>Olá,</h2>
					<h1>{localStorage.getItem('user')}!</h1>
				</div>
			</MainCard>
			<CardsContainer>
				<Card to='/journey'>
					<Icon><GiJourney /></Icon>
					<Title>Jornada</Title>
				</Card>

				<Card to='/progress'>
					<Icon><FaChessKnight /></Icon>
					<Title>Progresso</Title>
				</Card>

				<Card to='/'>
					<Icon size='3.6em'><FaBookmark /></Icon>
					<Title>Referências</Title>
				</Card>

				<Card to='/'>
					<Icon><FaMapMarkedAlt /></Icon>
					<Title>Indicações</Title>
				</Card>

				<Card to='/photos'>
					<Icon><MdPhotoLibrary /></Icon>
					<Title>Fotos</Title>
				</Card>
			</CardsContainer>
		</div>
	);
};

export default HomePage;