(function () {
    let div = document.getElementById('popup'),
        btn = document.getElementById('btn');

    function showDiv() {
        btn.style.display = 'none';
        div.style.display = 'block';
    }

    function redirecting() {
        window.location = 'https://www.google.bg/';
    }

    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, 2000);
    });

    function onError() {
        div.innerText = 'Opps.. an error pop up! Please refresh page and try again!';
    }

    function onClick() {
        showDiv();

        promise
            .then(redirecting)
            .catch(onError);
    }

    window.onload = btn.addEventListener('click', onClick, false);
} ());