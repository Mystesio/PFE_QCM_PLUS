import { NavLink, Route, Routes } from 'react-router-dom';
import Login from "./pages/login/Login";
import Questionnaire from './pages/questionnaire/Questionnaire';

function App() {

  return (
    <div>
      <div>
        <div>
          <h1>QCM</h1>
        </div>
        <ul>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/questionnaire">Questionnaire</NavLink></li>
        </ul>
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
      </Routes>

    </div>
  )
}

export default App;
