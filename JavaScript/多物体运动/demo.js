window.onload = function(){
    var aDiv = this.document.getElementsByTagName('div');
    for (let index = 0; index < aDiv.length; index++) {
        const element = aDiv[index];
        element.timer = null;
        element.onmousemove = function(){
            toMove(this, 'width', 500);
        }
        element.onmouseout = function(){
            toMove(this, 'width',200);
        }
    }
}

function getElementStyle(obj, attr) {

    if (obj.currentStyle) {

        return obj.currentStyle[attr];

    } else {

        return getComputedStyle(obj, false)[attr];

    }
}

function toMove(obj, targetstyle, goal) {
    //  清空定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        var stringStyle = getElementStyle(obj, targetstyle);
        // console.log("Stirng Style is :" + stringStyle);
        var floatStyle = parseFloat(stringStyle.replace(/px/,""));
        var speed = (goal-floatStyle)/6; 
        console.log('goal is : ' + goal);
        console.log('current val is : ' + floatStyle);
        console.log('So , this raw speed is : ' + speed);
        speed = speed>0?Math.ceil(speed):Math.floor(speed);
        console.log('So , this integer speed is : ' + speed);
        document.title = floatStyle +','+ speed;
        if (floatStyle == goal) {
            clearInterval(obj.timer);
        }
        else {
            obj.style[targetstyle] = floatStyle + speed + 'px';
        }
    }, 30);
}