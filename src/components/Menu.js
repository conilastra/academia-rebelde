import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ items, navMode = false }) => {
	return items.map((item) => (
		<Link
			to={`/${item.taller}`}
			className={navMode ? 'course-list__button course-list__button--small' : 'course-list__button'}
		>
			<p className="course-list__button__text">{item.taller}</p>
		</Link>
	));
};

export default Menu;
