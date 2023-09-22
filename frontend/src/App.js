import './assets/css/App.css';

import { Route, Routes, BrowserRouter } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import Home from './pages/Home';
import SignInAs from './pages/SignInAs';
import NavBar from './components/NavBar';
import HowToUse from './pages/howtoUse';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route
            path="/users/signinas"
            element={<SignInAs />}
          />
          <Route path="/howtoUse" element={ <HowToUse/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
