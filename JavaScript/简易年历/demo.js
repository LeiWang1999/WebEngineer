window.onload = function(){
    var oDiv = document.getElementById('tab');
    var allLi = oDiv.getElementsByTagName('li');
    var oText = document.getElementById('tab_text');
    var doThing = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f'
    ]
    for (let index = 0; index < allLi.length; index++) {
        const element = allLi[index];
        
        element.onmousemove = function(){
            for (let index = 0; index < allLi.length; index++) {
                const element = allLi[index];
                element.className = '';
            }
            element.className = 'active';
            oText.innerHTML = "<h2>"+ (index+1) +"月活动</h2><p>"+doThing[index]+"</p>"
        }
    }
}

var a = parseInt('abc');
console.log(isNaN(a));