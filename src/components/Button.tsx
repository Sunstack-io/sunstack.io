import React from "react";
import styled from "styled-components";

type Props = {
  children: any;
  className?: any;
};

export const Button: React.FC<Props> = ({ children, className }) => {
  return (
    <ButtonView className={className}>
      <ButtonText>{children}</ButtonText>
    </ButtonView>
  );
};
export const LinkButton: React.FC<Props> = ({ children, className }) => {
  return (
    <ButtonView as="a" href="#" className={className}>
      <ButtonText>{children}</ButtonText>
    </ButtonView>
  );
};

const ButtonView = styled.div`
  background-color: var(--main-color);
  color: white;

  display: inline-block;
  padding-inline: 32px;
  padding-block: 12px;

  border-radius: 2px;
  transition: all 0.2s;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ButtonText = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-size: var(--regular-size);
  font-weight: 600;
`;
