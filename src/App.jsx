import React, { Component } from 'react';
import Feedback from './components/Feedback';
import Widget from 'components/Widget';
import css from './App.module.scss';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = feedback => {
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  render() {
    return (
      <div className={css.bodyWrapper}>
        <Widget title="Feedback widget">
          <Feedback options={this.state} onClick={this.addFeedback} />
        </Widget>
      </div>
    );
  }
}
