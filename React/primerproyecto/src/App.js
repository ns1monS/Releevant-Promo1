import "./App.css";
import Post from "./components/Post";
// import Welcome from "./components/Welcome";
import Admin from "./components/Admin/Admin";

const post = {
  title: "Magna occaecat",
  date: "22 de Agosto de 2026",
  content: "Sint laborum sit do ut culpa aliquip.",
};

const isAdmin = true



function App() {
  return (
    <div className="App">
      {isAdmin ? (<div> <Admin />  <Post post={post} /> </div>) : 
      (<div><p>No eres admin</p></div>)}
    </div>
  )}

export default App;

