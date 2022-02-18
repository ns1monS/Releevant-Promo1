
// const http = require("http");
const express = require("express");
const req = require("express/lib/request");

const app = express();

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
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

  app.post('/api/notes/', (request, response) => {
    const notes = request.body
    console.log("Note por post", notes)
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

