import styled from 'styled-components';

const SectionHeader = styled.h2`
  font-size: 3.5rem;
  font-family: Quantum, Montserrat, sans-serif;
  font-weight: 500;
  margin: 0;

  border-bottom: 3px solid #8b7283;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export default SectionHeader;
