import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(93, 97, 124, 0.1);
`;

export const AboutMe = styled(motion.div)`
  /* width: 70%; */
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.breakpoints.xmd} {
    width: 100%;
    height: 100%;
    margin-bottom: 3rem;
    flex-direction: column-reverse;
  }
`;

export const AboutImage = styled(motion.div)`
    z-index: -1;

    @media ${props => props.theme.breakpoints.xmd} {
        transform: scale(0.6);
    }
`

export const BgImage = styled(Image)`
    
    @media ${props => props.theme.breakpoints.xmd} {
        transform: scale(1);
    }
`
