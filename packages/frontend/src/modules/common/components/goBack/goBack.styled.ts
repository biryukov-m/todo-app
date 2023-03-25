import styled from 'styled-components';
import { Button } from '../button/button.styled';
import { MEDIA, SPACES } from '../../../theme';

export const GoBack = styled(Button)`
  @media screen and (min-width: ${MEDIA.tablet}px) {
    padding-left: ${SPACES.xxl};
    padding-right: ${SPACES.xxl};
  }
`;
