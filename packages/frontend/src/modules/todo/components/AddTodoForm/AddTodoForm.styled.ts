import styled from 'styled-components';
import { COLORS, FONTS, SPACES } from '../../../theme';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 1px solid black;
  position: relative;
  form {
    background-color: ${COLORS.white};
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    border: 1px solid ${COLORS.black};
    input {
      display: block;
      width: 100%;
      padding: ${SPACES.s} ${SPACES.m};
      font-family: ${FONTS.FAMILIES.normal};
      font-size: ${FONTS.SIZES.m};
      color: ${COLORS.black};
      margin-bottom: ${SPACES.m};
    }
    textarea {
      display: block;
      width: 100%;
      padding: ${SPACES.s} ${SPACES.m};
      font-family: ${FONTS.FAMILIES.normal};
      font-size: ${FONTS.SIZES.m};
      color: ${COLORS.black};
      margin-bottom: ${SPACES.m};
      resize: none;
    }
    .errors {
      position: absolute;
    }
  }
`;
