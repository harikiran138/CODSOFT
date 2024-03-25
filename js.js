/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => { // Use addEventListener for click
  menuIcon.classList.toggle('bx-x');  // Toggle class for menu icon
  navbar.classList.toggle('active');   // Toggle class for navbar animation
});

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section'); // Select all sections
let navLink = document.querySelectorAll('header nav a');  // Select all links

window.addEventListener('scroll', () => {  // Use addEventListener for scroll
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150; // Adjust offset as needed
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLink.forEach(links => {
        links.classList.remove('active');  // Remove active class from all links
      });
      document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Add active class to matching link
    }
  });
});

/*==================== sticky navbar ====================*/
let header = document.querySelector('header');

window.addEventListener('scroll', () => { // Use addEventListener for scroll
  header.classList.toggle('sticky', window.scrollY > 100); // Toggle sticky class on scroll
});

/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
navLink.forEach(link => {
  link.addEventListener('click', () => { // Add click event listener to each link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  });
});

/*==================== scroll reveal ================*/
const sr = ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .servicrs-container, .portfolio-box, .contact form', { origin: 'bottom' });
sr.reveal('.home-content h1, .about-img', { origin: 'left' });
sr.reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text',{
  strings: [' frontend developer', ' youtuber', ' blogger'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
