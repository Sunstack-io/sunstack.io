import React from "react";
import styled from "styled-components";

import PhoneCase from "../images/phone-1.png";
import { Container } from "../components/Container";
import { mediaQueryTablet, mediaQuerySmallTablet } from "../styles";
import { useTranslation } from "gatsby-plugin-react-i18next";

type Props = {};

export const FirstResumeSection: React.FC<Props> = ({}) => {
  const { t } = useTranslation();

  return (
    <Main>
      <Container>
        <Rows>
          <LeftSection>
            <Title dangerouslySetInnerHTML={{ __html: t("fres-title") }} />
            <Text
              dangerouslySetInnerHTML={{
                __html: t("fres-text", {
                  joinArrays: "<br/><br/>",
                }),
              }}
            />
          </LeftSection>
          <RightSection>
            <PhoneImg src={PhoneCase} />
          </RightSection>
        </Rows>
      </Container>
    </Main>
  );
};

const Main = styled.div`
  margin-block: var(--section-margin);
`;
const Rows = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQuerySmallTablet()} {
    flex-direction: column;
    justify-content: initial;
  }
`;
const LeftSection = styled.div`
  max-width: 58%;
  ${mediaQueryTablet()} {
    max-width: 66%;
  }
  ${mediaQuerySmallTablet()} {
    max-width: initial;
  }
`;
const RightSection = styled.div`
  ${mediaQuerySmallTablet()} {
    margin-top: var(--section-margin);
  }
`;

const Title = styled.h2`
  font-size: var(--title-size);
  line-height: 1;
  span {
    color: var(--main-color);
  }
`;
const Text = styled.p`
  font-size: var(--text-size);
  line-height: var(--text-line-height);
`;
const PhoneImg = styled.img`
  height: 560px;
  ${mediaQueryTablet()} {
    height: 430px;
  }
`;
