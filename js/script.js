//Square
function sqrPerimeter(side){
    return side*4;
}

function sqrPerimeterCalculate(){
    const sideLenght= document.getElementById("squareInput");
    const result= parseFloat(sideLenght.value);
    const perimeter = sqrPerimeter(result);
    
    document.getElementById("sqrPerimeter").innerText = "Its perimeter is: "+perimeter+"cm(s)."
}

function sqrArea(side){
    return side*side
}

function sqrAreaCalculate(){
    const sideLenght= document.getElementById("squareInput");
    const result= parseFloat(sideLenght.value);
    const area = sqrArea(result);
    
    document.getElementById("sqrArea").innerText = "Its area is: "+area+"cm(s)²."
}

function clearTextSquare(){
    document.getElementById("squareInput").value = "";
    document.getElementById("sqrPerimeter").innerText = "";
    document.getElementById("sqrArea").innerText = "";
}


//Circle

function circleCircunfer(radius){
    return 2*Math.PI*radius;
}

function circleCircunferCalculate(){
    const radiusLenght= document.getElementById("circleInput");
    const result= parseFloat(radiusLenght.value);
    const circunference = circleCircunfer(result);
    
    document.getElementById("circleCircunfer").innerText = "Its perimeter is: "+circunference+"cm(s)."
}

function circleArea(radius){
    return Math.PI*radius*radius
}

function circleAreaCalculate(){
    const radiusLenght= document.getElementById("circleInput");
    const result= parseFloat(radiusLenght.value);
    const area = circleArea(result);
    
    document.getElementById("circleArea").innerText = "Its area is: "+area+"cm(s)²."
}

function clearTextCirlce(){
    document.getElementById("circleInput").value = "";
    document.getElementById("circleCircunfer").innerText = "";
    document.getElementById("circleArea").innerText = "";
}

//Triangle

function trianglePerimeter(base,sideA,sideB){
    return base+sideA+sideB;
}

function trianglePerimeterCalculate(){
    const base= parseFloat(document.getElementById("triangleInputBase").value);
    const sideA= parseFloat(document.getElementById("triangleInputSideA").value);
    const sideB= parseFloat(document.getElementById("triangleInputSideB").value);
    const perimeterTri = trianglePerimeter(base, sideA, sideB);
    
    document.getElementById("trianglePerimeter").innerText = "Its perimeter is: "+perimeterTri+" cm(s)."
}

function triangleArea(base,height){
    return (base*height)/2;
}

function triangleAreaCalculate(){
    const base= parseFloat(document.getElementById("triangleInputBase").value);
    const height= parseFloat(document.getElementById("triangleInputHeight").value);
    const areaTri = triangleArea(base, height);
    
    document.getElementById("triangleArea").innerText = "Its area is: "+areaTri+" cm(s)."
}

function clearTextTriangle(){
    document.getElementById("triangleInputBase").value = "";
    document.getElementById("triangleInputSideA").value = "";
    document.getElementById("triangleInputSideB").value = "";
    document.getElementById("triangleInputHeight").value = "";
    document.getElementById("trianglePerimeter").innerText = "";
    document.getElementById("triangleArea").innerText = "";
}