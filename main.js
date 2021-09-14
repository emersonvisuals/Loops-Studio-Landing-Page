const trigger = document.querySelector('#toggle-trigger');
const toggle = document.querySelector('#toggle');
const menu = document.querySelector('#mobile-menu');



console.log(trigger);

trigger.onclick = function() {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
}

