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
    $(function() {
        $('.switch').click(function() {
            if ($(".switch").hasClass("switchLightOff")) {
                $(".switch").removeClass("switchLightOff"),
                    $(".switch").addClass("switchLightOn"),
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
                $(".switch").addClass("switchLightOff"),
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
                arm.removeClass('clicked')
            }, 500);
        e.preventDefault();
        spin();
    });


});
