(function() {
    let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(getDomElement());
            }, 1000);
            
        });

        function getDomElement() {
            let popup = document.getElementsByClassName('popup-msg')[0];

            return popup;
        }

        function toggleClassVissible(domElement) {
            domElement.classList += ' vissible';
        }

        function redirect() {
            setTimeout(() => {
                window.location = "http://www.telerikacademy.com";
            }, 2000);
        }

        promise
            .then(toggleClassVissible)
            .then(redirect);

}());