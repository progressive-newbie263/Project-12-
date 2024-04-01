const menuButton = document.querySelector('.js-menu-button');
const navMenu = document.querySelector('.nav-menu'); 
const closeButton = document.querySelector('.js-close-button'); // Add this line

menuButton.addEventListener('click', () => {
  navMenu.classList.add('active');
});

closeButton.addEventListener('click', () => {
  navMenu.classList.remove('active'); 
});