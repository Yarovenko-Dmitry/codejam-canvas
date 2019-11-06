let pointLogo = document.querySelector('.point-logo');
let point4x4 = document.querySelector('.point-4x4');
let point32x32 = document.querySelector('.point-32x32');

pointLogo.addEventListener('click', function() {
  
  let canvas = document.querySelector('canvas');

  canvas.width = 512; 
  canvas.height = 512; 

  let ctx = canvas.getContext('2d');

  let imageCanvas = new Image();

  imageCanvas.src = './assets/png/logo-rss.png'; 

  imageCanvas.addEventListener('load', function() {
    ctx.drawImage(imageCanvas, 0, 0, 512, 512); 
  }, false);
});

point4x4.addEventListener('click', drawSomeImgCanvas.bind(null, './data/4x4.json', 128, '#'));
point32x32.addEventListener('click', drawSomeImgCanvas.bind(null, './data/32x32.json', 16, 'rgba'));

function drawSomeImgCanvas(routeData, scaleImg, colorModel) {

  let requestCanvas = new XMLHttpRequest();

  requestCanvas.open('GET', routeData);
  requestCanvas.responseType = 'json';
  requestCanvas.send();

  requestCanvas.onload = function() {

    let arrayCanvas = requestCanvas.response;
    let canvas = document.querySelector('canvas'); 
    let contextCanvas = canvas.getContext('2d');
    let width = arrayCanvas[0].length; 
    let height = arrayCanvas.length;
    let scale = scaleImg;  
    
    canvas.width = width * scale; 
    canvas.height = height * scale;

    for(let row = 0; row < height; row++) {
      for(let col = 0; col < width; col++) {
        if ( colorModel == '#' ) {
          contextCanvas.fillStyle = '#' + arrayCanvas[row][col];            
        } if (colorModel == 'rgba') {
          contextCanvas.fillStyle = 'RGB(' + arrayCanvas[row][col] +')';           
        } 
        contextCanvas.fillRect(col * scale, row * scale, scale, scale);
      }
    }
  }
}


