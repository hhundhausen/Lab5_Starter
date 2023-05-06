// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelected = document.getElementById("horn-select"); 
  var sound = new Audio(); 
  const jsConfetti = new JSConfetti()

  hornSelected.addEventListener("change", (event) =>{
    if(document.getElementById("horn-select").value == 'air-horn') { 
      document.body.querySelector("img").src = "assets/images/air-horn.svg"; 
      sound.src = 'assets/audio/air-horn.mp3';
    }

    if(document.getElementById("horn-select").value == 'car-horn') {
      document.body.querySelector("img").src = "assets/images/car-horn.svg";
      sound.src = 'assets/audio/car-horn.mp3';
    }

    if(document.getElementById("horn-select").value == 'party-horn') {
      document.body.querySelector("img").src = "assets/images/party-horn.svg";
      sound.src = 'assets/audio/party-horn.mp3';
    }
  }); 
  
  const volume1 = document.getElementById("volume"); 

  volume.addEventListener("change", (event) =>{
    if(volume1.value  == 0)
      document.body.querySelector("div img").src = "assets/icons/volume-level-0.svg";
    
    if(volume1.value >= 1 && volume.value < 33) 
      document.body.querySelector("div img").src = "assets/icons/volume-level-1.svg"; 
    
    if(volume1.value >= 33 && volume.value < 67) 
      document.body.querySelector("div img").src = "assets/icons/volume-level-2.svg"; 
    
    if(volume1.value >= 67) 
      document.body.querySelector("div img").src = "assets/icons/volume-level-3.svg"; 

  }); 

  const soundButton = document.querySelector("button"); 
  soundButton.addEventListener("click", (event) =>{
    sound.volume = volume1.value /100; 
    if(document.getElementById("horn-select").value == 'party-horn')
     jsConfetti.addConfetti()
    sound.play(); 
  }); 

} 


 