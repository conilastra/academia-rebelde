import React from 'react';
import './Home.css';

import Spinner from '../../components/Spinner';
import Menu from '../../components/Menu';
import Header from '../../components/Header';

const Home = ({ items }) => {
	return (
		<main>
			<Header />
			<section className="course-list">{items.length > 0 ? <Menu items={items} /> : <Spinner />}</section>
			<footer className="footer">
				<button className="button button--shape button--main">
					<span>Inscríbete</span>
				</button>
				<a
					className="link"
					href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEFpkeZ2yw&#x2F;view?utm_content=DAEFpkeZ2yw&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span className="material-icons">event</span>
					<span>Ver calendario</span>
				</a>
			</footer>
		</main>
	);
};

export default Home;
