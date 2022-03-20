import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;

  @media ${props => props.theme.breakpoints.sm} {
    height: 100%;
  }
`;

export const Content = styled(motion.div)``;

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

export const Contain = styled.div``;

export const HeroContent = styled(motion.div)``;

export const Text = styled.div`
  margin-top: 10rem;
  height: 100vh;
  max-width: 800px;

  @media ${props => props.theme.breakpoints.xmd} {
    width: 100%;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding-top: 0.5rem;
  }
`;

export const MainText = styled.h1`
  font-size: 4rem;
  width: 80%;
  background: rgb(255, 255, 255);
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.5) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${props => props.theme.breakpoints.lg} {
    font-size: 3rem;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: 2.5rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }

  @media ${props => props.theme.breakpoints.xsm} {
    font-size: 1.8rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Button = styled.a`
  padding: 1rem 1.5rem;
  border-radius: 4px;
  background-color: ${({ transparent }) => (transparent ? "none" : "#2d2e49")};
  background-image: ${({ transparent }) => (transparent ? "none" : "linear-gradient(26deg, #2d2e49 0%, #5d617c 100%)")};
  border: ${({ transparent }) => (transparent ? "2px solid rgb(225, 173, 105)" : "none")};
  color: rgba(222, 223, 238);
  transition: all 0.4s ease;

  @media ${props => props.theme.breakpoints.xsm} {
    padding: .8rem 1.2rem;
    font-size: .8rem;
  }

  &:hover {
    transform: scale(0.9);
  }

  &:active {
    transform: scale(1.1);
  }
`;
