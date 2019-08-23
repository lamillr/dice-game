var cWidth = 400;
var cHeight = 300;

var diceX = 50;
var diceY = 50;
var diceWidth = 100;
var diceHeight = 100;
var dotRadius = 6;
var ctx;

function init() {
    var ch = 1+Math.floor(Math.random()*6);
    drawface(ch);
}

function drawFace (n){
    ctx = document.getElementById('canvas').getContext('2d');
    ctx.lineWidth =5;
    ctx.clearRect(diceX,diceY,diceWidth, diceHeight);
    ctx. strokeRect(diceX,diceY,diceWidth, diceHeight);
    ctx.fillStyle = "#009966";
}

drawFace();