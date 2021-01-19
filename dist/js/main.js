'use strict';

(() => {
    // Get DOM items
    const navBtn = document.querySelector('.nav-btn');
    const nav = document.querySelector('.nav');
    const navPic = document.querySelector('.nav-picture');
    const navLinks = document.querySelector('.nav-links');
    const link = document.querySelectorAll('.link'); 
    const active = document.querySelector('.active')


    function toggleNav() {
        navBtn.classList.toggle('btn-active');
        nav.classList.toggle('menu');
        navPic.classList.toggle('menu');
        navLinks.classList.toggle('menu');
        link.forEach(link=>link.classList.toggle('menu'));
    };

    //Toggle the navbar with links when btn is clicked
    navBtn.addEventListener('click', toggleNav);

    link.addEventListener('click', evt => {
        //check if active class exists to avoid null
        active ? evt.target.classList.remove('active') : evt.target.classList.add('active');
    }
    )
    
})();