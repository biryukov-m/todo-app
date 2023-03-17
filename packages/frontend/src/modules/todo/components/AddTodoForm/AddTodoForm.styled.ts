import styled from 'styled-components';
import { COLORS, FONTS, SPACES } from '../../../theme';

export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Inner = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  form {
    background-color: ${COLORS.white};
    padding: ${SPACES.xl};
    h2 {
      font-family: ${FONTS.FAMILIES.normal};
      font-size: ${FONTS.SIZES.l};
      color: ${COLORS.black};
      margin-bottom: ${SPACES.m};
    }
    input {
      display: block;
      width: 100%;
      padding: ${SPACES.s} ${SPACES.m};
      font-family: ${FONTS.FAMILIES.normal};
      font-size: ${FONTS.SIZES.m};
      color: ${COLORS.black};
    }
    textarea {
      display: block;
      width: 100%;
      padding: ${SPACES.s} ${SPACES.m};
      font-family: ${FONTS.FAMILIES.normal};
      font-size: ${FONTS.SIZES.m};
      color: ${COLORS.black};
      resize: none;
    }
    .errors {
      position: absolute;
      color: ${COLORS.secondary};
      font-family: ${FONTS.FAMILIES.normal};
      font-size: ${FONTS.SIZES.s};
    }
    label {
      color: ${COLORS.black};
      font-family: ${FONTS.FAMILIES.normal};
      font-size: ${FONTS.SIZES.m};
    }
  }
`;

export const ErrorContainer = styled.div`
  position: relative;
  padding-bottom: ${SPACES.xl};
`;

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${SPACES.l};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
