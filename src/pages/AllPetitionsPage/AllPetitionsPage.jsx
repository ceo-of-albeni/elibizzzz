import { useEffect, useState } from 'react';

import PetitionItem from '../../components/PetitionItem/PetitionItem';

import axios from 'axios';
import './allPetitionsPage.scss'

const AllPetitionsPage = () => {
  const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [fetching, setFetching] = useState(true);

	useEffect(() => {
		if (fetching) {
			axios
				.get('https://jsonplaceholder.typicode.com/posts')
				.then((res) => setPosts(res.data));
		}
	}, [fetching]);

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);

		return function () {
			document.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	const scrollHandler = (e) => {
		if (
			e.target.documentElement.scrollHeight -
				(e.target.documentElement.scrollTop + window.innerHeight) <
			100
		) {
			console.log('sc');
		}
	};

	return (
		<div className='all_petitions_page'>
			<div className='container'>
				<div className='petitions_filter'>
					<button>Популярные</button>
					<button>Последние</button>
					<button>Победы</button>
				</div>

				<div className='petitions_list'>
					<h2>Актуальные петиции на Eldinoyu.org</h2>
					{posts?.map((post, idx) => (
						<PetitionItem key={idx} post={post} />
					))}

					{/* {posts.map(el => console.log(el.name))} */}
					{/* {console.log(posts)} */}
				</div>
			</div>
		</div>
	);
}

export default AllPetitionsPage