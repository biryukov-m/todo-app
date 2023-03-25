import styled from 'styled-components';
import { MEDIA, SPACES } from '../../../theme';

export const Wrapper = styled.div`
  width: 95%;
  margin: ${SPACES.l} auto ${SPACES.xl};
  @media screen and (max-width: ${MEDIA.tablet}px) {
    max-width: 85vw;
  }
  @media screen and (min-width: ${MEDIA.mobile}px) and (max-width: ${MEDIA.tablet}px) {
    margin-bottom: 10vh;
  }
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row-reverse;
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: ${SPACES.l};
  @media screen and (max-width: ${MEDIA.tablet}px) {
    gap: ${SPACES.s};
  }
  @media screen and (max-width: ${MEDIA.mobile}px) {
    gap: ${SPACES.xs};
    margin-right: ${SPACES.xs};
  }
`;
