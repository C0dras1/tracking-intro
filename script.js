const hamburger = document.getElementById('mobile-menu-btn');
const { body } = document;


hamburger.addEventListener('click', e => {
  e.preventDefault();
  body.classList.toggle('show-nav');
})
