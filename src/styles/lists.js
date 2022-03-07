import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  padding: 20px 0;
`;

export const Card = styled.div`
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 0em 0em;
  text-align: center;
  width: 95%;
  height: max-content;
`;

export const Img = styled.img`
  max-width: 100%;
`;

export const P = styled.p`
  font-size: 0.8rem;
`;
