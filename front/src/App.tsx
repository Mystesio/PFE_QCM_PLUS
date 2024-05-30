import { NavLink, Route, Routes } from 'react-router-dom';
import Login from "./pages/login/Login";
import Questionnaire from './pages/questionnaire/Questionnaire';
import NewQuestion from './pages/newQuestion/NewQuestion';
import ListeQuestions from './pages/listeQuestions/ListeQuestions';
import QuestionDetail from './pages/questionDetails/QuestionDetails';

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
          <li><NavLink to="/new-question">New question</NavLink></li>
          <li><NavLink to="/questions">question</NavLink></li>
        </ul>
      </div>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/new-question" element={<NewQuestion />} />
        <Route path="/questions" element={<ListeQuestions />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
      </Routes>

    </div>
  )
}

export default App;
