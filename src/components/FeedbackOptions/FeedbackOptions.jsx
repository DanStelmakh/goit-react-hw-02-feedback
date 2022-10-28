import React from 'react';
import {
  FeedBackOptions,
  Btn,
  Title,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

class FeedbackOptions extends React.Component {
  render() {
    const { good, neutral, bad } = this.props;

    return (
      <div>
        <Title>Please leave feedback</Title>
        <FeedBackOptions>
          <Btn onClick={good} name="good">
            Good
          </Btn>
          <Btn onClick={neutral} name="neutral">
            Neutral
          </Btn>
          <Btn onClick={bad} name="bad">
            Bad
          </Btn>
        </FeedBackOptions>
      </div>
    );
  }
}
export { FeedbackOptions };
