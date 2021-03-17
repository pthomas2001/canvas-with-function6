var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var width = 100;
var height = 86.6;

function drawTriangle(positionX, positionY) {
  for (var rowCounter = 1; rowCounter <= 3; rowCounter++) {
    for (var colCounter = 1; colCounter <= rowCounter; colCounter++) {
      context.beginPath();
      context.moveTo(positionX, positionY);
      context.lineTo(positionX + width / 2, positionY + height);
      context.lineTo(positionX - width / 2, positionY + height);
      context.lineTo(positionX, positionY);
      if (rowCounter === 1) {
        context.strokeStyle = 'rgb(227,98,102)';
        context.fillStyle = 'rgb(227,98,102)';
      } else if (rowCounter === 2) {
        context.strokeStyle = 'rgb(38,172,73)';
        context.fillStyle = 'rgb(38,172,73)';
      } else if (rowCounter === 3) {
        context.strokeStyle = 'rgb(34,128,128)';
        context.fillStyle = 'rgb(34,128,128)';
      } else {
        alert('An error occurred.');
      }
      context.stroke();
      context.fill();
      positionX += width;
    }
    positionX -= rowCounter * width + width / 2;
    positionY += height;
  }
}

drawTriangle(225, 33);