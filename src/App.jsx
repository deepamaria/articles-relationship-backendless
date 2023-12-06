import './App.css';
import Backendless from 'backendless';
import { Route, Routes } from 'react-router-dom';
import Articles1 from './Articles1';
import { useState } from 'react';


function App() {
  const [articles, setarticles] = useState([])

  Backendless.serverURL = "https://eu-api.backendless.com"
  Backendless.initApp( process.env.REACT_APP_APP_ID, process.env.REACT_APP_KEY );
  return (
    
    <div className="App">
      <Routes>
        <Route path='/articles' element={<Articles1 articles= {articles} setarticles= {setarticles} />} />
      </Routes>
    </div>
  );
}

export default App;
