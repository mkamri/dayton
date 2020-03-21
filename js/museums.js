// Define Variables
const sectionBackground = document.getElementById('js-background');
const daiSection = document.querySelector('.dai');
const airforceSection = document.querySelector('.airforce');
const boonshoftSection = document.querySelector('.boonshoft');
const modalCloser = document.getElementById('js-close-modal');
const modalContent = document.getElementById('modal-content');

// Fade to black
const fadeToBlack = function() {
	sectionBackground.style.zIndex = `998`;
	sectionBackground.style.backgroundPosition = `0 0`;
	setTimeout(() => (modalContent.style.opacity = '1'), 600);
};

document.addEventListener('click', function(e) {
	if (e.target == daiSection) {
		alert('DAI was clicked!');
	}
});

daiSection.addEventListener('click', fadeToBlack);
airforceSection.addEventListener('click', fadeToBlack);
boonshoftSection.addEventListener('click', fadeToBlack);

// Close Modal
const closeModal = function() {
	modalContent.style.opacity = '0';
	setTimeout(() => (sectionBackground.style.backgroundPosition = '100% 0'), 400);
	setTimeout(() => (sectionBackground.style.zIndex = 0), 800);
};

modalCloser.addEventListener('click', closeModal);
