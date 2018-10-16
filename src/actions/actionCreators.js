import { UPDATE_QUESTION_VALUE, CLEAR_QUESTION_VALUE, GET_QUESTIONS_FROM_DATABASE } from ".";

export const getQuestionsFromDatabase = (questions) => ({
    type: GET_QUESTIONS_FROM_DATABASE,
    questions
})

export const updateQuestionValue = (id, newValue) => ({
    type: UPDATE_QUESTION_VALUE,
    id,
    newValue
})

export const clearQuestionValue = (id) => ({
    type: CLEAR_QUESTION_VALUE,
    id
})
