import mockQuestions from "../../assets/mockQuestions"
import mockQuestionnaire from "../../assets/mockQuestionnaire";
import { QuestionsI } from "../../interfaces/QuestionsI";
import './ListeQuestions.css'
export default function ListeQuestions() {
    const getQuestionsForQuestionnaire = (questionIds: number[]) => {
        return questionIds.map(id => mockQuestions.find(question => question.id_question === id));
    };

    return (
        <table className="question-table">
            <thead>
                <tr>
                    <th>ID Question</th>
                    <th>ID Questionnaire</th>
                    <th>Texte de la Question</th>
                    <th>Nombre de Réponses</th>
                    <th>Choix</th>
                    <th>Bonne Réponse</th>
                    <th>Date Création</th>
                    <th>Date Modification</th>
                </tr>
            </thead>
            <tbody>
                {mockQuestions.map((question: QuestionsI) => (
                    <tr key={question.id_question}>
                        <td>{question.id_question}</td>
                        <td>{question.id_questionnaire}</td>
                        <td>{question.texte_question}</td>
                        <td>{question.nbre_reponses}</td>
                        <td>{question.choix.join(', ')}</td>
                        <td>{question.bonne_reponse.join(', ')}</td>
                        <td>{question.date_created}</td>
                        <td>{question.date_modified}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
