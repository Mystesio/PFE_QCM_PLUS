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
                        <tr className="questionnaire-tr" key={question.id}>
                            <td>{question.title}</td>
                            <td>{question.description}</td>
                            <br />
                            <td className="questionnaire-td-action">
                                <button onClick={() => alert('Edit ' + question.title)}>✏️</button>
                                <button onClick={() => alert('Delete ' + question.title)}>🗑️</button>
                            </td>
                            <br />
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='questionnaire-div-btn'>
                <button className="questionnaire-button">
                    CREER UN QUESTIONNAIRE
                </button>
            </div>
        </div>
    );
};

export default Questionnaire;
