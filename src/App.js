import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  };

  return (
    <>
      <Navbar title='Textutils 2' mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter the text to analyze" mode={mode} />
        {/* <About /> The About component is commented out. Uncomment if needed. */}
      </div>
    </>
  );
}

export default App;
