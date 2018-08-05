var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
  for (var i = 1; i<=5; i++){
    var newImage = document.createElement('img');
    newImage.setAttribute('src', 'images/pic'+[i]+'.jpg');
    thumbBar.appendChild(newImage); 
	newImage.onclick = function(e){
		displayImg(e.target.getAttribute('src'));
	}
  }
  
  function displayImg(imgSrc){
    
	displayedImage.setAttribute('src',imgSrc);
	
  }
  
  
  
/* Wiring up the Darken/Lighten button */

function setOverlay(){
  var classname = btn.getAttribute('class');
  if (classname === 'dark'){
	  btn.setAttribute('class','light');
	  btn.textContent = 'Lighten';
	  overlay.setAttribute('style','background-color: rgba(0,0,0,0.5');
  } else {
	  btn.setAttribute('class','dark');
	  btn.textContent = 'Darken';
	  overlay.setAttribute('style','background-color: rgba(0,0,0,0');
  }
}
btn.onclick = setOverlay;
