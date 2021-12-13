var audio1 = new Audio('./Fuck_no_baby.mp3');
var audio2 = new Audio('./Oh_hell_nah.mp3');
var audio3 = new Audio('./Oh_my_god.mp3');

var buttonFuckNo = document.getElementById('button1');
buttonFuckNo.addEventListener('click', function() {
	audio1.play();
});
var hellNah = document.getElementById('button2');
hellNah.addEventListener('click', function() {
	audio2.play();
});
var ohMyGod = document.getElementById('button3');
ohMyGod.addEventListener('click', function() {
	audio3.play();
});
