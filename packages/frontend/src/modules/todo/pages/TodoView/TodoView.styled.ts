import styled from 'styled-components';
import { COLORS, FONTS, MEDIA, SPACES } from '../../../theme';

export const Article = styled.article``;
export const Title = styled.h3`
  font-family: ${FONTS.FAMILIES.normal};
  font-size: ${FONTS.SIZES.l};
  margin-bottom: ${SPACES.xl};
  color: ${COLORS.black};
`;
export const ArticleSubHeader = styled.h4`
  font-family: ${FONTS.FAMILIES.normal};
  font-size: ${FONTS.SIZES.s};
  font-weight: ${FONTS.WEIGHTS.light};
  margin-bottom: ${SPACES.m};
  color: ${COLORS.black};
`;
export const Text = styled.p`
  font-family: ${FONTS.FAMILIES.normal};
  font-size: ${FONTS.SIZES.m};
  font-weight: ${FONTS.WEIGHTS.normal};
  margin-bottom: ${SPACES.xl};
  color: ${COLORS.black};
`;
export const Switches = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${SPACES.m};
  margin-bottom: ${SPACES.xxl};
  padding: 0 12%;
  @media screen and (max-width: ${MEDIA.tablet}px) {
    padding: 0;
  }
`;
export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Label = styled.label`
  font-family: ${FONTS.FAMILIES.normal};
  font-size: ${FONTS.SIZES.s};
  color: ${COLORS.black};
`;
export const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${SPACES.xl};
`;
