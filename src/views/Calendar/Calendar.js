import React from 'react';
import { Calendar as ModernCalendar } from 'react-modern-calendar-datepicker';

import { locale, preselectedDays } from './models';

import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import './Calendar.css';
import Spinner from '../../components/Spinner';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

const Calendar = ({ list }) => {
	return (
		<main className="view-wrapper">
			<Header />
			<section className="calendar-wrapper">
				<div className="calendar-wrapper__section">
					<ModernCalendar value={preselectedDays} locale={locale} />
					{/* <a
						className="button calendar__button calendar__button--relative"
						href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEFpkeZ2yw&#x2F;view?utm_content=DAEFpkeZ2yw&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span>Versión imprimible</span>
					</a> */}
				</div>
				<ul className="calendar__list">
					{list.length === 0 ? (
						<Spinner />
					) : (
						list.map((listItem) => (
							<li className="calendar__list__item" key={listItem.link}>
								<Link to={listItem.link}>
									<p className="calendar__list__item__date">
										{listItem.fecha}
										<span className="calendar__list__item__time">({listItem.horario})</span>
									</p>
									<span className="calendar__list__item__course">
										{listItem.subtitulo ? (
											listItem.taller + ': ' + listItem.subtitulo.toLowerCase()
										) : (
											listItem.taller
										)}
									</span>
								</Link>
							</li>
						))
					)}
				</ul>
			</section>
		</main>
	);
};

export default Calendar;
