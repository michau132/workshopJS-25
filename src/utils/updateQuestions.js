

const getQuestionById = id => question => question.id === id;


export default function updateQuestions(questions, action) {
    
    const {id, newValue} = action;
    const foundIndex = questions.findIndex(getQuestionById(id))
    const oldQuestion = questions[foundIndex]
    const prevQuestions = questions.slice(0, foundIndex);
    const nextQuestions = questions.slice(foundIndex + 1);
    const updatedQuestions = {...oldQuestion, currentValue: newValue};
    return [...prevQuestions, updatedQuestions, ...nextQuestions]
}