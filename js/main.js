// Variable for each pixel
var pixel = document.querySelectorAll('.box');

// Moving mouse draws on canvas when true
var drawing = false;

// Variable for color select
var color = 'default'

// Color selection
document.getElementById('black').addEventListener('click', function() {
  color = 'black';
});
document.getElementById('red').addEventListener('click', function() {
  color = 'red';
});
document.getElementById('orange').addEventListener('click', function() {
  color = 'orange';
});
document.getElementById('yellow').addEventListener('click', function() {
  color = 'yellow';
});
document.getElementById('green').addEventListener('click', function() {
  color = 'green';
});
document.getElementById('cyan').addEventListener('click', function() {
  color = 'cyan';
});
document.getElementById('blue').addEventListener('click', function() {
  color = 'blue';
});
document.getElementById('magenta').addEventListener('click', function() {
  color = 'magenta';
});
document.getElementById('white').addEventListener('click', function() {
  color = 'white';
});
document.getElementById('rainbow').addEventListener('click', function() {
  color = 'default';
});

// Sensing mouse movements
pixel.forEach(function(pixel) {
  pixel.addEventListener('mousedown', function() {
    drawing = true;
  });
});

pixel.forEach(function(pixel) {
  pixel.addEventListener('mousemove', function() {
    if (drawing === true && color === 'default') {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
      pixel.style.backgroundColor = rgb;
    } else if (drawing === true && color !== 'default') {
      pixel.style.backgroundColor = color;
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
