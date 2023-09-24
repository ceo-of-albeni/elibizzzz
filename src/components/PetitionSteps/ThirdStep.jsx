import React, { useState } from 'react';

import './petitionStep.scss';

const ThirdStep = ({ updateDesc }) => {
	const changeHandlerInput = (e) => {
		updateDesc(e.target.innerText);
	};

	return (
		<div className='petition_step'>
			<h2>Short description </h2>
			<form action=''>
				<label htmlFor=''>Заголовок петиции</label>
				<input type='text' onChange={changeHandlerInput} />
			</form>
		</div>
	);
};

export default ThirdStep;
