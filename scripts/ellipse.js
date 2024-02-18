function calculateEllipseArea(){
    const ellipseAInput = document.getElementById("ellipse-a");
    const ellipseAText = ellipseAInput.value;
    const A = parseFloat(ellipseAText);
    console.log(A);
  
    const ellipseBInput = document.getElementById("ellipse-b");
    const ellipseBText = ellipseBInput.value;
    const B = parseFloat(ellipseBText);
    console.log(B);
  
    const ellipseArea = 3.1416 * A * B;
    console.log('Area Of Ellipse:', ellipseArea);
  
    const ellipseAreaSpan= document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = ellipseArea;

    const ellipseSpan= document.getElementById('area1');
    ellipseSpan.innerText = "Area Of Ellipse: " + ellipseArea + " cm2";
}