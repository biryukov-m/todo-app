import styled from 'styled-components';
import { SPACES } from '../../../../../theme';

export const Layout = styled.div`
  width: 95%;
  margin: ${SPACES.l} auto ${SPACES.xl};
`;
export const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row-reverse;
`;
