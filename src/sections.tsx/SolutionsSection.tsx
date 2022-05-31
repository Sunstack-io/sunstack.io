import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import { mediaQuerySmallTablet, mediaQueryMobile } from "../styles";
import { useTranslation } from "gatsby-plugin-react-i18next";

type Props = {};

const elements = [null, null, null, null, null];

export const SolutionsSection: React.FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <Main>
      <Container>
        <Title>{t("solution-title")}</Title>
        <SolutionGrid>
          {elements.map((_, i) => (
            <SolutionBlock title={t("solution-" + (i + 1) + "-title")}>
              {t("solution-" + (i + 1) + "-text")}
            </SolutionBlock>
          ))}
        </SolutionGrid>
      </Container>
    </Main>
  );
};

const SolutionBlock: React.FC<{ title: string; children: any }> = ({
  title,
  children,
}) => {
  const { t } = useTranslation();

  return (
    <SolutionUI>
      <SolutionTitle>{title}</SolutionTitle>
      <SolutionText>{children}</SolutionText>
      <SolutionURL href="#">{t("more")}</SolutionURL>
    </SolutionUI>
  );
};

const Main = styled.div`
  margin-block: var(--section-margin);
`;
const Title = styled.h2`
  font-size: var(--title-size);
  line-height: 1;
  margin-bottom: var(--section-margin);
`;

const SolutionGrid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 1fr);

  ${mediaQueryMobile()} {
    grid-template-columns: 1fr;
  }
`;
const SolutionUI = styled.div`
  background: linear-gradient(to right bottom, #1e1e1e, #101010);
  padding: 40px 32px 24px 32px;
  display: flex;
  flex-direction: column;

  ${mediaQuerySmallTablet()} {
    padding: 20px 16px 8px 16px;
  }
`;
const SolutionTitle = styled.h4`
  margin: 0;
  margin-bottom: 12px;
  font-size: var(--small-title-size);
`;
const SolutionText = styled.p`
  margin: 0;
  margin-bottom: 28px;

  font-size: var(--regular-size);
  line-height: var(--text-line-height);
  flex: 1;
`;
const SolutionURL = styled.a`
  color: white;
  font-size: var(--small-size);
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.2s;
  display: inline-block;
  align-self: flex-start;

  &:hover {
    transform: translateY(-2px);
  }
`;
