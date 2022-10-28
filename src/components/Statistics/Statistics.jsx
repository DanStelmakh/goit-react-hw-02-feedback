import React from 'react';
import {
  Statistic,
  Title,
  Item,
} from 'components/Statistics/Statistics.styled';

class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, percent, total } = this.props;
    return (
      <div>
        <Title>Statistics</Title>
        <Statistic>
          <Item>Good: {good}</Item>
          <Item>Neutral: {neutral}</Item>
          <Item>Bad: {bad}</Item>
          <Item>Total: {total}</Item>
          <Item>
            Positive feedback:
            {percent}%
          </Item>
        </Statistic>
      </div>
    );
  }
}
export { Statistics };
