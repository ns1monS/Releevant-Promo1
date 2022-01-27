const prompt = require("prompt-sync")();

  function palindromo()
  {
      let palabra=prompt("Escribe una palabra: " );

      for (let i = 0; i < palabra.length ; i++){
          if(palabra[i]!=palabra[palabra.length-i-1]){
              return false;
          }
      }
      return true;
  }
   
  if(palindromo())
  {
      console.log("es palíndromo");
  }else{
      console.log("no es palíndromo")
  }
