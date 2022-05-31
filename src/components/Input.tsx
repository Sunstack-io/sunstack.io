import React from "react";
import styled from "styled-components";

type DefaultProps = {
  label: string;
  placeholder: string;
  name: string;
};

export const OneLineTextInput: React.FC<DefaultProps> = ({
  label,
  name,
  placeholder,
}) => {
  return (
    <InputView>
      <Label>{label}</Label>
      <TextInput name={name} placeholder={placeholder} />
    </InputView>
  );
};

export const MultiLineTextInput: React.FC<DefaultProps> = ({
  label,
  name,
  placeholder,
}) => {
  return (
    <InputView>
      <Label>{label}</Label>
      <TextInput
        as={"textarea"}
        name={name}
        placeholder={placeholder}
        rows={7}
      />
    </InputView>
  );
};

const InputView = styled.div`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
const Label = styled.label`
  display: block;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 600;

  margin-bottom: 8px;
`;
const TextInput = styled.input`
  background-color: #1a1a1a;
  border: none;
  width: 100%;

  padding: 16px 8px 16px 20px;
  color: white;
  outline: none;

  font-size: 1.8rem;
  box-sizing: border-box;

  &:focus {
    background-color: #1a1a1a;
  }
  &::placeholder {
    color: #888;
    font-weight: 400;
  }
`;
