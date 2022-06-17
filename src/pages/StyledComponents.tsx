import styled from 'styled-components';

import BackgroundImage from '../images/background.png';

import { FooterContainer } from '../components/layout/StyledComponents';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: 1000px;
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 12px;

  ${FooterContainer} {
    margin-top: auto;
  }
`;
