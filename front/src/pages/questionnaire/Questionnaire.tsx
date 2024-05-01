import { useState } from 'react';
import questionnaire from '../../assets/mockQuestionnaire';
import './Questionnaire.css'

const Questionnaire = () => {
    const [questionnaires,] = useState(questionnaire);

    return (
        <div className="questionnaire-container">
            <h2>Questionnaires</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th className='questionnaire-intitule'>Intitulé</th>
                        <th className='questionnaire-description'>Description</th>
                        <th className='questionnaire-action'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {questionnaires.map((question) => (
                        <tr key={question.id}>
                            <td>{question.title}</td>
                            <td>{question.description}</td>
                            <td style={{ display: 'flex' }}>
                                <button onClick={() => alert('Edit ' + question.title)}>✏️</button>
                                <button onClick={() => alert('Delete ' + question.title)}>🗑️</button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <button style={{ marginTop: '10px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Créer un questionnaire
            </button>
        </div>
    );
};

export default Questionnaire;
