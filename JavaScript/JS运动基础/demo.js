window.onload = function () {
    var oDiv1 = this.document.getElementById('div1');
    var timer = null;
    var speed = 10;
    var vLeftMin = oDiv1.offsetLeft;
    var vLeftMax = 0;
    oDiv1.onmouseover = function () { toMove(oDiv1, speed, vLeftMax); }
    oDiv1.onmouseout = function () { toMove(oDiv1, speed, vLeftMin); }


    function toMove(obj, speed, goal) {
        //  清空定时器
        if (obj.offsetLeft >= goal) {
            speed = speed * -1;
        }
        clearInterval(timer);
        timer = setInterval(() => {
            if (obj.offsetLeft == goal) {
                clearInterval(timer);
            }
            else {
                oDiv1.style.left = oDiv1.offsetLeft + speed + 'px';
            }
        }, 30);
    }
}

function getElementStyle(obj, attr) {

    if (obj.currentStyle) {

        return obj.currentStyle[attr];

    } else {

        return getComputedStyle(obj, false)[attr];

    }
}