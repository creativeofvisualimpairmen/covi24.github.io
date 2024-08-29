if (dataVideo.length > 10){
document.write('Halaman' +
'<a onclick="video1()">1,</a>' +
'<a onclick="video2()">2, </a>')
}
else {
var halAside = document.getElementById('halSide');
halAside.style.display = 'none';
}
