import React from 'react';
import Menu from '../components/Menu';

const Navbar = ({ items, onClick }) => {
	return (
		<nav className="navbar">
			<Menu items={items} onClick={onClick} navMode />
		</nav>
	);
};

export default Navbar;
