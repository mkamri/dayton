// Define Variables
const sectionBackground = document.getElementById('js-background');
const daiSection = document.querySelector('.dai');
const airforceSection = document.querySelector('.airforce');
const boonshoftSection = document.querySelector('.boonshoft');
const modalCloser = document.getElementById('js-close-modal-large');
const modalCloserSmall = document.getElementById('js-close-modal-small');
const modalContent = document.getElementById('modal-content');
const modalHeading = document.getElementById('modal-heading');
const modalParagraph = document.getElementById('modal-paragraph');
const museumSiteLink = document.getElementById('museum-site-link');
const sidebar = document.getElementById('sidebar');

// Fade to black
const fadeToBlack = function() {
	sectionBackground.style.zIndex = `998`;
	sectionBackground.style.backgroundPosition = `0 0`;
	setTimeout(() => (modalContent.style.opacity = '1'), 600);
};

// Show different text and sidebar background based on what section was clicked
document.addEventListener('click', function(e) {
	if (e.target == daiSection) {
		modalHeading.textContent = 'Dayton Art Institute';
		modalParagraph.innerHTML = `The Dayton Art Institute, founded in 1919, is one of the most well-known art institutes in the region. <span class="d-none d-sm-inline">Featuring special exhibits from around the world, as well as a permanent collection spanning 5,000 years of art history, the DAI is a must-see for any art enthusiast.</span> <span class="d-none d-md-inline">It also plays host to concerts as well as signature events such as the annual Art Ball and Oktoberfest.</span>`;
		museumSiteLink.href = 'http://www.daytonartinstitute.org/';
	} else if (e.target == airforceSection) {
		modalHeading.textContent = 'National Museum of the US Air Force';
		modalParagraph.innerHTML = `Dayton's National Museum of the US Air Force is the oldest and largest millitary aviation museum in the world. <span class="d-none d-sm-inline">Founded in 1923, the Air Force Museum has been a favorite for Daytonians and visitors alike for generations.</span> <span class="d-none d-md-inline">The museum contains many rare aircrafts and historical artifacts, including the Apollo 15 which orbited the Moon in 1971, as well as the Boeing B-20 that dropped the Fat Man atomic bomb during the last days of WWII.</span>`;
		museumSiteLink.href = 'https://www.nationalmuseum.af.mil/';
	} else if (e.target == boonshoftSection) {
		modalHeading.textContent = 'Boonshoft Museum of Discovery';
		modalParagraph.innerHTML = `The Boonshoft, a museum of science and technology, fosters a curiosity for natural history in all ages. <span class="d-none d-sm-inline">The museum houses Apollo Observatory, a planetarium with daily light shows, and an aquarium.</span> <span class="d-none d-md-inline">The museum also is home to Nesiur the Mummy, fossils, animal skeletons, and other archaeological artifacts. Come visit for some hands-on learning and fun!</span>`;
		museumSiteLink.href = 'https://www.boonshoftmuseum.org/';
	}
});

daiSection.addEventListener('click', fadeToBlack);
airforceSection.addEventListener('click', fadeToBlack);
boonshoftSection.addEventListener('click', fadeToBlack);

// Close Modal
const closeModal = function() {
	sidebar.style.backgroundImage = 'none';
	modalContent.style.opacity = '0';
	setTimeout(() => (sectionBackground.style.backgroundPosition = '100% 0'), 400);
	setTimeout(() => (sectionBackground.style.zIndex = 0), 800);
};

modalCloser.addEventListener('click', closeModal);
modalCloserSmall.addEventListener('click', closeModal);
