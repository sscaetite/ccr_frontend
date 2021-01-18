import React, {useState, useEffect} from 'react';
import Header from '../../../components/Header';
import {Title} from '../styles';
import schedules from '../../../services/schedulesAPI_MOCK';
import {Filter, ScheduleCard} from './styles';

const SchedulePage = () => {

	const [filters, setFilters] = useState([]);
	const [selectedFilter, setSelectedFilter] = useState('');
	const [options, setOptions] = useState(schedules);

	useEffect(() => {
		const newOptions = schedules.map(
			(schedule) => schedule 
		);

		setOptions(newOptions);
	}, [selectedFilter]);

	useEffect(() => {		
		const hourSet = new Set(schedules.map((schedule) => schedule.hour));
		const localSet = new Set(schedules.map((schedule) => schedule.local));
		setFilters([...hourSet, ...localSet]);
	}, []);

	return(
		<>
			<Header to='/photos'>Agendar</Header>
			<Title>Escolha um horário</Title>
			<div 
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-around'
				}}
			>
				{filters.map((filter, index) => (
					<Filter 
						key={index}
						onClick={() => setSelectedFilter(filter)}
						active={selectedFilter === filter}
					>
						{filter}
					</Filter>
				))}
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-evenly',
						marginTop: '2em'
					}}
				>
					{options.map((option, index) => (
						<ScheduleCard key={index}>
							<div className='hour'>{option.hour}</div>
							<div className='local'>{option.local}</div>
						</ScheduleCard>
					))}	
				</div>
			</div>
		</>
	);
};

export default SchedulePage;