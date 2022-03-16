import { BodyText, Contain } from "../../styles/GlobalComponents";
import { AppWrap, MotionWrap } from "../../wrapper";
import {
  AboutContainer,
  AboutContent,
  AboutImage,
  AboutText,
  Body,
  Button,
  Title,
} from "./AboutStyles";
import about from "../../assets/images/about.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { client, urlFor } from "../../client";
import { useEffect, useState } from "react";



const About = () => {
  const [about, setAbout] = useState(null)

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
          <AboutImage>
            {about && <img src={urlFor(about?.image)} alt={about?.title} />}
          </AboutImage>
          <AboutText>
            <Title>I'm available, I'm motivated</Title>
            <Body>
              Along building on my knowledge base, I love working on new challenges
              and ideas, working with new tools and technologies. These are the times 
              I have the most fun as they often throw several lightbulb moments.
            </Body>
            <Button>
              Send me a Message
            </Button>
          </AboutText>
        </AboutContent>
      </Contain>
    </AboutContainer>
  );
};

export default MotionWrap(AppWrap(About, "about"));
