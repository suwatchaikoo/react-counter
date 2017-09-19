import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter, delCounter } from "../actions/App.actions";
import { withRouter } from 'react-router-dom';

class CounterPage extends Component {
  render() {
    return (
      <div>
        <h1><font color="#00FF33"> This is a Counter page</font></h1>
        <p><font color="#FF9922"> your count: {this.props.count} </font></p>
        <button onClick={() => this.props.add(1)}>+</button>
        <button onClick={() => this.props.del(1)}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.app
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (val) => {
      dispatch(addCounter(val));
    },
    del: (val) => {
      dispatch(delCounter(val));
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CounterPage));
