import styled from 'styled-components';
import { SPACES, COLORS } from '../../../theme';

export const Wrapper = styled.div`
  margin-bottom: ${SPACES.s};
`;

export const Table = styled.table`
  border: 1px solid ${COLORS.black};
  width: 100%;
  padding: ${SPACES.s};
  border-collapse: collapse;
  & tr {
    display: grid;
    grid-template-columns: 12vw 1fr 280px;
    border-collapse: collapse;
  }
`;
