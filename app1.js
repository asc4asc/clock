"use strict";  


(function () {
	function uhrzeit() {
		var now = new Date();
		putclock(now,outhtml1);
  		putclock(copy,outhtml2);
		setTimeout(uhrzeit, 500);
	}

	function putclock(date,target) {
          let h = date.getHours();
	  let m = date.getMinutes();
	  let s = date.getSeconds();

	  m = fuehrendeNull(m);
	  s = fuehrendeNull(s);
	  target.innerHTML = h + ':' + m + ':' + s;
	}
	
	function fuehrendeNull(zahl) {
		zahl = (zahl < 10 ? '0' : '') + zahl;
		return zahl;
	}
let outhtml1=document.querySelector("clock1");
let outhtml2=document.querySelector("clock2");
let copy=new Date();
    
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
