import React from 'react';
import { connect } from 'react-redux';
import { addCounter, delCounter } from "../actions/App.actions";
import { withRouter } from 'react-router-dom';

class show extends React.Component {
  render() {
    return (
      <div>
          <p><h2><font color="#400037">your count </font><font color="red">:</font> <font color="#FFFF33">{this.props.count} </font></h2></p>

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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(show));
