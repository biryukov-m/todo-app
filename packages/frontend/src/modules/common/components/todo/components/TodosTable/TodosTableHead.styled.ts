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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.darkGrey};
  font-family: ${FONTS.FAMILIES.normal};
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.m};
  border-left: 1px solid ${COLORS.black};
  padding: ${SPACES.xs} ${SPACES.s};
  &:nth-of-type(1) {
    border-left: none;
  }
`;
export const IconHolder = styled.div`
  position: relative;
  cursor: pointer;
  &:hover > .default-icon-holder {
    opacity: 1;
  }
  & > svg {
    color: ${COLORS.black};
    position: absolute;
    top: 2px;
    width: 27px;
    height: 19px;
  }
`;
export const DefaultIconHolder = styled.div`
  display: inline-flex;
  flex-direction: column;
  position: absolute;
  opacity: 0;
  transition: all 0.1s ease-in;
  top: 1px;
  & > svg {
    width: 27px;
    height: 14px;
    padding: 0;
    &:nth-of-type(1) {
      margin-bottom: -7px;
    }
  }
`;
