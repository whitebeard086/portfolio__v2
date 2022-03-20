import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { client } from "../../client";
import { AppWrap } from "../../wrapper/";

import { BodyText, Contain } from "../../styles/GlobalComponents";
import { Container, HeroBg, Text, MainText, Video, Button, ButtonContainer } from "./HeroStyles";

const Hero = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    const query = '*[_type == "hero"]';

    client.fetch(query).then(data => {
      setItem(data[0]);
    });
  }, []);

  return (
    <Container id="home">
      <HeroBg>
        <Video autoPlay loop muted playsInline>
          <source src="/data.mp4" type="video/mp4" />
        </Video>
      </HeroBg>
      <Contain
        as={motion.div}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}>
        {item && (
          <Text>
            <BodyText hero>{item.firstText}</BodyText>
            <MainText>{item.heading}</MainText>
            <BodyText hero>{item.secondText}</BodyText>
            <ButtonContainer>
              <Button href="#projects">My Projects</Button>
              <Button transparent href="#about">
                Learn More
              </Button>
            </ButtonContainer>
          </Text>
        )}
      </Contain>
    </Container>
  );
};

export default AppWrap(Hero, "home");
