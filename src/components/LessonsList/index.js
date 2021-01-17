import React, {useState} from 'react';
import {Step, Lesson} from './styles';
import {BsChevronDoubleUp} from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
const LessonsList = ({title, lessons}) => {
	const [show, setShow] = useState(false);

	return(
		<>
			<Step rotate={show} onClick={() => setShow(!show)}>
				{title}
				<BsChevronDoubleUp 
					className='icon-right'
				/>
			</Step>
			{/* eslint-disable-next-line react/prop-types */}
			{lessons.map((lesson, index) => (
				<Lesson show={show} className="oi" key={`${title}-${index}`}>
					{lesson.name}
				</Lesson>
			))}
		</>
	);
};

export default LessonsList;