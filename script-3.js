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