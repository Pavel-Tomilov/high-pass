// Main JavaScript file
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var toggleMenu = document.querySelector('.burger');
  var menu = document.querySelector('.nav');
  toggleMenu.addEventListener('click', function () {
    this.classList.toggle('active');
    menu.classList.toggle('open');

    // Блокировка прокрутки страницы
    if (menu.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // Закрытие меню при клике на ссылку
  var navLinks = document.querySelectorAll('.nav__item-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      toggleMenu.classList.remove('active');
      menu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
});