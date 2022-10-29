import React from 'react';
import { Section } from 'components/Section/Section';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  //Методы подсчета статистики

  countGoodFeedback = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
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
      <Section
        good={countGoodFeedback}
        neutral={countNeutralFeedback}
        bad={countBadFeedback}
        incrementGood={good}
        incrementNeutral={neutral}
        incrementBad={bad}
        total={countTotalFeedback({ good, neutral, bad })}
        percent={countPositiveFeedbackPercentage({ good, neutral, bad }) || 0}
      ></Section>
    );
  }
}

export { App };
