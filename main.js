
// variables 
const trigger = document.querySelector('#toggle-trigger');
const toggle = document.querySelector('#toggle');
const menu = document.querySelector('#mobile-menu');
const toggleActive = document.querySelector('#toggle.active');
const body = document.body;

trigger.addEventListener('click', function(){
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
});

