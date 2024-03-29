import styled from 'styled-components';

import BackgroundImage from '../../images/background.png';

import { FooterContainer } from '../layout/StyledComponents';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: 1000px;
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 12px;

  * {
    overflow: auto;
  }

  ${FooterContainer} {
    margin-top: auto;
  }
`;
