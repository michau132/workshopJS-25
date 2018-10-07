import React, { Component } from 'react';
import arrayList from "../../dummy/db.json"
import QuestionElement from './questionElement';
import updateQuestions from '../../utils/updateQuestions';


class List extends Component {
    state = {
        questions: []
    };
    componentDidMount() {
        this.setState({
            questions: arrayList.questions
        })
    }
    onValueChange = (id) => (e) => {
        console.log(e.target.value)
        const value = e.target.value;
        const upd = updateQuestions(this.state, id, value)
    }
    render() {
        return (
            <ul>
                {
                   this.state.questions.map(listItem => (
                       <QuestionElement 
                             item={listItem}
                             key={listItem.id}
                             onValueChange={this.onValueChange} 
                       />
                   )) 
                }
            </ul>
        );
    }
}

export default List;