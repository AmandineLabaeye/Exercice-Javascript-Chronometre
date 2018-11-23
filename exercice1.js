// Make it count up on a timer, calling this function
var seconds = document.getElementById("seconds");
var time = 0;
var count;
var countUp = function() {

    seconds.innerHTML = time++;
    console.log(seconds);
    count = setTimeout(countUp, 1000);

};

countUp();


// How can you make it stop counting?
var stopCountUp = function() {

    clearTimeout(count);

};

var stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

