import Backendless from 'backendless';
import './App.css';

function App() {
  
  Backendless.serverURL = "https://eu-api.backendless.com"
  Backendless.initApp( process.env.REACT_APP_APP_ID, REACT_APP_KEY );
  return (
    
    <div className="App">
      
    </div>
  );
}

export default App;
