import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { sanityClient } from "../../../sanity";
import { client } from "../../client";
import { userQuery } from "../../utils/data";
import { AppWrap } from "../../wrapper/";

import { BodyText, Contain } from "../../styles/GlobalComponents";
import {
  Container,
  HeroBg,
  Text,
  MainText,
  Video,
  Button,
  Link,
} from "./HeroStyles";

const Hero = () => {
  const [video, setVideo] = useState(null);
  useEffect(() => {
    const query = userQuery();

    client.fetch(query).then(data => {
      setVideo(data);
    });
  }, []);

  return (
    <Container id="home">
      <HeroBg>
          <Video autoPlay loop muted playsInline>
          <source src="/data.mp4" type="video/mp4" />
        </Video>
      </HeroBg>
      <Contain as={motion.div}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}>
        <Text>
          <BodyText hero>Hey there,</BodyText>
          <MainText>
            Welcome To My Personal Portfolio
          </MainText>
          <BodyText hero>
            Glad to have you on my portfolio, I am excited about all the things we are going to
            build together. Feel free to have a look around at some of the things I have been
            working on, and also get in touch so we can get started on your project right away!
          </BodyText>
          <Button>
            <Link>My Projects</Link>
          </Button>
        </Text>
      </Contain>
    </Container>
  );
};

export default AppWrap(Hero, "home");
