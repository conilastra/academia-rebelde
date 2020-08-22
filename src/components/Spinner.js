import React from 'react';
import './Spinner.css';

const Spinner = () => {
	return (
		<div class="container">
			<div class="dot-container">
				<div class="dot" />
				<div class="dot" />
				<div class="dot" />
			</div>
			<div class="dot-container">
				<div class="dot" />
				<div class="dot" />
				<div class="dot" />
			</div>
			<div class="dot-container">
				<div class="dot" />
				<div class="dot" />
				<div class="dot" />
			</div>
		</div>
	);
};

export default Spinner;
