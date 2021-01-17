import React, {useState} from 'react';
import Header from '../../components/Header';
import {Selector} from './styles';

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
		</>
	);
};

export default IndicationsPage;