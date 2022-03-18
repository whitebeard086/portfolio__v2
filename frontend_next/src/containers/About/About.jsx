import { BodyText, Contain } from "../../styles/GlobalComponents";
import { AppWrap, MotionWrap } from "../../wrapper";
import {
  AboutContainer,
  AboutContent,
  AboutImage,
  AboutText,
  Body,
  Button,
  Link,
  Title,
} from "./AboutStyles";
import { motion } from "framer-motion";
import { client, urlFor } from "../../client";
import { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    const query = '*[_type == "imageAssets"]';

    client.fetch(query).then(data => {
      setAbout(data[0]);
    });
  }, []);

  return (
    <AboutContainer id="about">
      <Contain>
        <AboutContent>
          <AboutImage>{about && <img src={urlFor(about?.image)} alt={about?.title} />}</AboutImage>
          <AboutText>
            <Title>I'm available, I'm motivated</Title>
            <Body>
              Alongside building on my knowledge base, I love working on new challenges and ideas,
              working with new tools and technologies. These are the times I have the most fun as
              they often lead to several lightbulb moments.
            </Body>
            <Button href="mailto:ejimalex@gmail.com">Send Me a Mail</Button>
          </AboutText>
        </AboutContent>
      </Contain>
    </AboutContainer>
  );
};

export default MotionWrap(AppWrap(About, "about"));
