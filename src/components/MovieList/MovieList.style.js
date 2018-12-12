import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  top: 120px;
  width: 100%;
  height: auto;
  background-color: black;
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Next = styled.p`
  color: white;
  position: absolute;
  right: 10px;
  top: -27px;
  font-size: 14px;
  z-index: 2;
  cursor: pointer;
`

