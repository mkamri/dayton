// DECLARE VARIABLES
const mainImage = document.getElementById('app-image');
const nav = document.getElementById('app-nav');
const allEvents = document.getElementById('nav-all-events');
const music = document.getElementById('nav-music');
const sports = document.getElementById('nav-sports');
const theater = document.getElementById('nav-theater');
const arts = document.getElementById('nav-arts');
const culture = document.getElementById('nav-culture');

// Init eventType
let eventType = 'allEvents';

// Change Main Image Function

// Change event type
nav.addEventListener('click', function(e) {
	const allEventsImage = document.getElementById('app-image-all-events');
	const musicImage = document.getElementById('app-image-music');
	const sportsImage = document.getElementById('app-image-sports');
	const theaterImage = document.getElementById('app-image-theater');
	const artsImage = document.getElementById('app-image-arts');
	const cultureImage = document.getElementById('app-image-culture');

	console.log(e.target);

	if (e.target.className.includes('fas')) {
		if (eventType == 'allEvents') {
			allEventsImage.style.opacity = '0';
		} else if (eventType == 'music') {
			musicImage.style.opacity = '0';
		} else if (eventType == 'sports') {
			sportsImage.style.opacity = '0';
		} else if (eventType == 'theater') {
			theaterImage.style.opacity = '0';
		} else if (eventType == 'arts') {
			artsImage.style.opacity = '0';
		} else if (eventType == 'culture') {
			cultureImage.style.opacity = '0';
		}
	}

	if (e.target == allEvents) {
		allEventsImage.style.opacity = '1';
		eventType = 'allEvents';
	} else if (e.target == music) {
		musicImage.style.opacity = '1';
		eventType = 'music';
	} else if (e.target == sports) {
		sportsImage.style.opacity = '1';
		eventType = 'sports';
	} else if (e.target == theater) {
		theaterImage.style.opacity = '1';
		eventType = 'theater';
	} else if (e.target == arts) {
		artsImage.style.opacity = '1';
		eventType = 'arts';
	} else if (e.target == culture) {
		cultureImage.style.opacity = '1';
		eventType = 'culture';
	}
});
