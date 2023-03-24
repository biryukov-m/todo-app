import styled from 'styled-components';
import { MEDIA, SPACES } from '../../../theme';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: ${SPACES.s};
`;

export const SwitchContainer = styled.div`
  margin-left: auto;
  @media screen and (max-width: ${MEDIA.mobile}px) {
    margin-left: ${SPACES.xl};
  }
`;
