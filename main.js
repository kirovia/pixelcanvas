// Variable for each pixel
var pixel = document.querySelectorAll('.box');

// Moving mouse draws on canvas when true
var drawing = false;

// Sensing mouse movements
pixel.forEach(function(pixel) {
  pixel.addEventListener('mousedown', function() {
    drawing = true;
  });
});

pixel.forEach(function(pixel) {
  pixel.addEventListener('mousemove', function() {
    if (drawing === true) {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
      pixel.style.backgroundColor = rgb
    };
  });
});

pixel.forEach(function(pixel) {
  pixel.addEventListener('mouseup', function() {
    drawing = false;
  });
});

// Screen clear
document.addEventListener('keydown', function() {
  pixel.forEach(function(pixel) {
    pixel.style.backgroundColor = 'white';
  });
});
