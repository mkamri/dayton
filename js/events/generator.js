// Create Dummy Events
const musicEvents = [
	{
		title: 'Boosie Badazz Live',
		date: 'Fri, April 3, 10:00 PM',
		location: "Oddbody's",
		image: '/css/img/events/event-img/boosie-badazz.jpg'
	},
	{
		title: 'Stairway to Zeppelin with 5 Story Plunge',
		date: 'Fri, April 3, 7:00 PM',
		location: 'The Brightside Music & Event Venue',
		image: '/css/img/events/event-img/stairway-to.jpg'
	},
	{
		title: 'Undascape Music Fest',
		date: 'Sat, June 27, 12:00 PM',
		location: 'Polish Club Picnic Grounds',
		image: '/css/img/events/event-img/undascape.jpg'
	},
	{
		title: 'James Mathes',
		date: 'Sat, April 4, 7:00 PM',
		location: 'JD Legends',
		image: '/css/img/events/event-img/james-mathes.jpg'
	},
	{
		title: 'Ohio Brass & Electric',
		date: 'Sat, April 11, 8:00 PM',
		location: 'JD Legends',
		image: '/css/img/events/event-img/ohio-brass.jpg'
	},
	{
		title: 'At VFW Post 2800!!',
		date: 'April 24, 7:00 PM',
		location: 'VFW Post 2800',
		image: '/css/img/events/event-img/vfw-post.jpg'
	}
];

// Define Variables
const eventList = document.getElementById('app-list');

// Create Events
musicEvents.forEach(addEvent);

function addEvent(event) {
	let listItem = document.createElement('li');
	listItem.className = `list-group-item d-flex align-items-center`;
	listItem.innerHTML = `
			<div class="event-img" style="background-image: url('${event.image}')"></div>
			<div class="ml-3">
				<span class="text-primary mr-3">${event.date}</span>
				<br>
				<span class="text-danger d-inline-block">${event.location}</span>
				<h2 class="h4 text-light">${event.title}</h2>
				<a href="#" class="btn btn-danger btn-sm">Visit Event Site</a>
			</div>
  `;
	eventList.appendChild(listItem);
}
