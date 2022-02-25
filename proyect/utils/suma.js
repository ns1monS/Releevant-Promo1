function suma (a, b){
    if (isNaN(a)||isNaN(b) || a === "" || b === ""){
        return "Tus muertos"
    } else{
    return a + b;
}
}


module.exports = suma;