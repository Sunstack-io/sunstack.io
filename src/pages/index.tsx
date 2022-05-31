import * as React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { FunText, MainText, Title } from "../components/HomeComponents";
import { Layout } from "../navigation/Layout";
import { HeroSection } from "../sections.tsx/HeroSection";
import { ReferenceSection } from "../sections.tsx/ReferenceSection";
import { FirstResumeSection } from "../sections.tsx/FirstResumeSection";
import { SolutionsSection } from "../sections.tsx/SolutionsSection";
import { ContactSection } from "../sections.tsx/ContactSection";
import { ToolsSection } from "../sections.tsx/ToolsSection";
import { DemoSection } from "../sections.tsx/DemoSection";

const Main = styled.main`
  height: 100vh;

  margin: 0;
  padding: 0;

  font-family: "Source Sans Pro", serif;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <ReferenceSection />
      <FirstResumeSection />
      <ToolsSection />
      <DemoSection />
      <SolutionsSection />
      <ContactSection />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
