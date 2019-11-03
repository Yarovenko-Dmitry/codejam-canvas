let pointLogo = document.getElementById('point-logo');
let point4x4 = document.querySelector('.point-4x4');
let point32x32 = document.querySelector('#point-32x32');

pointLogo.addEventListener("click", function() {
  
  let canvas = document.querySelector('canvas');

  canvas.width = 512; 
  canvas.height = 512; 

  let ctx = canvas.getContext('2d');
  let imageCanvas = document.getElementById('source');

  ctx.drawImage(imageCanvas, 1, 1, 512, 512);
});

point4x4.addEventListener("click", function() {
  let requesCan4x4 = new XMLHttpRequest(); 

  requesCan4x4.open('GET', './data/4x4.json');
  requesCan4x4.responseType = 'json';
  requesCan4x4.send();

  requesCan4x4.onload = function() {
    
    let can4x4 = requesCan4x4.response;

    let canvas = document.querySelector("canvas"); // Select our canvas element
    let contextCanvas = canvas.getContext("2d"); // Save the context we're going to use

    let width = can4x4[0].length; // Get the width of the array
    let height = can4x4.length; // Get the height of the array
    let scale = 128; // Scales the whole image by this amount, set to 1 for default size

    // Make sure the canvas is no larger than the size we need
    canvas.width = width * scale; 
    canvas.height = height * scale; 

    // Loop through each color and draw that section
    for(let row = 0; row < height; row++) {
      for(let col = 0; col < width; col++) { // Since there are nested arrays we need two for loops
        contextCanvas.fillStyle = '#' + can4x4[row][col]; // Set the color to the one specified
        contextCanvas.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle
      }
    }
  }
});

point32x32.addEventListener("click", function() {
  let requesCan32x32 = new XMLHttpRequest(); 

  requesCan32x32.open('GET', './data/32x32.json');
  requesCan32x32.responseType = 'json';
  requesCan32x32.send();

  requesCan32x32.onload = function() {
    
    let can32x32 = requesCan32x32.response;

    for (let i = 0; i < can32x32.length; i++) {
      for (let j = 0; j < can32x32[i].length; j++) {
        can32x32[i][j].splice(3, 1);
        can32x32.join(', ');  
      }  
    }
    
    let canvas = document.querySelector("canvas"); // Select our canvas element
    let contextCanvas = canvas.getContext("2d"); // Save the context we're going to use
    
    let width = can32x32[0].length; // Get the width of the array
    let height = can32x32.length; // Get the height of the array
    let scale = 16; // Scales the whole image by this amount, set to 1 for default size
    
    // Make sure the canvas is no larger than the size we need
    canvas.width = width * scale; 
    canvas.height = height * scale; 
    
    // Loop through each color and draw that section
    for(let row = 0; row < height; row++) {
      for(let col = 0; col < width; col++) { // Since there are nested arrays we need two for loops
        contextCanvas.fillStyle = 'RGB(' + can32x32[row][col] +')'; // Set the color to the one specified
        console.log('RGB ( ' + can32x32[row][col] +' )');
        contextCanvas.fillRect(col * scale, row * scale, scale, scale); // Actually draw the rectangle
      }
    }
  }
});