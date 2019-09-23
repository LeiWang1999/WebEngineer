window.onload = function () {








    var oTable = document.getElementById('table1');
    var oTableBody = oTable.tBodies[0];

    var oBtn1 = document.getElementById('btn1');
    var oName = document.getElementById('name');
    var oEdge = document.getElementById('edge');
    var oSex = document.getElementById('sex');
    var aTableTr = oTableBody.rows;
    var oldColor = '';


    function appendTableElement(Id, Name, Sex, Edge, Opration) {
        var NewChildTr = document.createElement('tr');
        var NewChildTdId = document.createElement('td');
        var NewChildTdName = document.createElement('td');
        var NewChildTdEdge = document.createElement('td');
        var NewChildTdSex = document.createElement('td');
        var NewChildTdOpra = document.createElement('td');
        NewChildTdId.innerText = Id;
        NewChildTdName.innerText = Name;
        NewChildTdSex.innerText = Sex;
        NewChildTdEdge.innerText = Edge;
        NewChildTdOpra.innerHTML = Opration;

        NewChildTdOpra.onclick = function(){
            oTableBody.removeChild(this.parentNode);
        }

        NewChildTr.appendChild(NewChildTdId);
        NewChildTr.appendChild(NewChildTdName);
        NewChildTr.appendChild(NewChildTdSex);
        NewChildTr.appendChild(NewChildTdEdge);
        NewChildTr.appendChild(NewChildTdOpra);
        return NewChildTr;
    }




    console.log('接下来打印每个人的姓名');
    for (const key in aTableTr) {
        if (aTableTr.hasOwnProperty(key)) {
            const element = aTableTr[key];
            console.log(element.children[1].textContent);
        }
    }

    for (let index = 0; index < aTableTr.length; index++) {
        const element = aTableTr[index];
        element.onmouseover = function () {
            oldColor = this.style.background;
            this.style.background = 'green';
        }
        element.onmouseout = function () {
            this.style.background = oldColor;
        }
        if (index % 2) {
            element.style.background = 'red';
        }
    }

    oBtn1.onmousedown = function () {
        currentId = oTableBody.rows.length + 1;
        currentName = oName.value;
        currentEdge = oEdge.value;
        currentSex = oSex.value;
        appendOpra = '<a href="javascript:">删除</a>'
        var NewChildTr = appendTableElement(currentId, currentName, currentSex, currentEdge, appendOpra);
        oTableBody.appendChild(NewChildTr);
    }

}
