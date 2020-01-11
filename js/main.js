function applyNow() {

}

function checkValidation(ev){
  console.log(ev);
  if(ev.srcElement.nodeName === 'INPUT') {
    if(ev.currentTarget.value=='') {
      alert(ev.currentTarget.placeholder +' cannot be empty');
    }
  }else {
    if(ev.currentTarget.value=='NA') {
      alert(ev.currentTarget.name +' cannot be empty');
    }
  }

}



function openBlock(ev, idx) {
    var coll = document.getElementsByClassName("collapsible");
    for(i=0; i<coll.length;i++) {
        if(i===idx) {
            coll[idx].nextElementSibling.classList.toggle('active');
        }else {
            if(coll[i].nextElementSibling.classList.contains('active')){
                coll[i].nextElementSibling.classList.remove('active');
            }
        }
    }
}

function stickyFooter(ev) {
    console.log(ev);
    if(ev.currentTarget.scrollY > 380 ) {
       document.querySelector('footer').style.position = 'sticky';
       document.querySelector('footer').style.bottom = 0; 
    } else {
        document.querySelector('footer').style.position = 'relative';
    document.querySelector('footer').style.bottom = 0; 
    }
}

function gotToForm() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


var countDownDate = new Date("Jan 26, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="timecounter"
  document.getElementById("timecounter").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timecounter").innerHTML = "EXPIRED";
  }
}, 1000);