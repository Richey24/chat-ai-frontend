import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Chat from './components/Chat';
import Input from './components/Input';
import { useState } from 'react';

function App() {

  const [file, setFile] = useState(null)
  const [messages, setMessages] = useState([])
  const [load, setLoad] = useState(false)

  return (
    <div className="App">
      <Header setFile={setFile} file={file} />
      <Chat messages={messages} load={load} />
      <Input file={file} setMessages={setMessages} messages={messages} setLoad={setLoad} />
    </div>
  );
}

export default App;
