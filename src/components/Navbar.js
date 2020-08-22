import React from 'react';
import Menu from '../components/Menu';

const Navbar = ({ items, navMode }) => {
	return (
		<nav className="navbar">
			<Menu items={items} navMode={navMode} />
		</nav>
	);
};

export default Navbar;
