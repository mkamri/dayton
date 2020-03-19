// Define Variables
const sectionBackground = document.getElementById('js-background');
const daiSection = document.querySelector('.dai');
const airforceSection = document.querySelector('.airforce');
const boonshoftSection = document.querySelector('.boonshoft');
const modalCloser = document.getElementById('js-close-modal');

// Fade to black
const fadeToBlack = function() {
  sectionBackground.style.zIndex = `998`;
  sectionBackground.style.backgroundPosition = `0 0`;
};

daiSection.addEventListener('click', fadeToBlack);
airforceSection.addEventListener('click', fadeToBlack);
boonshoftSection.addEventListener('click', fadeToBlack);

// Close Modal
const closeModal = function() {
  sectionBackground.style.backgroundPosition = `100% 0`;
  setTimeout(() => sectionBackground.style.zIndex = 0, 500);
}

modalCloser.addEventListener('click', closeModal);