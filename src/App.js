import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './views/Home/Home';
import Course from './views/Course/Course';
import Calendar from './views/Calendar/Calendar';
import Form from './views/Form/Form';

const App = () => {
	// const [ courses, setCourses ] = useState([]);

	// useEffect(() => {
	// 	axios.get('https://sheet2api.com/v1/dtWLW6ZQOmKz/malla-academia-rebelde').then((resp) => {
	// 		setCourses(resp.data);
	// 	});
	// }, []);

	const courses = [
		{
			taller: 'Ser mujer e indígena',
			subtitulo: '¿Cómo comprendemos el racismo en Chile?',
			encargada: 'Constanza Hernández ',
			equipo: 'Bío Bío\n',
			mail: 'constanza.hernandez17@inacapmail.cl',
			celular: 56972626219,
			sesiones: 1,
			fecha: 'Miercoles 11',
			horario: '18 hrs ',
			duracion: '1.30hr',
			descripcionTallerista:
				'Soy mujer mapuche del sur de este territorio y he vivido con complejidad el racismo toda la vida sin saber que era racismo, sin entender como esto era parte de mi y de mi vida. Esta discriminación con sus esquemas y estereotipos me quitó la identidad, la pertenencia y la tierra. Comprender sus formas y su estructura me devolvió todo eso y más... y como lo personal es político decido compartir mi experiencia y mis aprendizajes para quienes transiten este camino y quienes quieran aprender ',
			objetivoTaller:
				'Ser mujer racializada en un país machista, conquistado y racista es algo difícil de comprender, por eso vamos a intentar lograrlo conociendo ciertos conceptos y conversando para identificar los mecanismos del racismo y cómo este se relaciona con el sistema patriarcal que habitamos.',
			foto: 'https://drive.google.com/uc?export=view&id=1EHFdZgI5AEtasFEIm7X90BIRpq00Mlkr',
			materiales: '',
			obs: 'no comparte material',
			link: 'ser-mujer-e-indigena',
			sesion1: 11,
			sesion2: ''
		},
		{
			taller: 'Ya no perreo sola',
			subtitulo: '',
			encargada: 'Vanessa Bravo',
			equipo: 'Gestión Interna',
			mail: 'vanessabravosandoval@gmail.com',
			celular: 56932619240,
			sesiones: 1,
			fecha: 'Viernes 13 ',
			horario: '19 hrs',
			duracion: '1.30hr',
			descripcionTallerista:
				'Profesora de profesión que baila aficionadamente desde el 2009 estilos principalmente urbanos',
			objetivoTaller:
				'En esta nueva versión del taller vamos descubrir, a través del movimiento de diferentes partes de nuestras cuerpas, sensaciones relacionadas con el goce y el disfrute, además de liberar tensiones acompañadas de música latina (reggaeton, salsa, cumbia, etc) ',
			foto: 'https://drive.google.com/uc?export=view&id=1uPB6j-IPNYprrhVWDLi7OpxXeyuhcqNS',
			materiales: '',
			obs: '',
			link: 'ya-no-perreo-sola',
			sesion1: 13,
			sesion2: ''
		},
		{
			taller: 'Cuerpas cíclicas  y menstruantes ',
			subtitulo: '',
			encargada: 'Lydda Urrutia',
			equipo: 'Gestión Interna',
			mail: 'lyddaurrutia@gmail.com',
			celular: 56949064818,
			sesiones: 1,
			fecha: 'Jueves 19',
			horario: '18 hrs',
			duracion: '2hrs',
			descripcionTallerista:
				'Soy Lydda, amante de las sandías y en proceso de descontrucción social y personal. Me he ido instruyendo y descubriendo a través del feminismo y las terapias de sanacion energética, ha sido un hermoso camino en el cual he aprendido mucho y hoy al fin me siento lista para compartir con todes lo aprendido✨ Actualmente me estoy formando como terapeuta floral y complementario 🌸',
			objetivoTaller:
				'El objetivo del taller es que podamos descubrir y conocer de mejor manera nuestro ciclo menstrual , entendiendo cada fase de este, conoceremos de qué manera nuestro ciclo se conecta con la energía lunar, abordaremos técnicas de sanacion y ayuda frente a incomodidades que aveces se nos presentan durante el proceso de menstruar, \nSerá una jornada libre de hacer preguntas,  conversar , compartir sentires tanto negativos y positivos con respecto  a nuestra cuerpa cíclica con el fin de aprender a convivir mejor con ello ✨',
			foto: 'https://drive.google.com/uc?export=view&id=1mALPFw3LDDOOAcviqvyexgMZjeV9SYZC',
			materiales: '',
			obs: '',
			link: 'cuerpas-ciclicas-y-menstruantes',
			sesion1: 19,
			sesion2: ''
		},
		{
			taller: 'Aprende a collagear ',
			subtitulo: '',
			encargada: 'Gabriela Cerda Yáñez',
			equipo: 'Antofagasta',
			mail: 'gabyamarillo@gmail.com',
			celular: 56983611751,
			sesiones: 1,
			fecha: 'Viernes 27',
			horario: '17 hrs',
			duracion: '2hrs',
			descripcionTallerista:
				'Me llamo Gaby y soy collagista. El collage es una expresión artística que no discrimina a nadie, todas podemos hacer collages, teniendo conocimientos básicos o no, total al final la vida es un collage.',
			objetivoTaller:
				'En 2/3 horitas te voy a enseñar qué es el collage, qué materiales usar y algunas ideas con las que puedes empezar crear recursos para hacer  hermosas cositas mediante la técnica del collage análogo.',
			foto: 'https://drive.google.com/uc?export=view&id=1KyS4rEo61-gbPQQTm6p6kNrQAgg484U3',
			materiales:
				'Revistas o recortes, tijeras, pegamento, papeles (block o de colores) + lo que quieras agregar por tu cuenta',
			obs: '',
			link: 'aprende-a-collagear',
			sesion1: 27,
			sesion2: ''
		},
		{
			taller: 'Las mujeres en el arte',
			subtitulo: 'Del lugar subordinado a nuevas visualidades',
			encargada: 'Marisol Horta',
			equipo: 'Gestión Interna | Intervención',
			mail: 'marisolhorta@gmail.com',
			celular: 56951491089,
			sesiones: 1,
			fecha: 'Domingo 29',
			horario: '17 hrs ',
			duracion: '2hrs ',
			descripcionTallerista:
				'Estudié Licenciatura en Arte con mención en Teoría e Historia del Arte, luego Pedagogía en Enseñanza Media y trabajé en el ámbito de la Educación por 10 años. Si hay algo que me entregó la Academia, fue el convencimiento de que los márgenes en que se escribe la Historia del Arte deben ser ampliados. Hemos recibido un relato androcentrista, blanco y burgués, que no sólo legitima la visualidad imperante, sino también qué rol cumplirá la mujer en él. Es necesario releer la Historia y con mirada crítica tensionar las estructuras que han definido lo femenino como objeto estético, idealizado y de consumo masculino.',
			objetivoTaller:
				'A través de un recorrido histórico y visual, revisaremos la manera en que las mujeres han sido representadas en el Arte occidental, analizando los roles impuestos desde la mirada masculina y la reproducción de conocimiento sesgado escrita por la Historia. Como respuesta a la exclusión femenina de los sistemas de validación del Arte, nos acercaremos a la obra de artistas que han resignificado el papel de la mujer en la cultura visual contemporánea, inyectando a ésta una mirada crítica y feminista. ',
			foto: 'https://drive.google.com/uc?export=view&id=1soBY68NyPrCHpnJb9NqFcP8KShj3ecu-',
			materiales: '',
			obs: '',
			link: 'las-mujeres-en-el-arte',
			sesion1: 29,
			sesion2: ''
		}
	];

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
