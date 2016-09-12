# Datetime Picker

A small and simple datetime-picker. Uses D3 under the hood. Written in Typescript.

## Install

```
npm install @tomrickard/datetime-picker

// or just grab it directly
add link
```

If using NPM:

### Vanilla JS

```
<script type="text/javascript" src="https://d3js.org/d3.v4.min.js"></script>
<script type="text/javascript" src="node_modules/line-chart/dist/datetime-picker.js"></script>

...
```

### Node/CommonJS

```
var d3 = require('d3')
var dateTimePicker = require('datetime-picker')
dateTimePicker.pick(selection, default_date, event_name)
...
```

### Typescript

Type definitions are included and should be found automatically by the typescript compiler

```
import * as d3 from 'd3'
import * as dateTimePicker from 'datetime-picker' 
dateTimePicker.pick(selection, default_date, event_name)
...

// or
import * as d3 from 'd3'
import { pick } from 'line-chart'
pick(selection, default_date, event_name)
...
```

## Quick Example

In the HTML:

```
<body>

	<div id="startDate" style="width: 400px">
	</div>

	<div id="endDate" style="width: 400px">
	</div>

	<div id="events"></div>

</body>
```

JavaScript (loaded using script tag, remember to include D3 v4)

```
var start_selection = d3.select("#startDate");
	var end_selection = d3.select("#endDate");
	var default_date = new Date().toISOString();

	var print_events = document.getElementById('events')

	// Create a datetime-picker in start_selection div
	// Updates will fire 'start_date' event
	dateTimePicker.pick(start_selection, default_date, 'start_date');

	// Create a datetime-picker in start_selection div
	// Updates will fire 'start_date' event
	dateTimePicker.pick(end_selection, default_date, 'end_date');

	// Listen for datetime updates
	document.addEventListener('start_date', function(e) {
		console.log('start date: ' + e.detail);
		var text = document.createElement('p')
		text.textContent = 'start date: ' + e.detail;
		print_events.appendChild(text)
	});

	document.addEventListener('end_date', function(e) {
	  console.log('end date: ' + e.detail);
	  var text = document.createElement('p')
	  text.textContent = 'end date: ' + e.detail;
	  print_events.appendChild(text)
	});
```

## Usage

Depends on D3 v4, add:

```
<script type="text/javascript" src="https://d3js.org/d3.v4.min.js"></script>
```

Datetime-picker exposes one method

```
dateTimePicker.pick(selection, default_date, event_name)
```

Where:

*selection* - container Element for the datetime picker, an SVG element will be placed inside this Element. Use d3.select()

*default_date* - default date to display must be ISO8061 format, so use `new Date().toISOString()`.

*event_name* - name of even that is fired when the datetime has changed.

## Styling

Arrows can be styled using:

```
// Date arrow
def > path#arrow

// Time arrows
defs > path#shortArrow
```

# License

MIT