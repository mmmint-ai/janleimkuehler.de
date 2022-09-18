// Mobile menu
var menuToggle = document.querySelectorAll('.menu-toggle');

for (var i = 0; i < menuToggle.length; i++) {
  menuToggle[i].addEventListener('click', function (e) {
    document.body.classList.toggle('menu--opened');
    e.preventDefault();
  }, false);
}

document.body.classList.remove('menu--opened');

window.addEventListener('resize', function () {
  if (menuToggle.offsetParent === null) {
    document.body.classList.remove('menu--opened');
  }
}, true);

// Accordion
var accordions = document.querySelectorAll('.faq-accordion');
Array.from(accordions).forEach((accordion) => {
  var ba = new BadgerAccordion(accordion, {
    headerClass: '.accordion-trigger',
    panelClass: '.accordion-panel',
    panelInnerClass: '.accordion-content',
    openMultiplePanels: true
  });
});

// CTA Buttons
var cta = document.querySelectorAll('.cta-button');
Array.from(cta).forEach((cta) => {
  // Add event listener to track CTA event.
  cta.addEventListener('click', function (e) {
    e.preventDefault();
    try {
      // Parse the a tag inner HTML as  a label
      var label = e.target.innerHTML || '';
      gtag('event', 'cta', { 'event_category': 'engagement', 'event_label': label });
    } finally {
      // Redirect to the href that was prevented
      window.location = e.target.href;
    }
  }, false);
});