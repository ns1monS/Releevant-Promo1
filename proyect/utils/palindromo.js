const palindromo = (string) => {
    if (isString(string)|| string === Number){
        return "error"
    }else{
        return string
        .split('')
        .reverse()
        .join('')
    }
   
}

module.exports = palindromo;