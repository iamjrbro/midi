const keyList = document.querySelectorAll('.key');


//functions

function playSoundPom(){
  document.querySelector('#sound_key_pom').play();
}

function playSoundClap(){
  document.querySelector('#sound_key_clap').play();
}

function playSoundTim(){
  document.querySelector('#sound_key_tim').play();
}

function playSoundPuff(){
  document.querySelector('#sound_key_puff').play();
}

function playSoundSplash(){
  document.querySelector('#sound_key_splash').play();
}

function playSoundToim(){
  document.querySelector('#sound_key_toim').play();
}

function playSoundPsh(){
  document.querySelector('#sound_key_psh').play();
}

function playSoundTic(){
  document.querySelector('#sound_key_tic').play();
}

function playSoundTom(){
  document.querySelector('#sound_key_tom').play();
}


//REPRODUCTON LIST
keysList[0].onclick = playSoundPom;
keyList[1].onclick = playSoundClap;
keyList[2].onclick = playSoundTim;
keyList[3].onclick = playSoundPuff;
keyList[4].onclick = playSoundToim;
keyList[5].onclick = playSoundPsh;
keyList[6].onclick = playSoundTic;
keyList[7].onclick = playSoundTom;


