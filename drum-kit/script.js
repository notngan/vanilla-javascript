function removeTransition(e){
	
	if(e.propertyName !== 'transform') return;
	
	this.classList.remove('playing');
}
function playAudio(e){
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

	let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	
	if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	
	key.classList.add('playing');

}

window.addEventListener('keydown', playAudio);

 const keys = Array.from(document.querySelectorAll('.key')); keys.forEach(key => key.addEventListener('transitionend', removeTransition));

///data-key="65"