import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import mockQuestions from '../../assets/mockQuestions';
import './QuestionDetails.css'

const QuestionDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const questionId = parseInt(id || '', 10);
    const question = mockQuestions.find(q => q.id_question === questionId);
    const navigate = useNavigate();

    if (!question) {
        return <div>Question non trouvée</div>;
    }

    const handleSave = () => {
        // Logique de sauvegarde de la question
        console.log(`Sauvegarder les modifications pour la question avec l'ID: ${question.id_question}`);
    };

    const handleDelete = () => {
        // Logique de suppression de la question
        console.log(`Supprimer la question avec l'ID: ${question.id_question}`);
        navigate('/'); // Retour à la liste des questions après suppression
    };

    return (
        <div className="container">
            <h1 className="title">Détails de la Question</h1>
            <div className="mb-4">
                <label className="label">ID Questionnaire:</label>
                <span className="value">{question.id_questionnaire}</span>
            </div>
            <div className="mb-4">
                <label className="label">Question:</label>
                <input type="text" defaultValue={question.texte_question} className="input" />
            </div>
            <div className="mb-4">
                <label className="label">Nombre de Réponses:</label>
                <span className="value">{question.nbre_reponses}</span>
            </div>
            <div className="mb-4">
                <label className="label">Choix:</label>
                {question.choix.map((choix, index) => (
                    <div key={index} className="mb-2">
                        <input type="text" defaultValue={choix} className="input" />
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <label className="label">Bonne Réponse:</label>
                <span className="value">{question.bonne_reponse.join(', ')}</span>
            </div>
            <div className="button-container">
                <button onClick={handleSave} className="button button-save">Sauvegarder</button>
                <button onClick={handleDelete} className="button button-delete">Supprimer</button>
            </div>
        </div>
    );
};

export default QuestionDetail;
