// import Button from "./Button";
// import title from "./App.module.css"
import { useEffect, useState } from "react";

// function Hello(){
//   useEffect(()=>{
//     // component가 처음 생성될 때 
//     console.log("created");
//     return () => console.log("destroyed")
//   },[])
//   return <h1>Hello</h1>
// }
function Hello() {
  function byFn(){
    console.log("destroyed");
  }
  function hiFn(){
    console.log("created");
    return byFn;
  }
  useEffect(hiFn, []);

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