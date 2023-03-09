import styled from 'styled-components';
import { FONTS, COLORS, SPACES, MEDIA } from '../../../../../theme';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 ${SPACES.m};
  flex-wrap: wrap-reverse;
  row-gap: ${SPACES.s};
`;
export const ButtonGroup = styled.div`
  display: flex;
  & > button {
    border-radius: 0;
    &:nth-last-child(1) {
      border-bottom-right-radius: 3px;
      border-top-right-radius: 3px;
    }
    &:nth-of-type(1) {
      border-bottom-left-radius: 3px;
      border-top-left-radius: 3px;
    }
    &:nth-of-type(n + 2) {
      border-left: none;
    }
  }
  @media screen and (max-width: ${MEDIA.mobile}) {
    width: 100%;
    & > button {
      flex-grow: 1;
    }
  }
`;

export const SearchBarWrapper = styled.div`
  position: relative;
  width: 300px;
  @media screen and (max-width: ${MEDIA.tablet}) {
    width: 36%;
  }
  @media screen and (max-width: ${MEDIA.mobile}) {
    width: 200px;
  }
`;

export const SearchBarField = styled.input`
  width: 100%;
  background-color: ${COLORS.white};
  outline: 0;
  border: 1px solid ${COLORS.black};
  outline: 0;
  text-decoration: none;
  padding: ${SPACES.xs} ${SPACES.s} ${SPACES.xs} ${SPACES.xl};
  background-color: ${COLORS.white};
  font-family: ${FONTS.FAMILIES.normal};
  font-size: ${FONTS.SIZES.m};
  color: ${COLORS.black};
  border: 1px solid ${COLORS.black};
  border-radius: 3px;
  box-shadow: 0px 13px 40px -12px rgba(0, 0, 0, 0.35);
  transition: all 0.3s ease 0s;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-left: ${SPACES.xs};
`;
