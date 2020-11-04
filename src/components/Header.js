import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ small }) => {
	return (
		<header className={!small ? 'header' : 'header header--small'}>
			<Link to="/">
				<h1 className="header__title">ACADEMIA REBELDE</h1>
				<h2 className="header__subtitle">noviembre</h2>
			</Link>
		</header>
	);
};

export default Header;
