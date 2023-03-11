import styled from 'styled-components';
import { FONTS, COLORS, SPACES } from '../../../theme';

interface IButton {
  large?: boolean;
}
export const Button = styled.button<IButton>`
  outline: 0;
  text-decoration: none;
  padding: ${SPACES.xs} ${SPACES.s};
  background-color: ${COLORS.white};
  font-family: ${FONTS.FAMILIES.normal};
  font-size: ${FONTS.SIZES.m};
  color: ${COLORS.black};
  cursor: pointer;
  border: 1px solid ${COLORS.black};
  border-radius: 3px;
  box-shadow: 0px 12px 40px -7px rgba(0, 0, 0, 0.35);
  transition: all 0.3s ease 0s;
  &:hover,
  &.clicked {
    background-color: ${COLORS.primary};
    box-shadow: 0px 12px 40px -7px ${COLORS.primary};
  }
`;
