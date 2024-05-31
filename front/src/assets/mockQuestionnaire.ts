import { QuestionnaireI } from "../interfaces/QuestionnaireI";

const mockQuestionnaire: QuestionnaireI[] = [
    {
        id: 1,
        title: "TypeScript Basics",
        description: "Testez vos connaissances de base en TypeScript.",
        questions: [1, 2],
    },
    {
        id: 2,
        title: "Java Basics",
        description: "Testez vos connaissances de base en Java.",
        questions: [3, 4],
    },
    {
        id: 3,
        title: "Python Basics",
        description: "Testez vos connaissances de base en Python.",
        questions: [5, 6],
    },
    {
        id: 4,
        title: "Haskell Basics",
        description: "Testez vos connaissances de base en Haskell.",
        questions: [7, 8],
    },
];

export default mockQuestionnaire;
