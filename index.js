// function handelClick(){
//     alert("I got Clicked!")
// };

// document.querySelector("button").addEventListener("click", handelClick);


//Anonymous Function- function dont have function name
// document.querySelector("button").addEventListener("click", function (){
//     alert("I got Clicked!")
// });

//Section 1: Detecting Button Press
var numberOfDrumButton = document.querySelectorAll(".drum").length;

//lopp is used //;



for(var i = 0; i < numberOfDrumButton ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerhtml = this.innerHTML;

    makeSound(buttonInnerhtml);

    buttonAnimation(buttonInnerhtml);
            
})};

////Section 2: Detecting Key board Press

document.addEventListener("keydown", function (event){

    makeSound(event.key);

    buttonAnimation(event.key);
})

function makeSound (key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();            
            break;

            case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
            break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
            break;

            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
            break;

            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
            break;

            case "l":
                var kickbass = new Audio("sounds/kick-bass.mp3");
                kickbass.play();
            break;
            
            
        default:
            console.log(buttonInnerhtml);            
    }

};

function buttonAnimation (currentKey) {
   var activeButton = document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   },100);
}

//Start i from 0 and end when i < than numberOfdumButton and increment i for one each time//
// Step 1 : Function and document
//  Step 2 : For Looping  


