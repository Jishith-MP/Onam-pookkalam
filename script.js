document.addEventListener('DOMContentLoaded', function () {
  const parent = document.getElementById('pookkalam');
  const numSquares = 14;
  const centerPosition = '50%';

  // Function to create layers (squares, circles)
  function createLayerElement(layerId, size, zindex, backgroundColor, borderRadius = '50%') {
    const layer = document.createElement('div');
    layer.id = layerId;
    layer.style.position = 'absolute';
    layer.style.top = centerPosition;
    layer.style.left = centerPosition;
    layer.style.transform = 'translate(-50%, -50%)';
    layer.style.width = `${size}px`;
    layer.style.height = `${size}px`;
    layer.style.zIndex = zindex;
    layer.style.backgroundColor = backgroundColor;
    layer.style.borderRadius = borderRadius;
    return layer;
  }

  function setPositionAndTransform(element, angle) {
    element.style.position = 'absolute';
    element.style.top = centerPosition;
    element.style.left = centerPosition;
    element.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  }

  // Function to create squares 
  function createSquaresLayer(layerId, numSquares, size, color, zindex) {
    const layer = document.getElementById(layerId);
    for (let j = 0; j < numSquares; j++) {
      let angle = j * (360 / numSquares);
      let square = document.createElement('div');
      setPositionAndTransform(square, angle);
      square.style.width = `${size}px`;
      square.style.height = `${size}px`;
      square.style.backgroundColor = color;
      square.style.zIndex = zindex;
      layer.appendChild(square);
    }
  }
  
  
  let sixthLayer = document.getElementById('sixth-layer');

    // Add the image
const img = document.createElement('img');
img.src = 'maveli.png';
img.alt = 'maveli';
img.style.position = 'absolute';
img.style.top = '50%';
img.style.left = '50%';
img.style.transform = 'translate(-50%, -50%)';
img.style.zindex = '23';
img.style.zIndex = 23; 
img.style.width = '80px';
img.style.height = 'auto';
img.style.filter = 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))';

sixthLayer.appendChild(img);
    
  

  // Function to create inner circles
  function createCirclesLayer(layerId, size, colors, zindex) {
    const circle = document.getElementById(layerId);
    for (let k = 0; k < colors.length; k++) {
      let circleDiv = document.createElement('div');
      setPositionAndTransform(circleDiv, 0); 
      circleDiv.style.width = `${size - k * 10}px`;
      circleDiv.style.height = `${size - k * 10}px`;
      circleDiv.style.backgroundColor = colors[k];
      circleDiv.style.borderRadius = '50%';
      circleDiv.style.zIndex = zindex;
      circle.appendChild(circleDiv);
    }
  }

  // Function to create oval shapes
  function createOvals(layerId, color, zindex, width, height, numOvals = 8) {
    const ovalLayer = document.getElementById(layerId);
    for (let k = 0; k < numOvals; k++) {
      let oval = document.createElement('div');
      setPositionAndTransform(oval, k * (360 / numOvals));
      oval.style.width = `${width}px`;
      oval.style.height = `${height}px`;
      oval.style.backgroundColor = color;
      oval.style.borderRadius = '50%';
      oval.style.zIndex = zindex;
      ovalLayer.appendChild(oval);
    }
  }

  // Create main circle layers
  for (let i = 1; i <= 5; i++) {
    let size = 300 + (i * 10);
    let color;
    switch (i) {
      case 1: color = 'brown'; break;
      case 2: color = '#EE82EE'; break;
      case 3: color = '#DA70D6'; break;
      case 4: color = '#B030B0'; break;
      case 5: color = '#8B008B'; break;
      default: color = 'grey';
    }
    const circleLayer = createLayerElement(`pookkalam-${i}`, size, `${5 - i + 1}`, color);
    parent.appendChild(circleLayer);
  }

  // Create square and circle layers
  createSquaresLayer('first-layer', numSquares, 218, 'red', 10);
  createSquaresLayer('second-layer', numSquares, 199, '#FF9800', 11);
  createSquaresLayer('third-layer', numSquares, 180, '#FFEB3B', 12);
  createSquaresLayer('fourth-layer', 3, 95, '#9C27B7', 20);
  createSquaresLayer('fifth-layer', 3, 85, '#4CAF50', 21);
  createSquaresLayer('sixth-layer', 3, 75, 'yellow', 22);
  createSquaresLayer('seventh-layer', 3, 160, 'white', 13);

  const colors1 = ['#EE82EE', '#DA40D1', 'ghostwhite', '#8B008B'];
  const colors2 = ['#800040', '#B0006F', '#FF00FF', 'white'];
  createCirclesLayer('innerCircle', 200, colors1, 13);
  createCirclesLayer('innerCircle', 150, colors2, 17);

  // Create ovals
  createOvals('oval', '#FFC107', 14, 80, 200);
  createOvals('oval', '#FF6F61', 15, 70, 180);
  createOvals('oval', 'red', 16, 60, 165);
});