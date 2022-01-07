const team = [
  { name: "Norris Cole", skin: "black" },
  { name: "Jaime Fernandez", skin: "white" },
  { name: "Michael Eric", skin: "black" },
  { name: "Francis Alonso", skin: "white" },
];

let countblack = 0;
let countwhite = 0;
let blackplayers = [];
let whiteplayers = [];
let otherSkin = 0;


function razas(arrayTeam) {
  for (let index = 0; index < arrayTeam.length; index++) {
    if (arrayTeam[index].skin === "black") {
        blackplayers[countblack] = arrayTeam[index].name;
      countblack++;
    } else if (arrayTeam[index].skin === "white") {
        whiteplayers[countwhite] = arrayTeam[index].name;
      countwhite++;
    } else {
      console.log("no vale");
      otherplayers[index] = arrayTeam[index].name;
    }
  }
}
razas(team);
console.log("hay", countblack, "negros");
console.log("hay", countwhite, "blancos");
console.log ("el equipo de blancos son: ",whiteplayers);
console.log ("el equipo de negros son: ",blackplayers);
