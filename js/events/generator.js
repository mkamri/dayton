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

const sportsEvents = [
	{
		title: '2020 CoronaBusters Virtual 19K Run Walk',
		date: 'Fri, May 1, 2020',
		location: 'Dayton',
		image: '/css/img/events/event-img/coronabusters.jpg'
	},
	{
		title: '2020 Remember the Fallen Virtual 21K Run Walk',
		date: 'Fri, May 15',
		location: 'Dayton',
		image: '/css/img/events/event-img/remember.jpg'
	},
	{
		title: '2020 Anything is PAW-sible 5k Run Walk',
		date: 'tbd',
		location: 'Dayton',
		image: '/css/img/events/event-img/pawsible.jpg'
	},
	{
		title:
			'Royal Boxing Promotions Presents RED CARPET FIGHT NIGHT. An action-packed night of professinoal boxing. Come SUPPORT, CHEER, and HAVE FUN.',
		date: '',
		location: '',
		image: '/css/img/events/event-img/boxing.jpg'
	}
];

const theaterEvents = [
	{
		title: "Laugh at Taft's with Mike Cannon",
		date: 'Sat, April 25, 8:00 PM',
		location: "Taft's Brewporium",
		image: '/css/img/events/event-img/mike.jpg'
	}
];

const artsEvents = [
	{
		title: '',
		date: '',
		location: '',
		image: ''
	}
];

const cultureEvents = [
	{
		title: "Spring Fling at America's Packard Museum",
		date: 'Fri, Apr 17, 6:30',
		location: "America's Packard Museum",
		image: 'css/img/events/event-img/packard.jpg'
	}
];

////////////// Define Variables //////////////
const eventList = document.getElementById('app-list');

////////////// Create Events //////////////
function addEvent(event) {
	let listItem = document.createElement('li');

	// Determine if the title will get cut short and need elipses
	let elipses;
	if (event.title.length > 35) {
		elipses = '...';
	} else {
		elipses = '';
	}

	// Insert inner HTML
	listItem.className = `list-group-item d-flex align-items-center`;
	if (event.title != '') {
		listItem.innerHTML = `
			<div class="event-img" style="background-image: url('${event.image}')"></div>
			<div class="ml-3">
				<span class="text-primary mr-3">${event.date}</span>
				<br>
				<span class="text-danger d-none d-sm-inline-block">${event.location}</span>
				<h2 class="event-title h4 text-light">${event.title.slice(0, 35)}${elipses}</h2>
				<a href="#" class="btn btn-danger btn-sm">Visit Site</a>
			</div>
  	`;
	} else {
		listItem.innerHTML = `
			<div class="ml-3">
				<p class="event-title lead text-light">Sorry, there are no events in Dayton in this category. Please try another event type.</p>
			</div>
		`;
	}
	eventList.appendChild(listItem);
}
