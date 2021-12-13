var audio1 = new Audio('./Fuck_no_baby.mp3');
var audio2 = new Audio('./Oh_hell_nah.mp3');
var audio3 = new Audio('./Oh_my_god.mp3');
var audio4 = new Audio('./Fuck_you.mp3');
var audio5 = new Audio('./Get_me_the_fuck_outta_there.mp3');
var audio6 = new Audio('./Oh_shit.mp3');

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
var fuckYou = document.getElementById('button4');
fuckYou.addEventListener('click', function() {
	audio4.play();
});
var getMeOut = document.getElementById('button5');
getMeOut.addEventListener('click', function() {
	audio5.play();
});
var ohShit = document.getElementById('button6');
ohShit.addEventListener('click', function() {
	audio6.play();
});
