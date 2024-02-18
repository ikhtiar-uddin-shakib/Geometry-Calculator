function calculataRhombosArea(){
    const rhombosD1Input = document.getElementById("rhombos-d1");
    const rhombosD1Text = rhombosD1Input.value;
    const D1 = parseFloat(rhombosD1Text);
    console.log(D1);
  
    const rhombosD2Input = document.getElementById("rhombos-d2");
    const rhombosD2Text = rhombosD2Input.value;
    const D2 = parseFloat(rhombosD2Text);
    console.log(D2);
  
    const rhombosArea = 0.5 * D1 * D2;
    console.log('Area Of Rhombos:', rhombosArea);
  
    const rhombosAreaSpan= document.getElementById('rhombos-area');
    rhombosAreaSpan.innerText = rhombosArea;

    const rhombosSpan= document.getElementById('rhombos-area1');
    rhombosSpan.innerText = "Area of Rhombos: "+ rhombosArea + " cm2";
}