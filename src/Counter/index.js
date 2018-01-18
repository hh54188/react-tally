import React from "react";
import { Statistic } from "semantic-ui-react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { counter } = this.props;
    return (
      <Statistic inverted>
        <Statistic.Value>{counter}</Statistic.Value>
      </Statistic>
    );
  }
}

export default Counter;
