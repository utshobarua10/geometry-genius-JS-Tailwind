const buttons = document.querySelectorAll('.calculate-btn')
console.log(buttons)
for(let button of buttons){ button.addEventListener('click',function(){
    
    const id = button.id;
    let arrayValue;
    const area = 1;
    if (id.includes('triangle')){
       arrayValue= getElementValue('triangle-base','triangle-height');
     
    }
    else if (id.includes('rectangle')){
         arrayValue= getElementValue('rectangle-base','rectangle-height');

    }
    else if(id.includes('parallelogram')){
        arrayValue= getElementValue('parallelogram-base','parallelogram-height');
        
    }
    else if(id.includes('rhombus')){
        arrayValue= getElementValue('rhombus-base','rhombus-height');

    }
    else if(id.includes('pentagon')){
         arrayValue= getElementValue('pentagon-base','pentagon-height');

    }
    else if(id.includes('ellipse')){
        arrayValue= getElementValue('ellipse-base','ellipse-height');
    }
    const totalArea = calculateArea(arrayValue[0],arrayValue[1],arrayValue[2])
    addingFinalResult(totalArea,id);

})}




