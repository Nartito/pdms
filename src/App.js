import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {Home} from './pages/Home';
import {ReportACrime} from './pages/ReportACrime';
import {PublicAnnouncements} from './pages/PublicAnnouncements';
import {Staff} from './pages/Staff';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={< Home />}></Route>
          <Route path="/staff" element={< Staff />}></Route>
          <Route path="/publicannouncements" element={< PublicAnnouncements />}></Route>
          <Route path="/reportacrime" element={< ReportACrime />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
