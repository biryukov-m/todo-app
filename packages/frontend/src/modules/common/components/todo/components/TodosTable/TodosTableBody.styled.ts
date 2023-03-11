import styled from 'styled-components';
import { COLORS, FONTS, SPACES } from '../../../../../theme';

export const Tbody = styled.tbody``;
export const Tr = styled.tr`
  background-color: ${COLORS.white};
  text-align: left;
  &:nth-of-type(2n) {
    background-color: ${COLORS.grey};
  }
`;
export const Td = styled.td`
  display: flex;
  align-items: center;
  font-family: ${FONTS.FAMILIES.normal};
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.m};
  border-left: 1px solid ${COLORS.black};
  padding: ${SPACES.s} ${SPACES.m};
  word-break: break-all;
  &:nth-of-type(1) {
    border-left: none;
  }
`;
