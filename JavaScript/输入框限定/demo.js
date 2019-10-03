window.onload = function(){
    var oText1 = document.getElementById('text1');

    oText1.onkeydown = function(ev){
        var oEvent = ev||event;
        // 阻止非数字
        if (oEvent.keyCode < 48 || oEvent.keyCode >57) {
           return false; 
        }  
    }
}