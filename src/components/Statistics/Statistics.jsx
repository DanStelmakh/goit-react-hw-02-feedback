import React from 'react';
import {
  Statistic,
  Title,
  Item,
} from 'components/Statistics/Statistics.styled';
import { Notification } from 'components/Notification/Notification';

class Statistics extends React.Component {
  render() {
    const { incrementGood, incrementNeutral, incrementBad, total, percent } =
      this.props;
    return incrementGood !== 0 ||
      incrementNeutral !== 0 ||
      incrementBad !== 0 ? (
      <div>
        <Title>Statistics</Title>
        <Statistic>
          <Item>Good: {incrementGood}</Item>
          <Item>Neutral: {incrementNeutral}</Item>
          <Item>Bad: {incrementBad}</Item>
          <Item>Total: {total}</Item>
          <Item>
            Positive feedback:
            {percent}%
          </Item>
        </Statistic>
      </div>
    ) : (
      <Notification message="There is no feedback"></Notification>
    );
  }
}

export { Statistics };
