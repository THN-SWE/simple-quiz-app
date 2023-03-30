var mins = 2;
var secs = mins * 60;
function countdown() {
  setTimeout("Decrement()", 1000);
}
function Decrement() {
    minutes.style.color = "blue";
    seconds.style.color = "blue";
  if (document.getElementById) {
    minutes = document.getElementById("minutes");
    seconds = document.getElementById("seconds");
    if (seconds < 59) {
      seconds.value = secs;
    } else {
      minutes.value = getminutes();
      seconds.value = getseconds();
    }
    if (mins < 1) {
      minutes.style.color = "red";
      seconds.style.color = "red";
  
    }
 
    
    if (mins < 0) {
      alert("time up");
      minutes.value = 0;
      seconds.value = 0;
    } else {
      secs--;
      setTimeout("Decrement()", 1000);
    }
  }
}

function getminutes() {
  mins = Math.floor(secs / 60);
  return mins;
}

function getseconds() {
  return secs - Math.round(mins * 60);
}

function getAns(){

  answer = "ef"

    const a = document.querySelector('#one');
    const b = document.querySelector('#two');
    const c = document.querySelector('#three');
    const d = document.querySelector('#four');

    if(a.checked){
        answer = "a"
        clearInterval(my)
       
    }
    if(b.checked){
        answer = "b"
        clearInterval(my)

    }
    if(c.checked){
        answer = "c"
        clearInterval(my)

    }
    if(d.checked){
        answer = "d"
        clearInterval(my)

    }

    return answer
}

function clickSubmit(){
    console.log(answer)
}
my = setInterval("getAns()", 1000)

