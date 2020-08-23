import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = ({ items, onClick, navMode = false }) => {
	return items.map((item) => (
		<NavLink
			to={item.link}
			className={
				navMode ? 'fade-in course-list__button course-list__button--small' : 'fade-in course-list__button'
			}
			key={item.link}
			activeClassName="navlink--active"
			onClick={onClick}
		>
			<p className="course-list__button__text">{item.taller}</p>
		</NavLink>
	));
};

export default Menu;
