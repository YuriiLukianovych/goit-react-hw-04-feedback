import Statistic from './Statistic';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import css from './Feedback.module.scss';

const Feedback = ({ good, neutral, bad, onClick }) => {
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100) || 0;

  return (
    <div className={css.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onClick}
        />
      </Section>

      <Section title="Statistics:">
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </div>
  );
};

export default Feedback;
