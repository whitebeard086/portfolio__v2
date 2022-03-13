import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  height: 101vh;
  position: relative;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.7) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroContent = styled(motion.div)`
  
`;

export const Text = styled.div`
  margin-top: 8rem;
  
  width: 70%;

  @media ${props => props.theme.breakpoints.xmd} {
    width: 100%;
  }
`;

export const MainText = styled.h1`
  font-size: 4rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${props => props.theme.breakpoints.xmd} {
    font-size: 3rem;
  }
`;

export const Button = styled(motion.div)`
  margin: 3rem 0;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(0.99);
  }
  &:active {
    transform: scale(1.01);
  }
`;

export const Link = styled.a`
  border: 2px solid rgb(225, 173, 105);
  color: rgb(225, 173, 105);
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: rgba(93, 97, 124, 0.2);
  }
`;
