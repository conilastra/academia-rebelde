import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/Home/Home';
import Course from './views/Course/Course';
import Calendar from './views/Calendar/Calendar';
import Form from './views/Form/Form';

const App = () => {
	const [ courses, setCourses ] = useState([]);

	useEffect(() => {
		axios
			.get('https://v2-api.sheety.co/ae60fd15782508292e58f110b167e0bd/academiaRebeldeSeptiembre/septiembre')
			.then((resp) => {
				setCourses(resp.data.septiembre);
			});
	}, []);

	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home items={courses} />
				</Route>
				<Route exact path="/formulario">
					<Form />
				</Route>
				<Route exact path="/calendario">
					<Calendar list={courses} />
				</Route>
				{courses.map((course) => {
					return (
						<Route exact to={`/${course.name}`} key={course.link}>
							<Course list={courses} />
						</Route>
					);
				})}
			</Switch>
		</Router>
	);
};

export default App;
