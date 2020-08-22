import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

import Spinner from '../components/Spinner';

const Home = () => {
	const [ courses, setCourses ] = useState([]);

	const test = courses.map((course) => course.taller);

	useEffect(() => {
		axios
			.get('https://v2-api.sheety.co/ae60fd15782508292e58f110b167e0bd/academiaRebeldeSeptiembre/septiembre')
			.then((resp) => {
				setCourses(resp.data.septiembre);
			});
	}, []);

	const renderButtons = (list) => {
		return list.map((listItem) => (
			<div className="course-list__button">
				<p className="course-list__button__text">{listItem.taller}</p>
			</div>
		));
	};

	return (
		<main>
			<header className="header">
				<h1 className="header__title">ACADEMIA REBELDE</h1>
				<h2 className="header__subtitle">septiembre</h2>
			</header>

			<section className="course-list">{courses.length > 0 ? renderButtons(courses) : <Spinner />}</section>
		</main>
	);
};

export default Home;
