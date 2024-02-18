function calculataPantagonArea(){
    const pentagonPInput = document.getElementById("pentagon-p");
    const pentagonPText = pentagonPInput.value;
    const P = parseFloat(pentagonPText);
    console.log(P);
  
    const pentagonBInput = document.getElementById("pentagon-b");
    const pentagonBText = pentagonBInput.value;
    const B = parseFloat(pentagonBText);
    console.log(B);
  
    const pentagonArea = 0.5 * P * B;
    console.log('Area Of Pentagon:', pentagonArea);
  
    const pentagonAreaSpan= document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = pentagonArea;

    const pentagonSpan= document.getElementById('area1');
    pentagonSpan.innerText = "Area Of Pentagon: " + pentagonArea + " cm2";
}