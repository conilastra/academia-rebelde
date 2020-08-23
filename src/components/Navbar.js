import React from 'react';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';

const Navbar = ({ items, onClick }) => {
	return (
		<nav className="navbar">
			<Menu items={items} onClick={onClick} navMode />
			<section className="buttons">
				<a
					className="button--shape--yellow"
					href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEFpkeZ2yw&#x2F;view?utm_content=DAEFpkeZ2yw&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
					target="_blank"
				>
					<p className="button--shape__text">Calendario</p>
				</a>
				<a
					className="button--shape--yellow"
					href="https://docs.google.com/forms/d/e/1FAIpQLSfS7G78FFL0tJY8YRQAAx0ySNtIPh1WNGxGgIoAS98hcMZ8yA/viewform?usp=sf_link"
					target="_blank"
				>
					<p className="button--shape__text">Inscripción</p>
				</a>
			</section>
		</nav>
	);
};

export default Navbar;
