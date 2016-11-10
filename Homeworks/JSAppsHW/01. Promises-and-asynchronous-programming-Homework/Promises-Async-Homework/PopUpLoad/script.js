window.onload = redirect;

function redirect() {
    var message = document.createElement("div");
    message.innerText = "Shameless promotion! Changed timeout to 5 secons so that it is more visible!";
    message.classList += "promo";
    document.body.appendChild(message);

    var redirectPromise = new Promise(function (resolve, reject) {
        window.setTimeout(function () {
             window.location.href = 'http://speedrun.com/sotn';
        }, 2000);
    });

    redirectPromise
        .then(function () {
        })
        .catch(function (error) {
            console.log(error);
        });
}