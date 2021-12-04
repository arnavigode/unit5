
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar/>
      </div>
    </Router>
  );
}

export default App;
