////// DEFINE VARIABLES //////
const eventSection = document.getElementById('events-section');
const eventOne = document.getElementById('event-1');
const eventTwo = document.getElementById('event-2');
const eventThree = document.getElementById('event-3');
const eventFour = document.getElementById('event-4');
const eventFive = document.getElementById('event-5');
const eventSix = document.getElementById('event-6');
const eventSeven = document.getElementById('event-7');
const eventEight = document.getElementById('event-8');

///// DEFINE EVENT NUMBERS /////
let eventOneContent = musicEvents[0];
let eventTwoContent = sportsEvents[0];
let eventThreeContent = musicEvents[3];
let eventFourContent = musicEvents[2];
let eventFiveContent = sportsEvents[1];
let eventSixContent = cultureEvents[0];
let eventSevenContent = musicEvents[1];
let eventEightContent = sportsEvents[3];

////// ADD BACKGROUND HOVER EFFECT //////
const allEvents = [eventOne, eventTwo, eventThree, eventFour, eventFive, eventSix, eventSeven, eventEight];
const allEventContents = [
	eventOneContent,
	eventTwoContent,
	eventThreeContent,
	eventFourContent,
	eventFiveContent,
	eventSixContent,
	eventSevenContent,
	eventEightContent
];
allEvents.forEach((event, index) => {
	const content = allEventContents[index];
	let elipses = '';
	if (content.title.length >= 25) {
		elipses = '...';
	}
	event.style.backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${content.image}')`;
	event.innerHTML = `
    <span class="tiny-text pb-3">${content.date}</span>
    <span class="h6 text-uppercase font-weight-bold text-center pb-3">${content.title.slice(0, 25)}${elipses}</span>
    <span class="tiny-text">${content.category}</span>`;
});
