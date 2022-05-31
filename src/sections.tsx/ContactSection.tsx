import React from "react";
import styled from "styled-components";
import { Button, LinkButton } from "../components/Button";
import { Container } from "../components/Container";
import { OneLineTextInput, MultiLineTextInput } from "../components/Input";

type Props = {};

export const ContactSection: React.FC<Props> = ({}) => {
  return (
    <Main>
      <Container>
        <CenteredContainer>
          <TitleContainer>
            <Title>Travaillons ensemble.</Title>
            <Subtitle>
              Que vous vouliez lancer votre prochaine application mobile ou que
              vous ayiez des besoins dans votre business, nous sommes toujours
              prêts à discuter.
            </Subtitle>
          </TitleContainer>
          <FormContainer>
            <div>
              <OneLineTextInput
                label="Adresse e-mail"
                placeholder="johndoe@gmail.com"
                name="emailAddress"
              />
              <OneLineTextInput
                label="Nom"
                placeholder="John Doe"
                name="name"
              />
              <MultiLineTextInput
                label="Message"
                placeholder="How can we help"
                name="name"
              />
            </div>
            <FormFooter>
              <FormAgreement>
                En envoyant ce formulaire, vous acceptez notre{" "}
                <a href="#">politique de confidentialité</a>.
              </FormAgreement>
              <LinkButton>Envoyer</LinkButton>
            </FormFooter>
          </FormContainer>
        </CenteredContainer>
      </Container>
    </Main>
  );
};

const Main = styled.div`
  margin-block: var(--section-margin);
`;
const TitleContainer = styled.div`
  margin-bottom: 40px;
  padding-inline: 16px;
`;
const CenteredContainer = styled.div`
  max-width: 700px;
  margin-inline: auto;
`;
const Title = styled.h2`
  font-size: var(--title-size);
  line-height: 1;
  margin: 0;
  text-align: center;
`;
const Subtitle = styled.p`
  font-size: var(--text-size);
  color: #f8f8f8;
  text-align: center;

  margin-top: 16px;
  line-height: 1.2;
`;

const FormContainer = styled.form``;
const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FormAgreement = styled.p`
  margin-top: 8px;
  margin-right: 16px;
  font-size: 1.6rem;
  max-width: 300px;
`;
