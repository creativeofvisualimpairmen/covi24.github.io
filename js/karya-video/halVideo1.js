function video1(){
var viewHal1 = document.getElementById("listKarya");
viewHal1.innerHTML = "";
for(let i = 0;
i < 10;
i++){
viewHal1.innerHTML += "<li>" + dataVideo[i] + "</li>";
}
}

function video2(){
var viewHal1 = document.getElementById("listKarya");
viewHal1.innerHTML = "";
for(let i = 10;
i < 20;
i++){
viewHal1.innerHTML += "<li>" + dataVideo[i] + "</li>";
}
}
