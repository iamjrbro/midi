function playSound(idAudioElement) {
  const element = document.querySelector(idAudioElement);
  if(element && element.localName === 'audio'){
    element.play();
  } else{
    console.log('Element not found ou selector is invalid')
  }
}

//REPRODUCTON LIST

const keyList = document.querySelectorAll('.key');

for (let counter = 0; counter<keyList.length; counter++){
  const key = keyList[counter];
  const instrument = key.classList[1];
  const idAudio = `#som_${instrument}`;

  key.onclick = function(){
    playSound(idAudio);
  }
  key.onkeydown = function(event){
    key.classList.add('active');
  }
  key.onkeyup = function(){
    key.classList.remove('active')
  }
}