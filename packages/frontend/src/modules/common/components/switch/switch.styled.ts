import * as mui from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import { COLORS, SPACES, MEDIA } from '../../../theme';

export const CustomSwitch = mui.styled(Switch)`
    display: flex;
    margin-left: auto;
    width: 50px;
    height: 26px;
    padding: 0;
  @media screen and (max-width: ${MEDIA.mobile}px) {
    margin-left: ${SPACES.xl};
  }

    & .MuiSwitch-switchBase {
      padding: 0;
      margin: 0;
      border: 1px solid ${COLORS.black};
      &.Mui-checked {
        transform: translateX(24px);
        color: ${COLORS.white};
        & + .MuiSwitch-track {
          background-color: ${COLORS.primary};
          opacity: 1;
        }
      }
    }
    & .MuiSwitch-thumb {
      width: 24px;
      height: 24px;
    }
    & .MuiSwitch-track {
      opacity: 1;
      background-color: ${COLORS.darkGrey};
      border-radius: 26px;
      border: 1px solid ${COLORS.black};
    }
`;
