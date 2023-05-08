import { useRef, useEffect, useState } from 'react';
import './App.css';
import Viewer from './componet/Viewer';
import Controller from './componet/Controller';


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  
  const didMountRef = useRef(false);

useEffect(()=>{
  if(!didMountRef.current){
    didMountRef.current = true;
    return;
  } else{
    console.log("컴포넌트 업데이트");
  }  
});

useEffect(()=>{
  console.log("컴포넌트 마운트");
},[]);

useEffect(()=>{
  const intervalID = setInterval(()=>{
    console.log("깜빡");
  },1000);

  return ()=>{
    console.log("클린업");
    clearInterval(intervalID);
  };
});

 return (
  <div className="App">
  <h1>Simple Counter</h1>
  <section>
    <input value = {text} onChange={handleChangeText}/>
    </section>
    <section>
    <Viewer count = {count}/>
    </section>
    <section>
    <Controller handleSetCount={handleSetCount}/>
  </section>
  </div>
  );
}
export default App;
