import React from "react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";

import Stars from "../Stars";
import Counter from "../Counter";
import "./index.less";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <Stars />
        <Counter counter={counter} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { counter } = state;
  return {
    counter
  };
}

export default connect(mapStateToProps)(App);
