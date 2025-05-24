import styled from "styled-components";
import { Box } from "kuda-component-library";

export const Label = styled.label`
  font-size: 13.5px;
  line-height: 18px;
  margin-bottom: 10px;

  font-weight: normal;
  font-size: 13px;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
  text-transform: capitalize;

  span {
    color: red;
  }
`;

export const InputWrapper = styled.input`
  height: 46px;
  width: ${(props) => (props.width ? props.width : "314px")};
  border-radius: 5px;
  padding: 15px 10px;
  border: 1px solid #f4f4f4;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

export const RequiredAsterisk = styled(Box)`
  color: ${({ theme }) => theme.colors.KudaRed || "#F7685B"};
`;

export const Error = styled.small`
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.kudaRed};
`;

export const StyledErrorIcon = styled.img`
  display: inline-block;
  margin-right: 4px;
`;

export const StyledToolTipWrapper = styled(Box)`
  #tooltip {
    z-index: 10;
    padding: 8px;
    opacity: 0.9;
    border-radius: 8px;
    background: #000;
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.06);

    color: #f4f4f4;
    font-family: Mulish;
    font-size: 9px;
    font-style: normal;
    font-weight: 400;
    line-height: 13px;
  }
`;
