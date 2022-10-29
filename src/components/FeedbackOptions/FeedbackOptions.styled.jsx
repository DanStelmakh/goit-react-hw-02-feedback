import styled from 'styled-components';

export const FeedBackOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
`;
export const Btn = styled.button`
  padding: 10px;
  background-color: burlywood;
  border: 1px solid transparent;
  border-radius: 15px;
  color: #fff;
  font-size: 18px;
  transition: background-color 500ms cubic-bezier(0.165, 0.84, 0.44, 1),
    border 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

  :hover {
    background-color: cornflowerblue;
    border: 1px solid burlywood;
  }
`;
export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
`;
