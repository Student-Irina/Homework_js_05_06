(function () {
var ms = 0, ss = 0, mm = 0, hh = 0; 

ss = '0' + ss;
mm = '0' + mm;
hh = '0' + hh;
var count = 0;
var timerId;
var milisec = document.querySelector('.milisec-right');
var main_time = document.querySelector('.main-time');
var btn_start = document.getElementById("btn-start");

function startTimer() {

  ms++;

  milisec.innerHTML = ms;

    if (ms === 1000) {
       ms = 0;
       ss++;

       if ( ss < 10 ) { 
       	ss = '0' + ss;
       }

       main_time.innerHTML = hh + ':' + mm + ':' + ss;
    }

    if ( ss === 60 ) {
       ss = 0;
       mm++;

       if ( mm < 10 ) { 
       	mm = '0' + mm;
      }


       main_time.innerHTML = hh + ':' + mm + ':' + ss;
    }

    if ( mm === 60 && ss === 60) {
       ss = 0;
       mm = 0;
       ss = '0' + ss;
       mm = '0' + mm;
       hh++;

       if ( hh < 10 ) { 
       	hh = '0' + hh;
       }

       main_time.innerHTML = hh + ':' + mm + ':' + ss;
    }

      if ( hh === 24 && mm === 60 && ss === 60) {
       ss = 0;
       mm = 0;
       hh = 0;
       
       ss = '0' + ss;
       mm = '0' + mm;
       hh = '0' + hh;

       main_time.innerHTML ='00:00:00';
    }
};

function start() { 
	count++;

    if ( count === 1 ) {

	  btn_start.innerHTML = "Stop"; 
    btn_start.classList.remove('btn-success');
	  btn_start.classList.add('btn-info');
	  timerId = setInterval(startTimer,1);

    } else {

	   clearInterval(timerId);
     btn_start.innerHTML = "Start"; 
	   btn_start.classList.remove('btn-info');
	   btn_start.classList.add('btn-success');
	   count = 0;

	}
};

function clear() {
	 clearInterval(timerId);
	  count = 0;
	  ss = 0;
    mm = 0;
    hh = 0;
    ms = 0;
      
    ss = '0' + ss;
    mm = '0' + mm;
    hh = '0' + hh;

    milisec.innerHTML = ms;

    main_time.innerHTML ='00:00:00';

   
    btn_start.innerHTML = "Start"; 
    btn_start.classList.remove('btn-info');
	  btn_start.classList.add('btn-success');

};

document.getElementById('btn-start').addEventListener('click',start);
document.getElementById('btn-clear').addEventListener("click",clear);
}) ();
