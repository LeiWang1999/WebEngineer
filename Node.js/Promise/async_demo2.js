const aFunction = async () => {
    return 'test'
}
console.log(aFunction())
console.log(aFunction().then(data => {
    console.log(data);
}))