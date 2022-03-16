import "./App.css";
import Post from "./components/Post";
import Welcome from "./components/Welcome";
import Admin from "./Admin/Admin";

const post = {
  title: "Magna occaecat",
  date: "22 de Agosto de 2026",
  content: "Sint laborum sit do ut culpa aliquip.",
};

function App() {
  return (
    <div className="App">
      <admin />
      <Post post={post} />
    </div>
  );
}

export default App;

