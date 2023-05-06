import { useState } from 'react'
import './App.css'
import Viewer from './componet/Viewer'

function App() {
 return (
  <div className="App">
  <h1>Simple Counter</h1>
  <section>
    <Viewer/>
  </section>
  </div>
  );
}
export default App;
