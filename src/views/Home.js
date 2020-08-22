import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

import Spinner from '../components/Spinner';
import Menu from '../components/Menu';
import Header from '../components/Header';

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

	return (
		<main>
			<Header />
			<section className="course-list">{courses.length > 0 ? <Menu items={courses} /> : <Spinner />}</section>
			<footer className="footer">
				<button className="button button--shape">Inscripciones</button>
			</footer>
		</main>
	);
};

export default Home;
