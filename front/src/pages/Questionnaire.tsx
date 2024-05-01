import { useState } from 'react';

const Questionnaire = () => {
    // Sample data for the table
    const [questionnaires, setQuestionnaires] = useState([
        { id: 1, title: 'TypeScript', description: 'TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d\'améliorer et de sécuriser la production de code JavaScript. Il s\'agit d\'un sur-ensemble syntaxique strict de JavaScript.', questionsCount: 18 },
        { id: 2, title: 'Java', description: 'Java est un langage de programmation de haut niveau orienté objet créé par James Gosling et Patrick Naughton, employés de Sun Microsystems, avec le soutien de Bill Joy, présenté officiellement le 23 mai 1995 au SunWorld.', questionsCount: 22 },
        { id: 3, title: 'Python', description: 'Python est un langage de programmation interprété, multiparadigme et multiplateformes. Il favorise la programmation impérative structurée, fonctionnelle et orientée objet.', questionsCount: 22 },
        { id: 4, title: 'Haskell', description: 'Haskell est un langage de programmation fonctionnel fondé sur le lambda-calcul et la logique combinatoire.', questionsCount: 20 }
    ]);

    return (
        <div style={{ padding: '20px' }}>

            <h1>New QCM Plus</h1>
            <h2>Questionnaires</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th>Intitulé</th>
                        <th>Description</th>
                        <th>Nombre de questions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {questionnaires.map((q) => (
                        <tr key={q.id}>
                            <td>{q.title}</td>
                            <td>{q.description}</td>
                            <td>{q.questionsCount}</td>
                            <td>
                                <button onClick={() => alert('Edit ' + q.title)}>✏️</button>
                                <button onClick={() => alert('Delete ' + q.title)}>🗑️</button>
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
