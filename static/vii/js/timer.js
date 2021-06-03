// Padding function
function pad (str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
  }

// Set the date we're counting down to
var countDownDate = new Date("Feb 27, 2021 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the target date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// Output the result in an element with id="timer"
//Need to do some interesting acrobats to get the padding to work

document.getElementById("timer").innerHTML = pad(days, 2) + " | " + pad(hours, 2) + " | " + pad(minutes, 2) + " | " + pad(seconds, 2)
    + '<font size="2.45rem"> <br/> Days &nbsp |&nbsp  &nbsp &nbsp Hr &nbsp  &nbsp | &nbsp &nbsp Min &nbsp | &nbsp Sec &nbsp  </font><br/><br/>' +
    " Until hacking begins!";


// If the count down is over, write some text 
if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "WOHOO! HACKING HAS BEGUN!";
}
}, 1000);