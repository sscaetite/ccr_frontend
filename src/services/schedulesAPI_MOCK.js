const schedules = [
	{
		hour: '8h00',
		local: 'Metrô Butantã'
	},
	{
		hour: '9h00',
		local: 'Metrô Móoca'
	},
	{
		hour: '9h00',
		local: 'Metrô Butantã'
	},
	{
		hour: '9h00',
		local: 'Metrô Brás'
	},
	{
		hour: '9h30',
		local: 'Metrô Butantã'
	},
	{
		hour: '9h30',
		local: 'Metrô Liberdade'
	},
	{
		hour: '9h30',
		local: 'Metrô Tatuapé'
	},
	{
		hour: '9h30',
		local: 'Metrô Brás'
	},
	{
		hour: '10h30',
		local: 'Metrô Butantã'
	},
	{
		hour: '10h30',
		local: 'Metrô Morumbi'
	},
	{
		hour: '11h30',
		local: 'Metrô Butantã'
	},
	{
		hour: '12h00',
		local: 'Metrô Butantã'
	},
	{
		hour: '14h30',
		local: 'Metrô Butantã'
	},
	{
		hour: '15h00',
		local: 'Metrô Butantã'
	},
	{
		hour: '16h30',
		local: 'Metrô Butantã'
	},
	{
		hour: '20h30',
		local: 'Metrô Butantã'
	},

	
];

export default schedules.map((schedule, index) => ({...schedule, id: index}));