function calculateParallelogramArea() {
  const parallelogramBaseInput = document.getElementById("parallelogram-base");
  const parallelogramBaseText = parallelogramBaseInput.value;
  const base = parseFloat(parallelogramBaseText);
  console.log(base);

  const parallelogramHeightInput = document.getElementById("parallelogram-height");
  const parallelogramHeightText = parallelogramHeightInput.value;
  const height = parseFloat(parallelogramHeightText);
  console.log(height);

  const parallelogramArea = base * height;
  console.log("Area Of Parallelogram:", parallelogramArea);

  const parallelogramAreaSpan = document.getElementById("parallelogram-area");
  parallelogramAreaSpan.innerText = parallelogramArea;

  const parallelogramSpan = document.getElementById("area1");
  parallelogramSpan.innerText = "Area Of Parallelogram: "+ parallelogramArea + " cm2";
}
