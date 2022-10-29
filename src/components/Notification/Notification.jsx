import React from 'react';
class Notification extends React.Component {
  render() {
    return (
      <span
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: 8,
          padding: '12px 16px',
          borderRadius: 4,
          backgroundColor: 'gray',
          color: 'white',
          fontSize: '25px',
        }}
      >
        {this.props.message}
      </span>
    );
  }
}
export { Notification };
