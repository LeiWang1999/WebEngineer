/*
    完成皮肤切换
*/

function change2SkinOne(){
    var SkinLink = document.getElementById('skinChange');
    SkinLink.href = 'cssOne.css';
}

function change2SkinTwo(){
    var SkinLink = document.getElementById('skinChange');
    SkinLink.href = 'cssTwo.css';
}

function displayString(){
    var StringPara = document.getElementById('string');
    if (StringPara.style.display == 'block') {
        StringPara.style.display = 'none';
    }
    else
        StringPara.style.display = 'block';
}
