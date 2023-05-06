import { useState } from 'react';
import './App.css';
import Viewer from './componet/Viewer';
import Controller from './componet/Controller';

function App() {
 return (
  <div className="App">
  <h1>Simple Counter</h1>
  <section>
    <Viewer/>
    </section>
    <section>
    <Controller/>
  </section>
  </div>
  );
}
export default App;
