// DECLARE VARIABLES
const mainImage = document.getElementById('app-image');
const nav = document.getElementById('app-nav');
const mainTitle = document.getElementById('app-title');
const allEvents = document.getElementById('nav-all-events');
const music = document.getElementById('nav-music');
const sports = document.getElementById('nav-sports');
const theater = document.getElementById('nav-theater');
const arts = document.getElementById('nav-arts');
const culture = document.getElementById('nav-culture');

// Init allEvents to start with
let eventType = 'allEvents';
function initAllEvents() {
	musicEvents.forEach(addEvent);
	sportsEvents.forEach(addEvent);
	theaterEvents.forEach(addEvent);
	cultureEvents.forEach(addEvent);
}
initAllEvents();

// Change event type
nav.addEventListener('click', function(e) {
	const allEventsImage = document.getElementById('app-image-all-events');
	const musicImage = document.getElementById('app-image-music');
	const sportsImage = document.getElementById('app-image-sports');
	const theaterImage = document.getElementById('app-image-theater');
	const artsImage = document.getElementById('app-image-arts');
	const cultureImage = document.getElementById('app-image-culture');

	// If the target is an icon, change opacity of current section to '0'
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

	// Create header animation
	function fadeOut() {
		mainTitle.style.opacity = 0;
	}

	function fadeIn() {
		mainTitle.style.opacity = 1;
	}

	function changeText(newTitle) {
		mainTitle.textContent = newTitle;
	}

	function headerAnimation(newTitle) {
		fadeOut();
		setTimeout(changeText, 600, newTitle);
		setTimeout(fadeIn, 600);
	}

	// Change opacity of new section to '1', and change the h1 content
	if (e.target == allEvents) {
		allEventsImage.style.opacity = '1';
		headerAnimation('ALL EVENTS');
		eventList.innerHTML = '';
		musicEvents.forEach(addEvent);
		sportsEvents.forEach(addEvent);
		theaterEvents.forEach(addEvent);
		cultureEvents.forEach(addEvent);

		eventType = 'allEvents';
	} else if (e.target == music) {
		musicImage.style.opacity = '1';
		headerAnimation('MUSIC');
		eventList.innerHTML = '';
		musicEvents.forEach(addEvent);
		eventType = 'music';
	} else if (e.target == sports) {
		sportsImage.style.opacity = '1';
		headerAnimation('SPORTS');
		eventList.innerHTML = '';
		sportsEvents.forEach(addEvent);
		eventType = 'sports';
	} else if (e.target == theater) {
		theaterImage.style.opacity = '1';
		headerAnimation('THEATER');
		eventList.innerHTML = '';
		theaterEvents.forEach(addEvent);
		eventType = 'theater';
	} else if (e.target == arts) {
		artsImage.style.opacity = '1';
		headerAnimation('ARTS');
		eventList.innerHTML = '';
		artsEvents.forEach(addEvent);
		eventType = 'arts';
	} else if (e.target == culture) {
		cultureImage.style.opacity = '1';
		headerAnimation('CULTURE');
		eventList.innerHTML = '';
		cultureEvents.forEach(addEvent);
		eventType = 'culture';
	}
});
