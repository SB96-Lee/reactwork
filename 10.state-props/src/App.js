import './App.css';
import Views from './component/View.js';
import Controller from './component/Controller.js';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const onClickBtn = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <section>
      <Views count={count}/>
      </section>
      <section>
        <Controller onClickBtn={onClickBtn}/>
      </section>
    </div>
  );
}

export default App;
