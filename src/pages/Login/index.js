import React from 'react';
import logo from '../../assets/vector/via_perifa_logo.svg';
import {Input, MainContainer, FormLogin, Divider, Button} from './styles';

const LoginPage = () => {
	return(
		<MainContainer>
			<FormLogin>
				<img src={logo} alt='Via Perifa logo' />
				<Input 
					placeholder='seu nome'
					onChange={(e)=>localStorage.setItem('user', e.target.value)}
				/>
				<Divider />
				<Input placeholder='sua senha' type='password' />
				<Button to='/'>Login</Button>
			</FormLogin>
		</MainContainer>
	);
};

export default LoginPage;