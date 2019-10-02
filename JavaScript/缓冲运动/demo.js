window.onload = function () {
    var oDiv1 = this.document.getElementById('div1');
    var oBtn1 = this.document.getElementById('btn1');
    var timer = null;
    oBtn1.onclick = function(){toMove(oDiv1, 1000);};

    function toMove(obj, goal) {
        //  清空定时器
        clearInterval(timer);
        timer = setInterval(() => {
            var sLeft = getElementStyle(obj, 'left');
            console.log("Stirng Left is :" + sLeft);
            var fLeft = parseFloat(sLeft.replace(/px/,""));
            var speed = (goal-fLeft)/6; 
            speed = speed>0?Math.ceil(speed):Math.floor(speed);

            document.title = fLeft +','+ speed;
            console.log(speed);

            console.log(fLeft);
            if (fLeft == goal) {
                clearInterval(timer);
            }
            else {
                console.log(obj.style.left);
                obj.style.left = fLeft + speed + 'px';
                console.log(obj.style.left);
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
