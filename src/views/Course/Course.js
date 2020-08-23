import React, { useState, useMemo } from 'react';
import { useLocation, withRouter } from 'react-router-dom';

import './Course.css';

import Navbar from '../../components/Navbar';
import Spinner from '../../components/Spinner';

const Course = ({ list, onClick }) => {
	const [ currentCourse, setCurrentCourse ] = useState(null);
	const [ imageStatus, setImageStatus ] = useState('idle');
	const location = useLocation();

	useMemo(
		() => {
			if (location) {
				const currentCourse = list.filter((listItem) => `/${listItem.link}` === location.pathname);
				setCurrentCourse(currentCourse);
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

	return (
		<div className="wrapper">
			<Navbar items={list} onClick={onClick} />
			{currentCourse ? (
				<div className="course__wrapper fade-in">
					<main className="course__presentation">
						<h1 className="course__title">{currentCourse[0].taller.toUpperCase()}</h1>
						<p className="course__description">{currentCourse[0].objetivoTaller}</p>
						<div className="course__date">
							<p className="course__date__title">{currentCourse[0].fecha}</p>
							<p className="course__date__subtitle">{currentCourse[0].horario}</p>
						</div>

						<section className="course__buttons">
							<button className="button button--shape">
								<span>Inscríbete</span>
							</button>
							<a
								className="link"
								href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEFpkeZ2yw&#x2F;view?utm_content=DAEFpkeZ2yw&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
								target="_blank"
								rel="noopener noreferrer"
							>
								<p className="small">
									<span className="material-icons">event</span>
									<span>Ver calendario</span>
								</p>
							</a>
						</section>
					</main>

					<aside className="course__instructor">
						{imageStatus === 'pending' && <Spinner />}

						<img
							onLoad={() => setImageStatus('done')}
							className="course__instructor__thumbnail fade-in"
							src={currentCourse[0].foto}
							style={{ display: imageStatus === 'pending' ? 'none' : 'initial' }}
							alt="Imagen de la encargada del taller"
						/>

						<div>
							<p className="course__instructor__name">{currentCourse[0].encargada}</p>
							<p className="course__instructor__team">{currentCourse[0].equipo}</p>
							<p className="course__instructor__descripcion">{currentCourse[0].descripcionTallerista}</p>
						</div>
					</aside>
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
};

export default withRouter(Course);
