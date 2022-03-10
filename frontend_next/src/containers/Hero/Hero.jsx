import { useEffect, useState } from "react";
import { sanityClient } from "../../../sanity";
import { client } from "../../client";
import { userQuery } from "../../utils/data";
import { AppWrap } from "../../wrapper/";

import { Container, HeroBg, HeroContent, Text, HeroText, MainText, Video, Button, Link } from "./HeroStyles";

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
      <HeroContent>
        <Text>
          <HeroText>Hey there,</HeroText>
          <MainText>
            Welcome To <br /> My Personal Portfolio
          </MainText>
          <HeroText>
            Glad to have you on my portfolio, I am excited about all the things we are going to
            build together. Feel free to have a look around at some of the things I have been
            working on, and also get in touch so we can get started on your project right away!
          </HeroText>
          <Button>
            <Link>My Projects</Link>
          </Button>
        </Text>
      </HeroContent>
    </Container>
  );
};

export default AppWrap(Hero, "home");
