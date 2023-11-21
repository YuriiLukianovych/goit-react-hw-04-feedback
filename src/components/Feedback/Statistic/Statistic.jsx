import Notification from '../Notification';
import css from './Statistic.module.scss';

const Statistic = ({ good, neutral, bad, total, positivePercentage }) =>
  total ? (
    <div className={css.statistic}>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive feedback: <span>{positivePercentage + '%'}</span>
      </p>
    </div>
  ) : (
    <Notification message="There is no feedback"></Notification>
  );

export default Statistic;
