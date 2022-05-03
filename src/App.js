import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {Home} from './pages/Home';
import {PublicAnnouncements} from './pages/PublicAnnouncements';
import {ReportACrime} from './pages/ReportACrime';
import {Staff} from './pages/Staff';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' exact component={Home}/>
        <Route path='/staff' component={Staff}/>
        <Route path='/publicannouncements' component={PublicAnnouncements}/>
        <Route path='/reportacrime' component={ReportACrime}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
