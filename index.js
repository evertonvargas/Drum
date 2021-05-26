function sound(filepath){
    var audio = new Audio(filepath);
    audio.play()
}

function animationButton(key){
    var activeButton = document.querySelector(key);
    activeButton.classList.add("pressed");
    setTimeout(()=>{
        activeButton.classList.remove("pressed");
    },100)
}

function makeSound(key){
    switch(key){
        case "w":
            sound("sounds/tom-1.mp3");
            animationButton(".w")
        break;
        case "a":
            sound("sounds/tom-2.mp3");
            animationButton(".a")
        break;
        case "s":
            sound("sounds/tom-3.mp3");
            animationButton(".s")
        break;
        case "d":
            sound("sounds/tom-4.mp3");
            animationButton(".d")
        break;
        case "j":
            sound("sounds/snare.mp3");
            animationButton(".j")
        break;
        case "k":
            sound("sounds/crash.mp3");
            animationButton(".k")
        break;
        case "l":
            sound("sounds/kick-bass.mp3");
            animationButton(".l")
        break;
        default:
            console.log("Letra sem som")
    }
}

for(var i=0; i<document.querySelectorAll(".drum").length;i++){
     document.getElementsByClassName("drum")[i].addEventListener("click", function (){
        var button = this.innerHTML;
        makeSound(button);
     });    
 }

document.addEventListener("keydown", function(event){
    makeSound(event.key);
});

