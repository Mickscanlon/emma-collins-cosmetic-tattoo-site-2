(function () {
  'use strict';

  var nav = document.querySelector('.nav');
  var hamburger = nav && nav.querySelector('.nav__hamburger');
  var navLinks = nav && nav.querySelectorAll('.nav__link');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });
  }

  if (navLinks) {
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.addEventListener('click', function (e) {
    var anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    var id = anchor.getAttribute('href');
    if (id === '#') return;
    var target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}());
