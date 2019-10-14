let demoP = new Promise(function(resolve, reject){
    console.log('Hello');
    resolve('Nice');
})

let demoP2 = demoP.then((data)=>{
    console.log(data);
   
}).then((data)=>{
    console.log(data);
}).catch((err) =>{
    console.log(err);
});
console.log(demoP)
console.log(demoP2)