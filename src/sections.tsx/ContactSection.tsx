import React from "react";
import styled from "styled-components";
import { Button, LinkButton } from "../components/Button";
import { Container } from "../components/Container";
import { OneLineTextInput, MultiLineTextInput } from "../components/Input";
import { useTranslation } from "gatsby-plugin-react-i18next";

type Props = {};

export const ContactSection: React.FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <Main id="contact">
      <Container>
        <CenteredContainer>
          <TitleContainer>
            <Title>{t("contact-title")}</Title>
            <Subtitle>{t("contact-text")}</Subtitle>
          </TitleContainer>
          <FormContainer method="POST" action="https://formbold.com/s/3Ggl3">
            <div>
              <OneLineTextInput
                label={t("emailAddress")}
                placeholder="johndoe@gmail.com"
                name="_replyTo"
              />
              <OneLineTextInput
                label={t("name")}
                placeholder="John Doe"
                name="name"
              />
              <MultiLineTextInput
                label={t("message")}
                placeholder="How can we help"
                name="message"
              />
            </div>
            <FormFooter>
              <FormAgreement
                dangerouslySetInnerHTML={{
                  __html: t("contact-privacyPolicy", { url: "#" }),
                }}
              />
              <Button>{t("send")}</Button>
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
