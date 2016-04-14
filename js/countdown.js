TweenLite.defaultEase = Expo.easeOut;

initTimer("01:01"); // other ways --> "0:15" "03:5" "5:2"

var timerEl = document.querySelector('.timer');

function initTimer(t) {

    var self = this,
        timerEl = document.querySelector('.timer'),
        minutesGroupEl = timerEl.querySelector('.minutes-group'),
        secondsGroupEl = timerEl.querySelector('.seconds-group'),
        milliGroupEl = timerEl.querySelector('.milli-group'),

        minutesGroup = {
            firstNum: minutesGroupEl.querySelector('.first'),
            secondNum: minutesGroupEl.querySelector('.second')
        },

        secondsGroup = {
            firstNum: secondsGroupEl.querySelector('.first'),
            secondNum: secondsGroupEl.querySelector('.second')
        };

        milliGroup = {
            firstNum: milliGroupEl.querySelector('.first'),
            secondNum: milliGroupEl.querySelector('.second')
        };

    var time = {
        min: t.split(':')[0],
        sec: t.split(':')[1],
        milli: t.split(':')[2],
    };

    var timeNumbers;

    function updateTimer() {

        var timestr;
        var date = new Date();

        date.setHours(0);
        date.setMinutes(time.min);
        date.setSeconds(time.sec);
        date.setMilliseconds(time.milli);

        var newDate = new Date(date.valueOf() - 1000);
        var temp = newDate.toTimeString().split(" ");
        var tempsplit = temp[0].split(':');

        time.min = tempsplit[1];
        time.sec = tempsplit[2];

        timestr = time.min + time.sec;
        timeNumbers = timestr.split('');
        updateTimerDisplay(timeNumbers);

        if (timestr === '0000')
            countdownFinished();

        if (timestr != '0000')
            setTimeout(updateTimer, 1000);

    }

    function updateTimerDisplay(arr) {

        animateNum(minutesGroup.firstNum, arr[0]);
        animateNum(minutesGroup.secondNum, arr[1]);
        animateNum(secondsGroup.firstNum, arr[2]);
        animateNum(secondsGroup.secondNum, arr[3]);

    }

    function animateNum(group, arrayValue) {

        TweenMax.killTweensOf(group.querySelector('.number-grp-wrp'));
        TweenMax.to(group.querySelector('.number-grp-wrp'), 1, {
            y: -group.querySelector('.num-' + arrayValue).offsetTop
        });

    }

    setTimeout(updateTimer, 1000);

}

function countdownFinished() {
    // setTimeout(function() {
    //     TweenMax.set(reloadBtn, {
    //         scale: 0.8,
    //         display: 'block'
    //     });
    //     TweenMax.to(timerEl, 1, {
    //         opacity: 0.2
    //     });
    //     TweenMax.to(reloadBtn, 0.5, {
    //         scale: 1,
    //         opacity: 1
    //     });
    // }, 1000);
}
