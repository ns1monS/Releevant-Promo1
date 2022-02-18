
// const http = require("http");
const express = require("express");
const req = require("express/lib/request");

const app = express();
app.use(express.json());

let notes = [
    {
      id: 1,
      nombre: "RODRIGO",
      telefono: "alkfobafibao",
    },
    {
      id: 2,
      nombre: "paco",
      telefono: "AJAJAJAJAAJ",
    },
    {
      id: 3,
      nombre: "pepe",
      telefono: "JOJOJJOJOJOJJO",
    }
   ];

   app.get("/api/notes/:id",(request, response) => {
     console.log("el que tengo aqui",(request.params.id))
    const id  = Number(request.params.id);  
    

    const selectedNote = notes.find((note) => {
      return note.id === id;
    });
    if (selectedNote){
      response.json(selectedNote);
      console.log("encuentro nota?",selectedNote);
    }else{
      response.json("ERROR 404  ");
      response.status(404).end()
      console.log("encuentro nota?","No");
    };

  app.delete('/api/notes/:id', (request, response) =>{
    const id  = Number(request.params.id);
  
    notes = notes.filter((note) => note.id != id);
    console.log("notaaaas despues dfiltrer", notes);
    response.status(204).end();

  });

  app.post('/api/notes', (request, response) => {
      const note = request.body
      console.log("Note por post", note)
      console.log("Notes por post", notes)
    notes.push(note)
    response.json(notes)
  });
  
  
  
    
  });
// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json' })
//     response.end(JSON.stringify(notes))
//    })
const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);

