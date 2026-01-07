// import Button from "./Button";
// import title from "./App.module.css"
import { useEffect, useState } from "react";

function Hello(){
  // component가 처음 생성될 때
  useEffect(() => {
    console.log("hi");
    return ()=>{console.log("bye");
    }
  }, []);
  useEffect(() => {
    console.log("hi");
    return function(){
      console.log("bye");
    }
  }, []);
  return <h1>Hello</h1>;
}


function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing? <Hello/> : null}
      <button onClick={onClick}>{showing?'Hide':'Show'}</button>
    </div>
  );
}

export default App;