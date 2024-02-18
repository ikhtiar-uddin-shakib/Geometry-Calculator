function calculateRectangleArea() {
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthText = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthText);
  console.log(width);

  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthText = rectangleLengthInput.value;
  const length = parseFloat(rectangleLengthText);
  console.log(length);

  const rectangleArea = width * length;
  console.log("Area Of Rectangle:", rectangleArea);

  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = rectangleArea;

  const rectangleSpan = document.getElementById("area1");
  rectangleSpan.innerText = "Area Of Rectangle: " + rectangleArea + " cm2";
}
