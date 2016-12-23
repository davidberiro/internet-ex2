var h1 = document.createElement("h1");

document.getElementById("body").innerHTML = "LOGIN PAGE";

var form = document.createElement("form");

var input = document.createElement("input");
input.type = "text";
input.name = "user_name";
input.id = "user_name1";

form.appendChild(input);

document.getElementsByTagName('body')[0].appendChild(h1);
document.getElementsByTagName('h1')[0].appendChild(form);