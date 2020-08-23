import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, withRouter, Link, Redirect } from 'react-router-dom';
import { Calendar } from 'react-modern-calendar-datepicker';
import { locale, customDaysClassName } from '../Calendar/models';

import './Course.css';

import Navbar from '../../components/Navbar';
import Spinner from '../../components/Spinner';

const Course = ({ list, onClick }) => {
	const [ currentCourse, setCurrentCourse ] = useState(null);
	const [ imageStatus, setImageStatus ] = useState('idle');
	const [ firstLoad, setFirstLoad ] = useState(false);
	const [ match, setMatch ] = useState(false);
	const location = useLocation();

	useMemo(
		() => {
			if (location) {
				const currentCourse = list.filter((listItem) => `/${listItem.link}` === location.pathname);
				setCurrentCourse(currentCourse[0]);
			}
		},
		[ location, list ]
	);

	useMemo(
		() => {
			if (location) {
				setImageStatus('pending');
			}
		},
		[ location ]
	);

	useEffect(() => {
		setFirstLoad(true);
	}, []);

	useEffect(
		() => {
			if (location && currentCourse) {
				if ('/' + currentCourse.link === location.pathname) {
					setMatch(true);
				} else {
					setMatch(false);
				}
			}
		},
		[ location, currentCourse ]
	);

	return (
		<div className="wrapper">
			{!match && firstLoad && imageStatus === 'pending' ? <Redirect to="/" /> : null}
			{currentCourse ? (
				<React.Fragment>
					<Navbar items={list} onClick={onClick} />
					<div className="course__wrapper fade-in">
						<main className="course__presentation">
							<h1 className="course__title">{currentCourse.taller.toUpperCase()}</h1>
							<p className="course__description">{currentCourse.objetivoTaller}</p>
							<div className="course__date">
								<span className="course__date__title">{currentCourse.fecha}</span>
								<span> | </span>
								<span className="course__date__subtitle">{currentCourse.horario}</span>
							</div>
							<div className="course__calendar">
								<Calendar
									customDaysClassName={customDaysClassName}
									value={
										currentCourse.sesion2 ? (
											[
												{
													year: 2020,
													month: 9,
													day: currentCourse.sesion1
												},
												{
													year: 2020,
													month: 9,
													day: currentCourse.sesion2
												}
											]
										) : (
											{
												year: 2020,
												month: 9,
												day: currentCourse.sesion1
											}
										)
									}
									locale={locale}
								/>
							</div>

							<section className="course__buttons">
								<Link to="/formulario" className="button button--shape">
									<span>Inscríbete</span>
								</Link>
								<Link to="/calendario" className="button calendar__button--home calendar__button">
									<span>Ver calendario</span>
								</Link>
							</section>
						</main>

						<aside className="course__instructor">
							{imageStatus === 'pending' && <Spinner />}

							<img
								onLoad={() => setImageStatus('done')}
								className="course__instructor__thumbnail fade-in"
								src={currentCourse.foto}
								style={{ display: imageStatus === 'pending' ? 'none' : 'initial' }}
								alt="Imagen de la encargada del taller"
							/>

							<div>
								<p className="course__instructor__name">{currentCourse.encargada}</p>
								<p className="course__instructor__team">{currentCourse.equipo}</p>
								<p className="course__instructor__descripcion">{currentCourse.descripcionTallerista}</p>
							</div>
						</aside>
					</div>
				</React.Fragment>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default withRouter(Course);
