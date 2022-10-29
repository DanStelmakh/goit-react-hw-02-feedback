import React from 'react';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
class Section extends React.Component {
  render() {
    const {
      good,
      neutral,
      bad,
      incrementGood,
      incrementNeutral,
      incrementBad,
      total,
      percent,
    } = this.props;
    return (
      <section>
        <FeedbackOptions
          goodFeedback={good}
          neutralFeedback={neutral}
          badFeedback={bad}
        ></FeedbackOptions>
        <Statistics
          incrementGood={incrementGood}
          incrementNeutral={incrementNeutral}
          incrementBad={incrementBad}
          total={total}
          percent={percent}
        ></Statistics>
      </section>
    );
  }
}
export { Section };
