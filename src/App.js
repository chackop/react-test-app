import logo from "./logo.svg";
import "./App.css";
import LikeDislike from "./LikeDislike/LikeDislike";
import GetName from "./GetName/GetName";
import { React } from "react";
import CreateElEx from "./CreateElEx/CreateElEx";
import Todo from "./Todo/Todo";
import Table from "./Table/Table";

function App() {
  return (
    <div className="App">
      <Todo />
      <header className="App-header">
        {/* <Table /> */}
        {/* <LikeDislike /> */}
        {/* <GetName /> */}
        {/* {console.log(React.createElement("span", null))} */}
        {/* {console.log("object", <div />)}
        {console.log("object2", <CreateElEx />)} */}
      </header>
    </div>
  );
}

export default App;
