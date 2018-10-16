import { UPDATE_QUESTION_VALUE, GET_QUESTIONS_FROM_DATABASE } from '../actions';
import getQuestionsFromDatabase from '../utils/getQuestionsFromDatabase'
import updateQuestions from '../utils/updateQuestions';

function questions(state = [], action) {
    switch (action.type) {
        case GET_QUESTIONS_FROM_DATABASE:
            return getQuestionsFromDatabase(state, action.questions);
        case UPDATE_QUESTION_VALUE:
            return updateQuestions(state, action);
        default:
            return state
    }
}

export default questions
