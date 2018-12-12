import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: auto;
  min-width: 142px;
  max-width: 186px;
  white-space: wrap;
  padding: 10px;
  border: 1px solid rgba(225, 225, 225, .2);
  background-color: black;
`

export const Image = styled.img`
  position: relative;
  max-width: 100%;
  max-height: 280px;
  height: auto;
  image-rendering: pixelated;
  @media screen and (max-width: 992px) {
    max-height: 240px;
  }
`;
