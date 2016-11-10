/* globals XMLHttpRequest console*/

//1.Create xhr
//2.Open xhr to url and verb
//3.Setup(add headers)
//4.Attach to ready event
//5.Send the request

var url = "";

function sendHttpRequest(serviceUrl, method, body, callback){
    var xhr = new XMLHttpRequest();

xhr.open(method, seriviceUrl, true);

xhr.onreadystatechange = function(){
    //console.log(`State: ${xhr.readyState}`);
    if(xhr.readyState !== XMLHttpRequest.DONE){
        return;
    }

    // if(200 <= xhr.status < 300){

    // }

    switch(0 | (xhr.status / 100)){
        case 2: callback(JSON.parse(xhr.responseText));
                break;
        case 4:
        case 5:
            alert(xhr.responseText);
            break;
    }
    console.log(xhr.responseText);
};

xhr.send(body);
}

function getAll(){
    // //$.getJSON("", function(response){
    //     var people = resonse.data;
    // })
sendHttpRequest(url, "GET", null, function(data){
                var people = data;
                var itemTemplate = document.createElement("li");
                var list = document.createElement("ul");

                people.forEach(person => {
                    var li = itemTemplate.cloneNode(true);
                    li.innerHTML = person.name;
                    list.appendChild(li);
                });

                document.getElementById("print").innerHTML = "";
                document.getElementById("print").appendChild(list);
});
}

// var xhr = new XMLHttpRequest();

// xhr.open("GET", url, true);

// xhr.onreadystatechange = function(){
//     //console.log(`State: ${xhr.readyState}`);
//     if(xhr.readyState !== XMLHttpRequest.DONE){
//         return;
//     }

//     // if(200 <= xhr.status < 300){

//     // }

//     switch(0 | (xhr.status / 100)){
//         case 2: console.log(xhr.responseText);
//                 var people = JSON.parse(xhr.responseText).data;
//                 var itemTemplate = document.createElement("li");
//                 var list = document.createElement("ul");

//                 people.forEach(person => {
//                     var li = itemTemplate.cloneNode(true);
//                     li.innerHTML = person.name;
//                     list.appendChild(li);
//                 });

//                 document.getElementById("print").appendChild(list);
//                 break;
//         case 4:
//         case 5:
//             alert(xhr.responseText);
//             break;
//     }
//     console.log(xhr.responseText);
// };

// xhr.send();
// }

function addNew(){
    var name = "John",
        age = Math.random() * 150;

        // $.ajax({
        //     url: "",
        //     method: "POST",
        //     "contentType": "application/json",
        //     data: JSON.stringify({name, age}),
        //     header: {

        //     },
        //     success: function(){
        //         getAll();
        //     }
        // });
    
    sendHttpRequest(url, "POST", {name, age}, function(){
        getAll();
    });

//     var xhr = new XMLHttpRequest();

// xhr.open("POST", url, true);

// //Setup Important!
// xhr.setRequestHeader("Content-Type", "application/json");

// xhr.onreadystatechange = function(){
//     //console.log(`State: ${xhr.readyState}`);
//     if(xhr.readyState !== XMLHttpRequest.DONE){
//         return;
//     }

//     // if(200 <= xhr.status < 300){

//     // }

//     switch(0 | (xhr.status / 100)){
//         case 2: 
//                 getAll();
//                 break;
//         case 4:
//         case 5:
//             alert(xhr.responseText);
//             break;
//     }
//     console.log(xhr.responseText);
// };

// var body = JSON.stringify({
//     name, 
//     age
// });

// xhr.send(body);
// }

var btn;
window.onload = function(){
    getAll();
    btn = document.getElementById("btn-add");
    btn.addEventListener("click", function(){
        addNew();
    });
};
