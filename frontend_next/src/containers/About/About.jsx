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
    const query = '*[_type == "about"]';

    client.fetch(query).then(data => {
      setAbout(data[0]);
    });
  }, []);

  return (
    <AboutContainer id="about">
      <Contain>
        <AboutContent>
          <AboutImage>{about && <img src={urlFor(about?.image)} alt={about?.title} />}</AboutImage>
          {about && (
            <AboutText>
            <Title>{about.title}</Title>
            <Body>
              {about.body}
            </Body>
            <Button href="mailto:ejimalex@gmail.com">Send Me a Mail</Button>
          </AboutText>
          )}
        </AboutContent>
      </Contain>
    </AboutContainer>
  );
};

export default MotionWrap(AppWrap(About, "about"));
