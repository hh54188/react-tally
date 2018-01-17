import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Statistic } from "semantic-ui-react";

import Stars from "../Stars";

const StatisticExampleStatistic = () => (
  <Statistic color="teal">
    <Statistic.Value>5550</Statistic.Value>
    <Statistic.Label>Counts</Statistic.Label>
  </Statistic>
);

import "./index.less";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Stars />
        <StatisticExampleStatistic />
      </div>
    );
  }
}

export default App;
