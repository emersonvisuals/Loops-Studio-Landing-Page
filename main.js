
// menu variables 
const trigger = document.querySelector('#toggle-trigger');
const toggle = document.querySelector('#toggle');
const menu = document.querySelector('#mobile-menu');
const toggleActive = document.querySelector('#toggle.active');
const body = document.body;


// menu function
trigger.addEventListener('click', function(){
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
});

// images variables
const imageOne = document.querySelector('#section-02-image-01');
const imageTwo = document.querySelector('#section-02-image-02');
const imageThree = document.querySelector('#section-02-image-03');
const imageFour = document.querySelector('#section-02-image-04');
const imageFive = document.querySelector('#section-02-image-05');
const imageSix = document.querySelector('#section-02-image-06');
const imageSeven = document.querySelector('#section-02-image-07');
const imageEight = document.querySelector('#section-02-image-08');

// images functions
imageOne.addEventListener('mouseenter', function () {
    console.log('mouse entered');
    imageOne.classList.add('active');
});

imageOne.addEventListener('mouseleave', function() {
    console.log('mouse left');
    imageOne.classList.remove('active');
});


imageTwo.addEventListener('mouseenter', function () {
    console.log('mouse entered');
    imageTwo.classList.add('active');
});

imageTwo.addEventListener('mouseleave', function() {
    console.log('mouse left');
    imageTwo.classList.remove('active');
});


imageThree.addEventListener('mouseenter', function () {
    console.log('mouse entered');
    imageThree.classList.add('active');
});

imageThree.addEventListener('mouseleave', function() {
    console.log('mouse left');
    imageThree.classList.remove('active');
});

 
imageFour.addEventListener('mouseenter', function () {
    console.log('mouse entered');
    imageFour.classList.add('active');
});

imageFour.addEventListener('mouseleave', function() {
    console.log('mouse left');
    imageFour.classList.remove('active');
});


imageFive.addEventListener('mouseenter', function () {
    console.log('mouse entered');
    imageFive.classList.add('active');
});

imageFive.addEventListener('mouseleave', function() {
    console.log('mouse left');
    imageFive.classList.remove('active');
});


imageSix.addEventListener('mouseenter', function () {
    console.log('mouse entered');
    imageSix.classList.add('active');
});

imageSix.addEventListener('mouseleave', function() {
    console.log('mouse left');
    imageSix.classList.remove('active');
});


imageSeven.addEventListener('mouseenter', function () {
    console.log('mouse entered');
    imageSeven.classList.add('active');
});

imageSeven.addEventListener('mouseleave', function() {
    console.log('mouse left');
    imageSeven.classList.remove('active');
});


imageEight.addEventListener('mouseenter', function () {
    console.log('mouse entered');
    imageEight.classList.add('active');
});

imageEight.addEventListener('mouseleave', function() {
    console.log('mouse left');
    imageEight.classList.remove('active');
});



 


