function calculateTriangleArea() {
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);

  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);
  console.log(height);

  const triangleArea = 0.5 * base * height;
  console.log('Area Of Triangle:' , triangleArea);

  const triangleAreaSpan= document.getElementById('triangle-area');
  triangleAreaSpan.innerText = triangleArea;

  const triangleSpan = document.getElementById('area1');
  triangleSpan.innerText = "Area Of Triangle: " + triangleArea + " cm2";
}
