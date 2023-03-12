import styled from 'styled-components';
import { MEDIA, SPACES } from '../../../theme';

export const Layout = styled.div`
  width: 95%;
  margin: ${SPACES.l} auto ${SPACES.xl};
  @media screen and (max-width: ${MEDIA.tablet}px) {
    max-width: 85vw;
  }
`;
export const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row-reverse;
`;
