import { useState } from 'react';
import './App.css';
import Bill from './components/bill';
import Tips from './components/tips';
import Total from './components/total';

function App() {

  const [bill, setBill] = useState(0);
  const [tipsHost, setTipsHost] = useState(10);

  return (
    <div className="App flex items-center justify-center h-screen">
      <div className='flex flex-col items-center justify-center'>
          <Bill bill={bill} setBill={setBill}/>
          <Tips tips={tipsHost} setTips={setTipsHost} text={"Tips host"} />
          <Total bill={bill} tips={tipsHost}/>
      </div>
    </div>
  );
}

export default App;
