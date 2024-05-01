import { NavLink, Route, Routes } from 'react-router-dom';
import QuestionnaireTable from './pages/QuestionnaireTable'
import Login from "./pages/Login";

function App() {

  return (
    <div>
      <h1>Test</h1>
      <div>
        <div>
          <h1>Ciné 4 Me</h1>
        </div>
        <ul>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/questionnaire">Questionnaire</NavLink></li>
        </ul>
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/questionnaire" element={<QuestionnaireTable />} />
      </Routes>

    </div>
  )
}

export default App;
