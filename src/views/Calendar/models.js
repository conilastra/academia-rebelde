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
		month: 9,
		day: 1
	},
	{
		year: 2020,
		month: 9,
		day: 2
	},
	{
		year: 2020,
		month: 9,
		day: 3
	},
	{
		year: 2020,
		month: 9,
		day: 6
	},
	{
		year: 2020,
		month: 9,
		day: 8
	},
	{
		year: 2020,
		month: 9,
		day: 22
	},
	{
		year: 2020,
		month: 9,
		day: 23
	},
	{
		year: 2020,
		month: 9,
		day: 24
	},
	{
		year: 2020,
		month: 9,
		day: 26
	},
	{
		year: 2020,
		month: 9,
		day: 29
	},
	{
		year: 2020,
		month: 9,
		day: 30
	}
];

const customDaysClassName = [
	{
		year: 2020,
		month: 9,
		day: 11,
		className: 'holidays'
	},
	{
		year: 2020,
		month: 9,
		day: 12,
		className: 'holidays'
	},
	{
		year: 2020,
		month: 9,
		day: 13,
		className: 'holidays'
	},
	{
		year: 2020,
		month: 9,
		day: 14,
		className: 'holidays'
	},
	{
		year: 2020,
		month: 9,
		day: 15,
		className: 'holidays'
	},
	{
		year: 2020,
		month: 9,
		day: 16,
		className: 'holidays'
	},
	{
		year: 2020,
		month: 9,
		day: 17,
		className: 'holidays'
	},
	{
		year: 2020,
		month: 9,
		day: 18,
		className: 'holidays'
	},
	{
		year: 2020,
		month: 9,
		day: 19,
		className: 'holidays'
	},
	{
		year: 2020,
		month: 9,
		day: 20,
		className: 'holidays'
	}
];

export { locale, preselectedDays, customDaysClassName };
