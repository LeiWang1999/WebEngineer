function changeColor(Color){
    var opreaDiv = document.getElementById('div1');
    
    opreaDiv.style.backgroundColor = Color;
}

function setStyle(name , value){
    var opreaDiv = document.getElementById('div1');

    opreaDiv.style[name] = value;
}