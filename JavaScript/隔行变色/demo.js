window.onload = function(){
    var oDiv = document.getElementById('topdiv');
    var aAllList = oDiv.getElementsByTagName('li');
    
    for (let index = 0; index < aAllList.length; index++) {
        const element = aAllList[index];
        switch (index%2) {
            case 0: element.style.backgroundColor = 'yellow'; break;
            case 1: element.style.backgroundColor = 'white';    break;
            default:
                break;
        }
    }
}