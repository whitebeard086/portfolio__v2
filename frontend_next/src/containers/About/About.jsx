import { BodyText, Contain } from "../../styles/GlobalComponents";
import { AppWrap, MotionWrap } from "../../wrapper";
import { AboutContainer, AboutImage, AboutMe, BgImage } from "./AboutStyles";
import about from "../../assets/images/about.svg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <AboutContainer id="about">
      <Contain>
        <AboutMe
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1.5, delayChildren: 0.5 }}>
          <BodyText
            about={"true"}
            light={"true"}
            as={motion.p}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}>
            My name is Alex and I love designing and building things for the web. My interest in web
            development started in 2014 when I stumbled on a video tutorial on YouTube about how to
            make simple HTML and CSS landing pages, and there was no looking back for me.
            <br />
            <br />
            Till date, I have had the opportunity to design and build various custom websites with
            technologies like ReactJS and NodeJS. I have also designed and maintained Wordpress
            sites.
          </BodyText>
          <AboutImage>
            <BgImage src={about} alt="bg-image" style={{ height: "1rem" }} />
          </AboutImage>
        </AboutMe>
      </Contain>
    </AboutContainer>
  );
};
export default MotionWrap(AppWrap(About, "about"));
