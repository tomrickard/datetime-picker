import * as d3 from 'd3';

function pick(selection, default_date, event_name) {
	
	// Create SVG element in selection
	var svg = selection.append('svg')
		.attr('viewBox', '0 0 350 80')

	var date = new Date(default_date);
	var event_name = event_name;

	setup();
	displayDate();

	/*----------------------------------------------------------------------------------
	* Datetime modifying functions
	**---------------------------------------------------------------------------------*/
	function changeDate(difference) {
		date.setDate(date.getDate() + difference)
		displayDate()
	}

	function changeHour(difference) {
		date.setHours(date.getHours() + difference)
		displayDate()
	}

	function changeMinute(difference) {
		date.setMinutes(date.getMinutes() + difference)
		displayDate()
	}

	function changeSecond(difference) {
		date.setSeconds(date.getSeconds() + difference)
		displayDate()
	}

	/*----------------------------------------------------------------------------------
	* Create arrows
	**---------------------------------------------------------------------------------*/

	function setup() {

		// Create reusable arrow
		svg.append('defs')
		.append('path')
			.attr('id', 'arrow')
			.attr('d', 'M 0,0 v-10 l20,10 l-20,10 v-10')
			.attr('fill', 'rgb(150,150,150)')
			.attr('transform', 'translate(10,10)')

		// Create reusable short arrow
		svg.append('defs')
			.append('path')
				.attr('id', 'arrowShort')
				.attr('d', 'M 0,0 v-10 l15,10 l-15,10 v-10')
				.attr('fill', 'rgb(150,150,150)')
				.attr('transform', 'translate(10,10)')

		// Date right arrow
		svg.append('g')
			.attr('id', 'dateRight')
			.attr('transform', 'translate(162,27)')
			.on('click', function () {
				changeDate(1)
			})
			.append('use')
				.attr('xlink:href', '#arrow')

		// Date left arrow
		svg.append('g')
			.attr('id', 'dateleft')
			.attr('transform', 'translate(40, 47) rotate(-180) ')
			.on('click', function () {
				changeDate(-1)
			})
			.append('use')
				.attr('xlink:href', '#arrow')

		// Hour up arrow
		svg.append('g')
			.attr('id', 'hourUp')
			.attr('transform', 'translate(230, 30) rotate(-90) ')
			.on('click', function () {
				changeHour(1)
			})
			.append('use')
				.attr('xlink:href', '#arrowShort')

		// Hour down arrow
		svg.append('g')
			.attr('id', 'hourDown')
			.attr('transform', 'translate(250, 45) rotate(90) ')
			.on('click', function () {
				changeHour(-1)
			})
			.append('use')
				.attr('xlink:href', '#arrowShort')

		// Minute up arrow
		svg.append('g')
			.attr('id', 'minuteUp')
			.attr('transform', 'translate(265, 30) rotate(-90) ')
			.on('click', function () {
				changeMinute(1)
			})
			.append('use')
				.attr('xlink:href', '#arrowShort')

		// Minute down arrow
		svg.append('g')
			.attr('id', 'minuteDown')
			.attr('transform', 'translate(285, 45) rotate(90) ')
			.on('click', function () {
				changeMinute(-1)
			})
			.append('use')
				.attr('xlink:href', '#arrowShort')

		// Second up arrow
		svg.append('g')
			.attr('id', 'secondUp')
			.attr('transform', 'translate(300, 30) rotate(-90) ')
			.on('click', function () {
				changeSecond(1)
			})
			.append('use')
				.attr('xlink:href', '#arrowShort')

		// Second down arrow
		svg.append('g')
			.attr('id', 'secondDown')
			.attr('transform', 'translate(320, 45) rotate(90) ')
			.on('click', function () {
				changeSecond(-1)
			})
			.append('use')
				.attr('xlink:href', '#arrowShort')
	}


	/*----------------------------------------------------------------------------------
	* Create and update the Datetime text
	**---------------------------------------------------------------------------------*/

	function displayDate() {

		// Data join for date string
		var dateString = svg.selectAll('.dateString')
			.data([date])

		// Update
		dateString
			.text(function (d,i) {
				return d.toLocaleDateString()
			})

		// Enter
		dateString.enter()
			.append('text')
				.attr('class', 'dateString')
				.text(function (d,i) {
					return d.toLocaleDateString()
				})
				.attr('x', '100')
				.attr('y', '45')
				.attr('text-anchor', 'middle')
				.attr('fill', 'rgb(100,100,100)')
				.style('font-size', '22px')

		// Data join for time string
		var timeString = svg.selectAll('.timeString')
			.data([date])

		// Update
		timeString
			.text(function (d,i) {
					return d.toLocaleTimeString()
				})

		// Enter
		timeString.enter()
			.append('text')
				.attr('class', 'timeString')
				.text(function (d,i) {
					return d.toLocaleTimeString()
				})
				.attr('x', '275')
				.attr('y', '45')
				.attr('text-anchor', 'middle')
				.attr('fill', 'rgb(100,100,100)')
				.style('font-size', '22px')

		// On datetime update fire event with 
		// specified event name
		var event = new CustomEvent(event_name, { 
			"detail": date.toISOString()
		});
		document.dispatchEvent(event);
	}

}

export { pick }