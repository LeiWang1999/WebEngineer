window.onload = function () {

    // 创建文档碎片
    // var oFrag = document.createDocumentFragment();

    var oBtn1 = document.getElementById('btn1');
    var oOl1 = document.getElementById('ol1');
    var oText = document.getElementById('text1');
    oBtn1.onclick = function () {
        // 创建对象都在内存，不添加是看不到的
        var NewLi = document.createElement('li');
        NewLi.innerText = oText.value + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
        
        var NewHref = document.createElement('a');
        NewHref.href = 'javascript:';
        NewHref.innerText = '删除';
        NewHref.onclick = function(){
            oOl1.removeChild(this.parentNode);
        }

        NewLi.appendChild(NewHref);

        // oOl1.appendChild(NewLi);
        if (oOl1.children.length != 0)
            oOl1.insertBefore(NewLi, oOl1.children[0]);
        else
            oOl1.appendChild(NewLi);
    }


}
