import css from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.btnsWrapper}>
    {options.map(btn => {
      return (
        <button
          className={`${css.btn} ${css[btn]}`}
          key={btn}
          type="button"
          onClick={() => onLeaveFeedback(btn)}
        >
          {btn}
        </button>
      );
    })}
  </div>
);

export default FeedbackOptions;
