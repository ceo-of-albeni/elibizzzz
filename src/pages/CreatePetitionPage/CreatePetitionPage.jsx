import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

import FirstStep from '../../components/PetitionSteps/FirstStep';
import SecondStep from '../../components/PetitionSteps/SecondStep';

import './createPetitionPage.scss';
import ThirdStep from '../../components/PetitionSteps/ThirdStep';

const CreatePetitionPage = () => {
	const [step, setStep] = useState(1);

	const [tag, setTag] = useState('');
	const [title, setTitle] = useState('');
	const [short_desc, setShort_desc] = useState('');
	const [full_desc, setFull_desc] = useState('');

	const nextStepHandler = () => {
		setStep(step + 1);
	};

	const prevStepHandler = () => {
		setStep(step - 1);
	};

	const chooseTag = (value) => {
		setTag(value);
	};

	const chooseTitle = (value) => {
		setTitle(value);
	};

	const chooseDesc = (value) => {
		setShort_desc(value);
	};

	const handlerSubmit = () => {};

	return (
		<div className='create_petition_page'>
			<div className='container'>
				{step === 1 ? (
					<FirstStep updateTag={chooseTag} />
				) : step === 2 ? (
					<SecondStep updateTitle={chooseTitle} />
				) : step === 3 ? (
					<ThirdStep updateDesc={chooseDesc} />
				) : (
					''
				)}

				{step > 1 ? <button onClick={prevStepHandler}>Вернуться</button> : ''}
				{step < 4 ? (
					<button onClick={nextStepHandler}>Продолжить</button>
				) : (
					<button onClick={handlerSubmit}> Закончить</button>
				)}
			</div>
		</div>
	);
};

export default CreatePetitionPage;
