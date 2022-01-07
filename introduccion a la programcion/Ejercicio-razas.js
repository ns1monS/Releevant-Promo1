const team = [
    {name: "Norris Cole", skin:"black"},
    {name: "Jaime Fernandez", skin:"white"},
    {name: "Michael Eric", skin:"black"},
    {name: "Francis Alonso", skin:"white"}
  ]

  let countblack = 0;
  let countwhite = 0;
  function razas(arrayTeam) {
      
   
    for (let index = 0; index < arrayTeam.length; index++) {
        
         if ( arrayTeam[index].skin === "black"){
             countblack++ ;
        } else if  ( arrayTeam[index].skin === "white"){
           countwhite++ ;
        }else{
            console.log("no vale");
        }
        
    }
    
  }
  razas(team)
    console.log("hay",countblack,"negros");
    console.log("hay",countwhite,"blancos");
  
  