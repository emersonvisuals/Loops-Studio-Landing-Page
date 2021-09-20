
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

// image variables
let imageOne = document.querySelector('#section-02-image-01');
let imageTwo = document.querySelector('#section-02-image-02');
let imageThree = document.querySelector('#section-02-image-03');
let imageFour = document.querySelector('#section-02-image-04');
let imageFive = document.querySelector('#section-02-image-05');
let imageSix = document.querySelector('#section-02-image-06');
let imageSeven = document.querySelector('#section-02-image-07');
let imageEight = document.querySelector('#section-02-image-08');

let imageOneText = document.querySelector('#section-02-image-01 h1');
let imageTwoText = document.querySelector('#section-02-image-02 h1');
let imageThreeText = document.querySelector('#section-02-image-03 h1');
let imageFourText = document.querySelector('#section-02-image-04 h1');
let imageFiveText = document.querySelector('#section-02-image-05 h1');
let imageSixText = document.querySelector('#section-02-image-06 h1');
let imageSevenText = document.querySelector('#section-02-image-07 h1');
let imageEightText = document.querySelector('#section-02-image-08 h1');

let btn = document.querySelector('button.see-all');
let mainBody = document.body;



// Desktop Hovers
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








// Mobile Clicks

imageOne.onclick = function() {
    imageOne.classList.add('click');
}

imageTwo.onclick = function () {
    imageTwo.classList.add('click');
}

imageThree.onclick = function () {
    imageThree.classList.add('click');
}

imageFour.onclick = function () {
    imageFour.classList.add('click');
}

imageFive.onclick = function() {
    imageFive.classList.add('click');
}

imageSix.onclick = function() {
    imageSix.classList.add('click');
}

imageSeven.onclick = function() {
    imageSeven.classList.add('click');
}

imageEight.onclick = function() {
    imageEight.classList.add('click');
}


// Toggle Clicks Mobile
document.onclick = function(clickEvent) {
    if(clickEvent.target == imageOne || clickEvent.target == imageOneText) {
        imageTwo.classList.remove('click');
        imageThree.classList.remove('click');
        imageFour.classList.remove('click');
        imageFive.classList.remove('click');
        imageSix.classList.remove('click');
        imageSeven.classList.remove('click');
        imageEight.classList.remove('click');
    }

    else if (clickEvent.target == imageTwo || clickEvent.target == imageTwoText) {
        imageOne.classList.remove('click');
        imageThree.classList.remove('click');
        imageFour.classList.remove('click');
        imageFive.classList.remove('click');
        imageSix.classList.remove('click');
        imageSeven.classList.remove('click');
        imageEight.classList.remove('click');
    }

    else if (clickEvent.target == imageThree || clickEvent.target == imageThreeText) {
        imageOne.classList.remove('click');
        imageTwo.classList.remove('click');
        imageFour.classList.remove('click');
        imageFive.classList.remove('click');
        imageSix.classList.remove('click');
        imageSeven.classList.remove('click');
        imageEight.classList.remove('click');
    }

    else if (clickEvent.target == imageFour || clickEvent.target == imageFourText) {
        imageOne.classList.remove('click');
        imageTwo.classList.remove('click');
        imageThree.classList.remove('click');
        imageFive.classList.remove('click');
        imageSix.classList.remove('click');
        imageSeven.classList.remove('click');
        imageEight.classList.remove('click');
    }

    else if (clickEvent.target == imageFive || clickEvent.target == imageFiveText) {
        imageOne.classList.remove('click');
        imageTwo.classList.remove('click');
        imageThree.classList.remove('click');
        imageFour.classList.remove('click');
        imageSix.classList.remove('click');
        imageSeven.classList.remove('click');
        imageEight.classList.remove('click');
    }

    else if (clickEvent.target == imageSix || clickEvent.target == imageSixText) {
        imageOne.classList.remove('click');
        imageTwo.classList.remove('click');
        imageThree.classList.remove('click');
        imageFour.classList.remove('click');
        imageFive.classList.remove('click');
        imageSeven.classList.remove('click');
        imageEight.classList.remove('click');
    }

    else if (clickEvent.target == imageSeven || clickEvent.target == imageSevenText) {
        imageOne.classList.remove('click');
        imageTwo.classList.remove('click');
        imageThree.classList.remove('click');
        imageFour.classList.remove('click');
        imageFive.classList.remove('click');
        imageSix.classList.remove('click');
        imageEight.classList.remove('click');
    }

    else if (clickEvent.target == imageEight || clickEvent.target == imageEightText) {
        imageOne.classList.remove('click');
        imageTwo.classList.remove('click');
        imageThree.classList.remove('click');
        imageFour.classList.remove('click');
        imageFive.classList.remove('click');
        imageSix.classList.remove('click');
        imageSeven.classList.remove('click');
    }

    else if (clickEvent.target == btn) {
        imageOne.classList.remove('click');
        imageTwo.classList.remove('click');
        imageThree.classList.remove('click');
        imageFour.classList.remove('click');
        imageFive.classList.remove('click');
        imageSix.classList.remove('click');
        imageSeven.classList.remove('click');
        imageEight.classList.remove('click');
    }
}




