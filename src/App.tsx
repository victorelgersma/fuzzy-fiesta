import { useState } from "react";
import "./App.css";
import Question from "./components/Question";

function App() {
  const [innerText, setInnerText] = useState(
    "What is the deepest lake in the world?"
  );

  const updateInnerText = () => {
    setInnerText("Lake Baikal, in Southern Siberia");
  };

  return (
    <>
      <header>
        <h1>Question + Answer App</h1>
      </header>
      <div className="card">
        <p></p>
      </div>
      <Question onClick={updateInnerText} textToDisplay={innerText}></Question>
    </>
  );
}

export default App;
