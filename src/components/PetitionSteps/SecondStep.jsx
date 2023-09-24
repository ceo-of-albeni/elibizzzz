import React from 'react';

import './petitionStep.scss'

const SecondStep = ({ updateTitle }) => {
	const changeHandlerInput = (e) => {
		updateTitle(e.target.value)
	};

	return (
		<div className='petition_step'>
			<h2>Напишите заголовок петиции</h2>
			<form action=''>
				<label htmlFor=''>Заголовок петиции</label>
				<input type='text' onChange={changeHandlerInput} />
			</form>
		</div>
	);
};

export default SecondStep;
