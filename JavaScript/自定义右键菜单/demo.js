document.oncontextmenu = function(ev){
    var oEvent = ev||event;
    var oClickDiv = document.getElementById("clickDiv");
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft; 
    var CurrentClickPixelX = oEvent.clientX + scrollLeft;
    var CurrentClickPixelY = oEvent.clientY + scrollTop;
    document.title = CurrentClickPixelX + ',' + CurrentClickPixelY;
    
    oClickDiv.style.display = 'block';
    oClickDiv.style.left = CurrentClickPixelX + 'px';
    oClickDiv.style.top = CurrentClickPixelY + 'px';
    return false;
}