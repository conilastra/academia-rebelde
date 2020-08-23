import React from 'react';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom';
import Header from './Header';

const Navbar = ({ items, onClick }) => {
	return (
		<nav className="navbar">
			<Header small />
			<Menu items={items} onClick={onClick} navMode />
		</nav>
	);
};

export default Navbar;
