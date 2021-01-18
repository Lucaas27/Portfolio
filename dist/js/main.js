'use strict';

(() => {
    // Get DOM items
    const navBtn = document.querySelector('.nav-btn');
    const nav = document.querySelector('.nav');
    const navPic = document.querySelector('.nav-picture');
    const navLinks = document.querySelector('.nav-links');
    const link = document.querySelectorAll('.link'); 

    navBtn.addEventListener('click', toggleNav);

    function toggleNav() {
        navBtn.classList.toggle('btn-active');
        nav.classList.toggle('menu');
        navPic.classList.toggle('menu');
        navLinks.classList.toggle('menu');
        link.forEach(link=>link.classList.toggle('menu'));
    };
})();