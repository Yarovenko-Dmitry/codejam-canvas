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