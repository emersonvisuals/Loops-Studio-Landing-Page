const toggle = document.querySelector('#toggle');
const menu = document.querySelector('#mobile-menu');

console.log(menu);

toggle.onclick = function() {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
}

