import React, { Component } from 'react';
import {connect} from 'react-redux';
import data from './dummy/db.json'
import './App.css';
import Header from "./components/header";
import Description from './components/description';
import { getQuestionsFromDatabase } from './actions/actionCreators';
import QuestionViewContainer from './components/QuestionViewContainer';
 


class App extends Component {
  componentDidMount() {
 
    this.props.fetchData(data)
  }
  render() {
    return (
        <div className="App">
          <Header/>
          <Description/>
          <QuestionViewContainer/>
        </div>
    );
  }
}
const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
  return {
    fetchData: (data) => dispatch(getQuestionsFromDatabase(data))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
