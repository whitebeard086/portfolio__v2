import Image from "next/image";
import { motion } from "framer-motion";
import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(93, 97, 124, 0.1);
  height: 100vh;
`;

// export const AboutMe = styled(motion.div)`
//   /* width: 70%; */
//   position: relative;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media ${props => props.theme.breakpoints.xmd} {
//     width: 100%;
//     height: 100%;
//     margin-bottom: 3rem;
//     flex-direction: column-reverse;
//   }
// `;

export const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;

  @media ${props => props.theme.breakpoints.xmd} {
    flex-direction: column;
  }
`

export const AboutImage = styled(motion.div)`
    /* width: 50%; */
    
    img {
      width: 100%;
    }

    @media ${props => props.theme.breakpoints.xmd} {
        
    }
`

export const AboutText = styled.div`
  background: #fff;
  padding: 2rem;
  /* width: 500px; */
`

export const Title = styled.h3`

`

export const Body = styled.p`

`

export const Button = styled.div`

`

