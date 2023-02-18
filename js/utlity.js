// get the input values
console.log('connected')
function getElementValue(elementId1,elementId2){
    const currentField1 = document.getElementById(elementId1);
    const currentValue1  = parseFloat(currentField1.value);
    const currentField2 = document.getElementById(elementId2);
    // console.log(document.getElementById('parallelogram-height').value)
    const currentValue2  = parseInt(currentField2.value);
    return [currentValue1, currentValue2,currentField1.id];
    
}

// function setElementValue
function calculateArea(a,b,id){
    if (id.includes('triangle')){
        const area = (0.5*a*b);
        return area;
    }
    else if (id.includes('rectangle')){
        const area = (a*b);
        return area;
    }
    else if(id.includes('parallelogram')){
        const area = a*b;
        return area;
    }
    else if(id.includes('rhombus')){
        const area = 0.5*a*b;
        return area;
    }
    else if(id.includes('pentagon')){
        const area = 0.5*a*b;
        return area;
    }
    else if(id.includes('ellipse')){
        const area =a*b;
        return area;
    }
    
    
}   

// Adding the list
function addingFinalResult(totalArea,id){
    
    const totalList = document.getElementById('viewArea');
    const li = document.createElement('li');
    li.classList = "list flex justify-between place-items-center";
    const h3 = document.createElement('h3');
    h3.innerText = id;
    const button = document.createElement('button');
    button.classList = "bg-[#1090D8] text-white p-3 rounded";
    button.innerText = "convert to m"
    const h2 = document.createElement('h2');

    li.appendChild(h3);
    li.appendChild(h2);
    h2.innerText = totalArea
    li.appendChild(button);
    
    totalList.appendChild(li);




}

