(function() {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({id: 5, decription: 'some data'})
            // reject('something very bad happened')
        }, 2000);
    });

    promise
        .then(function(data) {
            console.log(data);
        })
        .catch(function(error) {
            console.log(error);
        });
}());

/////////////////////////////////

(function() {
    function getOrder(orderId) {
        //return Promise.reject('no connection!');
        return Promise.resolve({userId:35});
    }
    function getUser(userId) {
        //return Promise.reject('no connection!');
        return Promise.resolve({companyId:18});
    }
    function getCompany(companyId) {
        //return Promise.reject('no connection!');
        return Promise.resolve({name:'Telerik Academy'});
    }

    getOrder(3).then(function(order){
            return getUser(order.userId);
        }).then(function(user){
            return getCompany(user.companyId);
        }).then(function(company){
            console.log(company.name);
        }).catch(function(error){
            console.log(error);
        });
}());

////////////////////////////////

(function() {
    var promise1, promise2;
    promise1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('one');
        }, 3000);
    });

    promise2 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(promise1);
        }, 2000);
    });

    promise2.then(function (data) {
        console.log(data); // 'one'
    });
}());

///////////////////////////////////////

(function() {
    var promise1, promise2;

    promise1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('from promise 1');
        }, 2000);
    });

    promise2 = new Promise(function (resolve, reject) {
        resolve('from promise 2');
    });

    Promise.all([promise1, promise2])
        .then(function (results) {
            // results is an array of the responses
            console.log(results);
        });
}());

//////////////////////////////////////////

(function() {
    function getCourse(courseId) {
        var courses = {
            1: { name: 'JavaScript Fundamentals'},
            2: { name: 'JavaScript OOP'},
            3: { name: 'JavaScript UI & DOM'},
            4: { name: 'JavaScript Applications'},
        };
        return Promise.resolve(courses[courseId]);
    }

    var courseIds = [1,2,3,4];
    var promises = [];
    for (var i=0;i<courseIds.length;i+=1) {
        promises.push(getCourse(courseIds[i]));
    }

    Promise.race(promises)
        .then(function(values) {
            console.log(values);
        })
}());

////////
get('users.all')
    .then(function(usersString){
        return JSON.parse(usersString);
    })
    .then(function(users){
        myController.users = users;
    })

//or
get('users.all')
    .then(JSON.parse)
    .then((users) => {
        myController.users = users;
    })

/////
var usersPromise = get('users.all');
var postsPromise = get('posts.everyone');

Promise.all([usersPromise, postsPromise])
    .then(function(results){
        myController.users = ressilts[0];
        myController.posts = results[1];
    })
    .catch(function(){
        delete myController.users;
        delete myController.posts;
    })
