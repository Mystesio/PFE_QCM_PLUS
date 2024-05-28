import './NewQuestion.css';
import type { FormProps } from 'antd';
import { Form, Input } from 'antd';
import { useState } from 'react';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};



const NewQuestion: React.FC = () => {
    const [question, setQuestion] = useState('');
    const [numResponses, setNumResponses] = useState(3);
    const [responses, setResponses] = useState(Array(numResponses).fill({ text: '', isCorrect: false }));

    const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.target.value);
    };


    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     console.log('Change:', e.target.value);
    // };

    const handleNumResponsesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        setNumResponses(value);
        setResponses(Array(value).fill({ text: '', isCorrect: false }));
    };

    const handleResponseChange = (index: number, field: string, value: any) => {
        const newResponses = [...responses];
        newResponses[index] = { ...newResponses[index], [field]: value };
        setResponses(newResponses);
    };

    const handleAddResponse = () => {
        setResponses([...responses, { text: '', isCorrect: false }]);
        setNumResponses(numResponses + 1);
    };

    const handleRemoveResponse = (index: number) => {
        const newResponses = responses.filter((_, i) => i !== index);
        setResponses(newResponses);
        setNumResponses(numResponses - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({ question, responses });
    };

    return (
        <div className="form-container">
            <h2>Création de questions</h2>


            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 800 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Question">
                    <Input placeholder="Question"
                        type="text" value={question}
                        onChange={handleQuestionChange} />
                </Form.Item>

                <Form.Item<FieldType>
                    label="nombre de question">
                    <Input type="number"
                        min="1"
                        max="5"
                        value={numResponses}
                        onChange={handleNumResponsesChange} />
                </Form.Item>
                {responses.map((response, index) => (
                    <div key={index}>
                        <Form.Item<FieldType>
                            label="Quesition {index + 1}">
                            <Input
                                type="text"
                                min="1"
                                value={response.text}
                                onChange={(e) => handleResponseChange(index, 'text', e.target.value)} />
                            <div>
                                Marquer comme :
                                <label>
                                    <input
                                        type="radio"
                                        name={`response-${index}`}
                                        checked={response.isCorrect}
                                        onChange={() => handleResponseChange(index, 'isCorrect', true)}
                                    />
                                    Bonne réponse
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name={`response-${index}`}
                                        checked={!response.isCorrect}
                                        onChange={() => handleResponseChange(index, 'isCorrect', false)}
                                    />
                                    Mauvaise réponse
                                </label>
                                <button type="button" onClick={() => handleRemoveResponse(index)}>
                                    🗑️
                                </button>
                            </div>
                        </Form.Item>
                    </div>

                ))}



                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <button onSubmit={handleSubmit} className="questionnaire-button">
                        VALIDER
                    </button>
                </Form.Item>
                <button type="button" onClick={handleAddResponse}>Ajouter une réponse</button>



            </Form>






            <form onSubmit={handleSubmit}>
                <div className="button-container">
                    {/* <button type="button" onClick={() => alert('Ajouter une question')}>Ajouter une question</button>
                    <button type="submit">Terminer</button> */}
                </div>
            </form>
        </div>
    );
};

export default NewQuestion;
