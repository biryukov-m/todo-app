import styled from 'styled-components';
import { COLORS, FONTS, SPACES } from '../../../../../theme';

export const Thead = styled.thead``;
export const Tr = styled.tr`
  background-color: ${COLORS.darkGrey};
  border-collapse: collapse;
  text-align: left;
  &:nth-last-of-type(1) {
    text-align: center;
  }
`;
export const Th = styled.th`
  background-color: ${COLORS.darkGrey};
  font-family: ${FONTS.FAMILIES.normal};
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.s};
  border-left: 1px solid ${COLORS.black};
  padding: ${SPACES.xs} ${SPACES.s};
  &:nth-of-type(1) {
    border-left: none;
  }
`;
