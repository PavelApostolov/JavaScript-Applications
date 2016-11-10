(function(){
    function pause(delay) {
        setTimeout(function(){
            console.log('paused for ' + delay + 'ms');
        }, delay);
    }

    console.log('start');
    var delay = 2000;

    setTimeout(() => {
        console.log('paused for ' + delay + 'ms');
        console.log('middle 1');

        setTimeout(() => {
            console.log('paused for ' + delay + 'ms');
            console.log('middle 2');

         setTimeout(() => {
            console.log('paused for ' + delay + 'ms');
            console.log('end');
        }, delay);
      }, delay);
    }, delay);

}());