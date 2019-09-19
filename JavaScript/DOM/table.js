window.onload = function(){
    var oTable = document.getElementById('table1');
    var oTableBody = oTable.tBodies[0];

    var oBtn1 = document.getElementById('btn1');
    var oName = document.getElementById('name');
    var oEdge = document.getElementById('edge');
    var aTableTr    = oTableBody.rows;
    var oldColor = '';

    console.log('接下来打印每个人的姓名');
    for (const key in aTableTr) {
        if (aTableTr.hasOwnProperty(key)) {
            const element = aTableTr[key];
            console.log(element.children[1].textContent);
        }
    }

    for (let index = 0; index < aTableTr.length; index++) {
        const element = aTableTr[index];
        element.onmouseover = function(){
            oldColor = this.style.background;
            this.style.background = 'green';
        }
        element.onmouseout = function(){
            this.style.background = oldColor;
        }
        if (index%2) {
            element.style.background = 'red';
        }
    }

    oBtn1.onmousedown = function(){
        currentName = oName.value;
        currentEdge = oEdge.value;
        var NewChildTr = document.crea
    }

}