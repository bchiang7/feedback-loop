$(function() {
    $(".typed").typed({
        strings: ["There are two thermonuclear missiles headed straight for your ship", "Autopilot mechanisms have been severely damaged", "Engage manual override and navigate your ship to safety", "T-MINUS 60 SECONDS UNTIL IMPACT"],
        typeSpeed: 0,
        // time before typing starts
        startDelay: 2000,
        // backspacing speed
        backSpeed: 0,
        // time before backspacing
        backDelay: 1000,
        // loop
        loop: false,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: true
    });

    (function blink() {
        $('.blink').fadeOut(500).fadeIn(500, blink);
    })();

    // $("#intro-audio").on("timeupdate", function() {
    //     if (this.currentTime < 1) {
    //         $(this).stop().animate({volume: 1.0}, 1000);
    //     } else if (this.currentTime > 30) {
    //         $(this).stop().animate({volume: 0.0}, 1000);
    //     }
    // });

    setTimeout(function() {
        $('.hyperspeed-button').css('opacity', '1');
    }, 22000);

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

});
