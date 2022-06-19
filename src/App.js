import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {Home} from './pages/Home';
import {ReportACrime} from './pages/ReportACrime';
import {PublicAnnouncements} from './pages/PublicAnnouncements';
import {Staff} from './pages/Staff';
import {CarAccident} from './pages/CarAccident';
import {ConvictedFelon} from './pages/ConvictedFelon';
import {CourtDuty} from './pages/CourtDuty';
import {EvidenceRoom} from './pages/EvidenceRoom';
import {Impound} from './pages/Impound';
import {Investigation} from './pages/Investigation';
import {NonEmergency} from './pages/NonEmergency';
import {OpenAssignment} from './pages/OpenAssignment';
import {ParkingTicket} from './pages/ParkingTicket';
import {PrisonDuty} from './pages/PrisonDuty';
import {StaffDuty} from './pages/StaffDuty';
import {Warrant} from './pages/Warrant';

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
          <Route path="/caraccident" element={< CarAccident />}></Route>
          <Route path="/impound" element={< Impound />}></Route>
          <Route path="/parkingticket" element={< ParkingTicket />}></Route>
          <Route path="/staffduty" element={< StaffDuty />}></Route>
          <Route path="/prisonduty" element={< PrisonDuty />}></Route>
          <Route path="/courtduty" element={< CourtDuty />}></Route>
          <Route path="/nonemergency" element={< NonEmergency />}></Route>
          <Route path="/convictedfelon" element={< ConvictedFelon />}></Route>
          <Route path="/investigation" element={< Investigation />}></Route>
          <Route path="/evidenceroom" element={< EvidenceRoom />}></Route>
          <Route path="/openassignment" element={< OpenAssignment />}></Route>
          <Route path="/warrant" element={< Warrant />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
