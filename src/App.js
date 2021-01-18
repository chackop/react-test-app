import logo from "./logo.svg";
import "./App.css";
import LikeDislike from "./LikeDislike/LikeDislike";
import GetName from "./GetName/GetName";
import { React } from "react";
import CreateElEx from "./CreateElEx/CreateElEx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <LikeDislike /> */}
        {/* <GetName /> */}
        {/* {console.log(React.createElement("span", null))} */}
        {console.log("object", <div />)}
        {console.log("object2", <CreateElEx />)}
      </header>
    </div>
  );
}

export default App;
