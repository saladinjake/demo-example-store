import React from "react";
import Skeleton from "../Skeleton";
import  Box from "../Box"
import Flex from  "../Flex"; 
import {
  Label,
  InputWrapper,
  RequiredAsterisk,
  Error,
  StyledErrorIcon,
} from "./Input.styles";
import { InputProps } from "./Input.types";
import { Svg } from "../../assets/svg";
import Tooltip from "./Tooltip";

const { Error: ErrorIcon } = Svg;

const Input: React.FC<InputProps> = ({
  label = "Label",
  type = "text",
  error,
  message,
  width,
  placeholder = "Placeholder",
  required = false,
  value = 0,
  onChange,
  onChangePure,
  onFocus,
  onBlur,
  tooltipText,
  onKeyUp,
  disabled,
  name,
  isLoading,
}) => {
  if (value === undefined || value == null) {
    value = "";
  }
  return (
    <Flex direction="column" style={{ opacity: disabled ? "0.7" : 1 }}>
      {isLoading ? (
        <Skeleton width="30%" />
      ) : (
        <>
          {label && (
            <Flex gap="10px" direction="row" justifyContent="start">
              <Label>{label}</Label>
              {required && <RequiredAsterisk>*</RequiredAsterisk>}
              {tooltipText && <Tooltip text={tooltipText} />}
            </Flex>
          )}
        </>
      )}

      {isLoading ? (
        <Box mt="4">
          <Skeleton height="40px" width="100%" />
        </Box>
      ) : (
        <InputWrapper
          width={width}
          type={type}
          placeholder={disabled ? "" : placeholder}
          required={required}
          name={name}
          value={value}
          onChange={(e) => {
            onChangePure && onChangePure(e);
            onChange && onChange(e.currentTarget.value);
          }}
          disabled={disabled}
          onFocus={(ev) => {
            onFocus && onFocus(ev);
          }}
          onBlur={(evt) => {
            onBlur && onBlur(evt);
          }}
          onKeyUp={(evt) => {
            onKeyUp && onKeyUp(evt);
          }}
        />
      )}

      {error && (
        <Error>
          <StyledErrorIcon src={ErrorIcon} alt="error-icon" />
          {message}
        </Error>
      )}
    </Flex>
  );
};

export default Input;
