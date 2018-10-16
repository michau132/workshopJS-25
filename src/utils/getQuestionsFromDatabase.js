
export default function getQuestionsFromDatabase(state, data) {
    if (state === data.questions) {
        return state
    } else {
        return data.questions
    }
    
}