import React from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  //Методы подсчета статистики

  countGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  countNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  countBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return Math.round(
      (good * 100) / this.countTotalFeedback({ good, neutral, bad })
    );
  };
  render() {
    //============Деструктуризация========================================
    const {
      countGoodFeedback,
      countNeutralFeedback,
      countBadFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const { good, neutral, bad } = this.state;
    //======================================================================

    return (
      <div>
        <FeedbackOptions
          good={countGoodFeedback}
          neutral={countNeutralFeedback}
          bad={countBadFeedback}
        ></FeedbackOptions>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback({ good, neutral, bad })}
          percent={countPositiveFeedbackPercentage({ good, neutral, bad })}
        ></Statistics>
      </div>
    );
  }
}

export { App };
