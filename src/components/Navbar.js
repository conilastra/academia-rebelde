import React from 'react';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';

const Navbar = ({ items, onClick }) => {
	return (
		<nav className="navbar">
			<Link to="/" className="logo" />
			<Menu items={items} onClick={onClick} navMode />
		</nav>
	);
};

export default Navbar;
