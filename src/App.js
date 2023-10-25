import logo from "./logo.svg";
import "./App.css";
import TodosContainer from "./components/containers/TodoContainer";
import TodoFormContainer from "./components/containers/TodoFormContainer";

function App() {
  return (
    <div className="App"> 
      <div className="App-header">
      <TodosContainer />
     <TodoFormContainer />
      </div>
    </div>
  );
}

export default App;
