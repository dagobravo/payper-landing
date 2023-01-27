const circularText = document.getElementById('circular-text');
if (circularText && circularText.innerHTML) {
  new CircleType(document.getElementById('circular-text'));
}

const darkEllipse = document.getElementById('dark-ellipse');
if (darkEllipse && darkEllipse.innerHTML) {
  new CircleType(document.getElementById('dark-ellipse'))
    .radius(131.5);
}
