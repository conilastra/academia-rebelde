import React from 'react';
import './Spinner.css';

const Spinner = () => {
	return (
		<div className="container">
			<div className="dot-container">
				<div className="dot" />
				<div className="dot" />
				<div className="dot" />
			</div>
			<div className="dot-container">
				<div className="dot" />
				<div className="dot" />
				<div className="dot" />
			</div>
			<div className="dot-container">
				<div className="dot" />
				<div className="dot" />
				<div className="dot" />
			</div>
		</div>
	);
};

export default Spinner;
