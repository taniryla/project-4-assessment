import "./styles.css";
import { useState } from "react";
import CircleSelector from "./CircleSelector";
import Circles from "./Circles";

export default function App() {
  const [selectedNum, setSelectedNum] = useState(1);

  return (
    <>
      <div className="App">
        <header className="App-header">Project 4 Assesment Circles</header>
        <main>
          <CircleSelector
            selectedNum={selectedNum}
            setSelectedNum={setSelectedNum}
          />
          <Circles selectedNum={selectedNum} setSelectedNum={setSelectedNum} />
        </main>
      </div>
    </>
  );
}
