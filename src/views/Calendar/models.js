const locale = {
	months: [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Agosto',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre'
	],

	weekDays: [
		{
			name: 'Lunes',
			short: 'L'
		},
		{
			name: 'Martes',
			short: 'M'
		},
		{
			name: 'Miércoles',
			short: 'W'
		},
		{
			name: 'Jueves',
			short: 'J'
		},
		{
			name: 'Viernes',
			short: 'V'
		},
		{
			name: 'Sábado',
			short: 'S',
			isWeekend: true
		},
		{
			name: 'Domingo', // used for accessibility
			short: 'D', // displayed at the top of days' rows
			isWeekend: true // is it a formal weekend or not?
		}
	],

	weekStartingIndex: 6,

	// return a { year: number, month: number, day: number } object
	getToday(gregorainTodayObject) {
		return gregorainTodayObject;
	},

	// return a native JavaScript date here
	toNativeDate(date) {
		return new Date(date.year, date.month - 1, date.day);
	},

	// return a number for date's month length
	getMonthLength(date) {
		return new Date(date.year, date.month, 0).getDate();
	},

	// return a transformed digit to your locale
	transformDigit(digit) {
		return digit;
	},

	// texts in the date picker
	nextMonth: 'Next Month',
	previousMonth: 'Previous Month',
	openMonthSelector: 'Open Month Selector',
	openYearSelector: 'Open Year Selector',
	closeMonthSelector: 'Close Month Selector',
	closeYearSelector: 'Close Year Selector',
	defaultPlaceholder: 'Select...',

	// for input range value
	from: 'from',
	to: 'to',

	// used for input value when multi dates are selected
	digitSeparator: ',',

	// if your provide -2 for example, year will be 2 digited
	yearLetterSkip: 0,

	// is your language rtl or ltr?
	isRtl: false
};

const preselectedDays = [
	{
		year: 2020,
		month: 11,
		day: 11
	},
	{
		year: 2020,
		month: 11,
		day: 13
	},
	{
		year: 2020,
		month: 11,
		day: 19
	},
	{
		year: 2020,
		month: 11,
		day: 27
	},
	{
		year: 2020,
		month: 11,
		day: 29
	}
];

export { locale, preselectedDays };
