/*
let hi = ["h","o","l","a"];
let presentacion = ["Hola","Soy","Un","parrafo"]
let datos = ""
let pres = ""



function init(){
    for (const saludo of hi) {
        datos += "<li>" + saludo +"</li>";
        
    }
    document.getElementById("array").innerHTML = datos

    for (const presenta of presentacion) {
        pres += presenta + " ";
        
    }
    document.getElementById("array2").innerHTML = pres
}
*/
let a = [1,2,3,4,5,6]
let range = {
    from: 0 ,
    to: 6,
  };
  
  range[Symbol.iterator] = function () {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {

          let result = {donde: false,value: this.current}
          this.current += 2
          return result;
        } else {
          return { done: true };
        }
      },
    };
  };
  
  for (num of range) {
    console.log(num);
  }