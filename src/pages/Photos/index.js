import React from 'react';
import Header from '../../components/Header';
import {Title, Button, Icon} from './styles';
import {BiPhotoAlbum, BiCalendarStar} from 'react-icons/bi';

const PhotosPage = () => {
	return (
		<>
			<Header>Fotos</Header>
			<Title>O que você gostaria de fazer?</Title>
			<Button to='/photos/gallery'>
				<Icon>
					<BiPhotoAlbum/>
				</Icon>
				<div style={{position: 'relative'}}>
					Ver sua galeria de fotos
				</div>
			</Button>
			<Button to='/photos/schedule'>
				<Icon>
					<BiCalendarStar />
				</Icon>
				<div style={{position: 'relative'}}>
					Agendar uma sessão de fotos
				</div>
			</Button>
		</>
	);
};

export default PhotosPage;