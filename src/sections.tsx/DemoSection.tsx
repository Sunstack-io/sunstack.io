import React from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import PhoneImg from "../images/phone-2.webp";

import { Container } from "../components/Container";
import { mediaQuerySmallTablet, mediaQueryTablet } from "../styles";

const elements = [null, null, null];

const rightVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    x: 50,
  },
};

const leftVariants: Variants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  hidden: {
    opacity: 0,
    x: -50,
  },
};

export const DemoSection: React.FC = ({}) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        animation.start("visible");
      }, 500);
    }
  }, [inView]);

  return (
    <Main ref={ref}>
      <Container>
        <Title>{t("demo-title")}</Title>
        <Rows>
          <Column
            variants={leftVariants}
            initial={"hidden"}
            animate={animation}
          >
            {elements.map((_, i) => (
              <Block>
                <BlockTitle>{t("demo-" + (i + 1) + "-title")}</BlockTitle>
                <BlockText>{t("demo-" + (i + 1) + "-text")}</BlockText>
              </Block>
            ))}
          </Column>
          <Column>
            <PhoneImgContainer src={PhoneImg} />
          </Column>
          <Column
            isRight={true}
            variants={rightVariants}
            initial={"hidden"}
            animate={animation}
          >
            {elements.map((_, i) => (
              <Block>
                <BlockTitle>{t("demo-" + (i + 4) + "-title")}</BlockTitle>
                <BlockText>{t("demo-" + (i + 4) + "-text")}</BlockText>
              </Block>
            ))}
          </Column>
        </Rows>
      </Container>
    </Main>
  );
};

const Main = styled.div`
  margin-block: var(--section-margin);
`;
const Title = styled.h1`
  font-size: var(--title-size);
  line-height: 1;
  max-width: 700px;
`;

const Rows = styled.div`
  display: flex;
  margin-top: var(--section-margin);
  align-items: center;

  ${mediaQuerySmallTablet()} {
    flex-direction: column;
  }
`;

const Column = styled(motion.div)<{ isRight?: boolean }>`
  flex: 1;

  &:nth-child(2) {
    display: flex;
    justify-content: center;
  }
  &:is(:last-child) {
    margin-left: 20px;
    h4,
    p {
      text-align: right;
    }
  }
  &:is(:first-child) {
    margin-right: 20px;
  }

  ${mediaQuerySmallTablet()} {
    &:is(:last-child) {
      margin-left: initial;
      h4,
      p {
        text-align: initial;
      }
    }

    &:nth-child(2) {
      margin-top: var(--section-margin);
      order: 3;
    }
  }
`;

const Block = styled.div`
  margin-bottom: 30px;
`;
const BlockTitle = styled.h4`
  font-size: var(--small-title-size);
  margin: 0;
  margin-bottom: 8px;

  ${mediaQuerySmallTablet()} {
    font-size: 2.8rem;
    margin-bottom: 4px;
  }
`;
const BlockText = styled.p`
  font-size: var(--regular-size);
  margin: 0;

  ${mediaQuerySmallTablet()} {
    font-size: var(--text-size);
  }
`;
const PhoneImgContainer = styled.img`
  display: block;
  height: 560px;
  ${mediaQueryTablet()} {
    height: 430px;
  }
`;
