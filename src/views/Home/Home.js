import React from 'react';

import 'react-calendar/dist/Calendar.css';
import './Home.css';

import Spinner from '../../components/Spinner';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

const Home = ({ items }) => {
	return (
		<main>
			<Header />
			<section className="course-list">{items.length > 0 ? <Menu items={items} /> : <Spinner />}</section>
			<footer className="footer">
				<Link to="/formulario" className="button button--shape button--main">
					<span>Inscríbete</span>
				</Link>
				<Link to="/calendario" className="link">
					<p className="small">
						<span className="material-icons">event</span>
						<span>Ver calendario</span>
					</p>
				</Link>
			</footer>
		</main>
	);
};

export default Home;
