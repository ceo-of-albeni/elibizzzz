import React, { useState } from 'react';

import './petitionStep.scss';

const tags = ['Здоровье', 'Окружающая среда', 'Политика'];

const FirstStep = ({ updateTag }) => {
	const chooseTag = (e) => {
		updateTag(e.target.innerText);
	};

	return (
		<div className='petition_step'>
			<h2>first </h2>

			{tags.map((el, idx) => (
				<button key={idx} onClick={chooseTag}>
					{el}
				</button>
			))}
		</div>
	);
};

export default FirstStep;
