let canvas = document.querySelector("canvas");

canvas.width = 512; 
canvas.height = 512; 

let ctx = canvas.getContext('2d');
let imageCanvas = document.getElementById('source');

ctx.drawImage(imageCanvas, 1, 1, 512, 512);