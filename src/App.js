import React, {useState} from 'react';
import Form from './components/Form';
import Info from './components/Info';
import './App.css';

function App() {
  const [memberInfo, setMemberInfo] = useState([{name: 'Nadeem Anvaritafti', email: 'nanvari@live.com', role: 'Software Developer'}]);

  const addNewMember = tm => {
    setMemberInfo([...memberInfo, tm])
  }

  return (
    <div className="App">
      <div className='App-header'>
        <Form addNewMember={addNewMember} />
        <Info memberInfo={memberInfo} />
      </div>
    </div>
  );
}

export default App;
