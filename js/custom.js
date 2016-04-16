$(function() {
    (function blink() {
        $('.blink').fadeOut(500).fadeIn(500, blink);
    })();

    setTimeout(function() {
        $(".hyperspeed-button").fadeIn();
    }, 21000);

    var accelerate = document.getElementById("accelerate-audio");
    var emergency = document.getElementById("emergency-audio");
    var missile = document.getElementById("missile-audio");
    var portal = document.getElementById("portal-audio");
    var dialup = document.getElementById("dialup-audio");
    setTimeout(function() {
        accelerate.play();
        accelerate.animate({
            volume: 0.7
        }, 5000);
    }, 30000);
    setTimeout(function() {
        portal.play();
        portal.animate({
            volume: 1.0
        }, 5000);
    }, 40000);
    setTimeout(function() {
        dialup.play();
        dialup.animate({
            volume: 1.0
        }, 5000);
    }, 12000);

    // var n = 0;
    // setTimeout(countDown, 1000);
    //
    // function countDown() {
    //     n++;
    //     if (n > 0) {
    //         setTimeout(countDown, 1000);
    //     }
    //     console.log(n);
    // }

    setTimeout(function() {
        $('.countdown-wrapper').addClass('shake-constant shake-little');
    }, 10000);
    setTimeout(function() {
        $('.countdown-wrapper').addClass('shake-slow');
    }, 20000);
    setTimeout(function() {
        $('.countdown-wrapper').addClass('shake-rotate');
        $('.starfield').addClass('shake-constant shake-little');
    }, 30000);
    setTimeout(function() {
        $('.countdown-wrapper').addClass('shake-hard');
    }, 40000);
    setTimeout(function() {
        $('.countdown-wrapper').addClass('shake-crazy');
        $('.starfield').addClass('shake-hard');
    }, 47000);
    setTimeout(function() {
        $('.countdown-wrapper').addClass('shake-opacity');
    }, 57000);



    var time = 3000;

    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Burn the jets!";
    }, 1000);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Initiate both ailerons!";
    }, time);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Turn on gas turbine!";
    }, (time*2)+500);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Turn on anti-gravity mode!";
    }, time*3);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Switch into hypersonic speed!";
    }, time*4);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Pressurize the fuselage!";
    }, time*5);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Turn on flaps!";
    }, time*6);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Reel in the rudders!";
    }, time*7);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Set thrust to five!";
    }, time*8);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Revamp the compressor!";
    }, time*9);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Engage supersonic blast!";
    }, time*10);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Initiate zero-G aerodynamics!";
    }, time*11);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Steady the airfoils!";
    }, time*12);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Pressurize in the cockpit!";
    }, time*13);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Disengage the landing gear!";
    }, time*14);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Engage the fins!";
    }, time*15);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Release from Mach 1!";
    }, time*16);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Initiate nozzle exhausts!";
    }, time*17);
    setTimeout(function() {
        document.getElementById("instruction").innerHTML = "Brace yourself for a barrel roll!";
    }, time*18);



});
