import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(93, 97, 124, 0.1);
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  justify-content: space-between;
  width: 75%;

  @media ${props => props.theme.breakpoints.lg} {
    gap: 2rem;
  }

  @media ${props => props.theme.breakpoints.xmd} {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 1rem;
  }
`;

export const AboutImage = styled(motion.div)`
  height: 300px;
  width: 300px;
  padding: 1rem;
  -webkit-box-shadow: 1px 1px 7px 0px #2d2e49;
  box-shadow: 1px 1px 7px 0px #2d2e49;

  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media ${props => props.theme.breakpoints.xmd} {
    display: flex;
    align-items: center;
    height: 250px;
    width: 250px;
    margin: 2rem;

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 200px;
    width: 200px;

    img {
      width: 180px;
      height: 180px;
      object-fit: cover;
    }
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem;
  width: 80%;

  @media ${props => props.theme.breakpoints.xl} {
    padding: 0;
  }

  @media ${props => props.theme.breakpoints.xmd} {
    width: 100%;
  }
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  text-transform: capitalize;
  margin-bottom: 1.5rem;

  @media ${props => props.theme.breakpoints.lg} {
    font-size: 2rem;
  }

  @media ${props => props.theme.breakpoints.xsm} {
    font-size: 1.8rem;
  }
`;

export const Body = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;

  @media ${props => props.theme.breakpoints.lg} {
    font-size: 1.2rem;
    line-height: 1.3;
  }

  @media ${props => props.theme.breakpoints.xsm} {
    font-size: 1rem;
  }
`;

export const Button = styled.a`
  padding: 1rem 1rem;
  text-align: center;
  width: 200px;
  border-radius: 4px;
  /* border: 2px solid rgb(225, 173, 105); */
  color: rgba(222, 223, 238);
  transition: all 0.4s ease;
  background-color: #2d2e49;
  background-image: linear-gradient(90deg, #2d2e49 1%, #5d617c 100%);

  &:hover {
    transform: scale(0.96);
  }

  &:active {
    transform: scale(1.1);
    background-color: #5d617c;
    background-image: linear-gradient(90deg, #5d617c 0%, #2d2e49 100%);
  }
`;
