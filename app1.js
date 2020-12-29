"use strict";  

(function () {
	function uhrzeit() {
		var jetzt = new Date(),
			h = jetzt.getHours(),
			m = jetzt.getMinutes(),
			s = jetzt.getSeconds();
		putclock(jetzt,tmp1);
		m = fuehrendeNull(m);
		s = fuehrendeNull(s);
		// tmp1.innerHTML = h + ':' + m + ':' + s;
		setTimeout(uhrzeit, 500);
	}

	function putclock(date,target) {
          h = date.getHours();
	  m = date.getMinutes();
	  s = date.getSeconds();

	  m = fuehrendeNull(m);
	  s = fuehrendeNull(s);
	  target.innerHTML = h + ':' + m + ':' + s;
	}
	
	function fuehrendeNull(zahl) {
		zahl = (zahl < 10 ? '0' : '') + zahl;
		return zahl;
	}
let tmp1=document.querySelector("clock");
document.addEventListener('DOMContentLoaded', uhrzeit);
}());




(function () {
  let i=1;
  let tmp=document.querySelector("body");
  tmp.style.backgroundColor = "blue";

  document.body.addEventListener("click", event => {
    if (i == 1) {
      tmp.style.backgroundColor = "green"; i=0; 
    } else {
      tmp.style.backgroundColor = "yellow"; i=1; 
      openFullscreen();
    }
  });
}());

var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
