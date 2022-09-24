import React, { useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Variants, useAnimation, motion } from "framer-motion";

import PhoneCase from "../images/phone-1.webp";
import { Container } from "../components/Container";
import { mediaQueryTablet, mediaQuerySmallTablet } from "../styles";
import { useInView } from "react-intersection-observer";

const imageVariants: Variants = {
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

const textsVariants: Variants = {
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

export const FirstResumeSection: React.FC = ({}) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [inView]);
  return (
    <Main ref={ref}>
      <Container>
        <Rows>
          <LeftSection
            initial={"hidden"}
            variants={textsVariants}
            animate={animation}
          >
            <Title dangerouslySetInnerHTML={{ __html: t("fres-title") }} />
            <Text
              dangerouslySetInnerHTML={{
                __html: t("fres-text", {
                  joinArrays: "<br/><br/>",
                }),
              }}
            />
          </LeftSection>
          <RightSection
            initial={"hidden"}
            variants={imageVariants}
            animate={animation}
          >
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
const LeftSection = styled(motion.div)`
  max-width: 58%;
  ${mediaQueryTablet()} {
    max-width: 66%;
  }
  ${mediaQuerySmallTablet()} {
    max-width: initial;
  }
`;
const RightSection = styled(motion.div)`
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
