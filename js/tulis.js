function tulis() {
var kontenUtama = document.getElementById("utama");
kontenUtama.innerHTML = "Belum ada konten yaaa";
var aside = document.getElementById("pinggir");
aside.innerHTML = '<img src="zonk.png">';
}

function videoAudio(){
var kontenUtama = document.getElementById("utama");
kontenUtama.innerHTML = "<h2>SILAHKAN MENYIMAK!</h2><hr>" +
'<iframe width="560" height="315" src="https://www.youtube.com/embed/L3vYEOANFtE?si=dDcvlCOu9J91RSey" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
var listVideoH = document.getElementById("pinggir");
listVideoH.innerHTML = '<ul><li id="listVideoG">';

for(let i = 0;
i < 7;
i++){
listVideoG.innerHTML += "<li>" + dataVideo[i] + "</li>";
}
}