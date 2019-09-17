window.onload = function() {
    var oDiv1 = document.getElementById('div1');
    var oDiv2 = document.getElementById('div2');
    var oDiv3 = this.document.getElementById('div3');
    var timer = null;
    oDiv2.onmouseover = oDiv1.onmouseover = function(){
        clearTimeout(timer)
        oDiv2.style.display = 'block';
    }

    oDiv2.onmouseout =  oDiv1.onmouseout = function(){
        timer = setTimeout(function(){ 
            oDiv2.style.display = 'none';
        }, 500)
    }

    setInterval(function(){
        oDiv3.style.left = oDiv3.offsetLeft + 10 + 'px';
    }, 500)
}