import React, {useState} from 'react';
import Header from '../../components/Header';
import {Selector, Place, PlacesContainer} from './styles';
import places from '../../services/placesAPI_MOCK';

const IndicationsPage = () => {

	const [active, setActive] = useState(0);

	return(
		<>
			<Header>Indicações</Header>
			<Selector active={active}>
				<h4 
					style={{color: active === 0 && 'white'}}
					onClick={() => setActive(0)}
				>Fornecedores</h4>
				<h4 
					style={{color: active === 1 && 'white'}}
					onClick={() => setActive(1)}
				>Espaço Maker</h4>
			</Selector>
			<PlacesContainer>
				{places.map((place, index) => place.type ===  active && (
					<Place key={index} url={place.url}>
						<div />
						<h5>{place.name}</h5>
					</Place>
				))}
			</PlacesContainer>
		</>
	);
};

export default IndicationsPage;