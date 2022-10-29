import React from 'react';
import {
  FeedBackOptions,
  Btn,
  Title,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

class FeedbackOptions extends React.Component {
  render() {
    const { goodFeedback, neutralFeedback, badFeedback } = this.props;

    return (
      <div>
        <Title>Please leave feedback</Title>
        <FeedBackOptions>
          <Btn onClick={goodFeedback} name="good">
            Good
          </Btn>
          <Btn onClick={neutralFeedback} name="neutral">
            Neutral
          </Btn>
          <Btn onClick={badFeedback} name="bad">
            Bad
          </Btn>
        </FeedBackOptions>
      </div>
    );
  }
}
export { FeedbackOptions };
