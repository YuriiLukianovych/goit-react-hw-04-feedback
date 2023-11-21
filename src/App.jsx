import { useState } from 'react';
import Feedback from './components/Feedback';
import Widget from 'components/Widget';
import css from './App.module.scss';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = type => {
    switch (type) {
      case 'good':
        setGood(s => s + 1);
        break;

      case 'neutral':
        setNeutral(s => s + 1);
        break;

      case 'bad':
        setBad(s => s + 1);
        break;

      default:
        break;
    }
  };

  return (
    <div className={css.bodyWrapper}>
      <Widget title="Feedback widget">
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          onClick={addFeedback}
        />
      </Widget>
    </div>
  );
}

export default App;
