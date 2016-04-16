$(function() {
    // setTimeout(function(){window.location.href = "impact.html"}, 58500);
    // $('body').fadeIn(3000);

    //JS to make it work on single page/codepen
    var MainNav = $('.MainNav-Button');

    MainNav.on('mousedown', function() {
        var $this = $(this);
        $this.parent().find('.MainNav-Button').removeClass('MainNav-Button_LeftOfActive MainNav-Button_RightOfActive MainNav-Button_Active');
        $this.addClass('MainNav-Button_Active').prev().addClass('MainNav-Button_LeftOfActive');
        $this.next().addClass('MainNav-Button_RightOfActive');
    });

    MainNav.on('click', function(event) {
        event.preventDefault();
    });



    // for red switch
    $('.rocker-switch').click(function() {
        if ($(".rocker-switch").hasClass("switchLightOff")) {
            $(".rocker-switch").removeClass("switchLightOff"),
                $(".rocker-switch").addClass("switchLightOn"),
                $("#Wrapper").removeClass("dark"),
                $(".hole").removeClass("holeLightOff"),
                $(".hole").addClass("holeLightOn"),
                $(".handle").removeClass("handleLightOff"),
                $(".handle").addClass("handleLightOn"),
                $(".sk").addClass("on"),
                $(".handleTop").removeClass("handleTopLightOff"),
                $(".handleTop").addClass("handleTopLightOn"),
                $(".handleBottom").removeClass("handleBottomLightOff"),
                $(".handleBottom").addClass("handleBottomLightOn");
        } else {
            $(".rocker-switch").addClass("switchLightOff"),
                $("#Wrapper").addClass("dark"),
                $(".hole").removeClass("holeLightOn"),
                $(".hole").addClass("holeLightOff"),
                $(".handle").removeClass("handleLightOn"),
                $(".handle").addClass("handleLightOff"),
                $(".sk").removeClass("on"),
                $(".handleTop").removeClass("handleTopLightOn"),
                $(".handleTop").addClass("handleTopLightOff"),
                $(".handleBottom").removeClass("handleBottomLightOn"),
                $(".handleBottom").addClass("handleBottomLightOff");
        }
    });


    // toggle
    $('.toggle').click(function(e) {
        var toggle = this;

        e.preventDefault();

        $(toggle).toggleClass('toggle--on')
            .toggleClass('toggle--off')
            .addClass('toggle--moving');

        setTimeout(function() {
            $(toggle).removeClass('toggle--moving');
        }, 200)
    });


    // two switches

    $(".switch2").bind("click", function() {
        $(this).toggleClass("on");

        // if ($(this).index() == 0)
        //     $("body").toggleClass("radial");
        // else if ($(this).index() == 1)
        //     $("body").toggleClass("light");
    });


    // lever
    $('#arm').click(function(e) {
        var arm = $(this).addClass('clicked'),
            delay = setTimeout(function() {
                // arm.removeClass('clicked')
            }, 500);
        e.preventDefault();
    });



    // lever 2
    function setAngle(lever, angle) {
        $("arm", lever).css("transform", "rotateX(" + (-angle) + "deg)")
        $("end", lever).css("transform", "rotateX(" + angle + "deg)")
    }
    target = null;

    function mouseDown(e) {
        target = this;
        start = e;
        console.warn(e);
        if (!this.ang)
            this.ang = 0;
    }

    function mouseMove(e) {
        if (target) {
            var font = Number($(target).css("font-size").split("px")[0]);
            var max = font * 4;
            var pxchange = e.pageY - start.pageY;
            var ang = pxchange / max * 180 + target.ang;
            if (ang < 0) {
                ang = 0;
            }
            if (ang > 180) {
                ang = 180;
            }
            target.ang = ang;
            setAngle(target, target.ang);
            start = e;
        }
    }

    function mouseUp() {
        if (target) {
            target.ang = target.ang < 90 ? 0 : 180;
            target.state = target.ang < 90 ? false : true;
            setAngle(target, target.ang);
        }
        target = null;
    }
    $("lever").mousedown(mouseDown);
    $(document).mousemove(mouseMove).mouseup(mouseUp);



});
