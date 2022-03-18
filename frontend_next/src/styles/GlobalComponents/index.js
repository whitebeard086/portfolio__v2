import styled from "styled-components";

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  

  @media ${props => props.theme.breakpoints.xmd} {
    padding: 0;
    margin: 0 5rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin: 0 2.5rem;
  }

  @media ${props => props.theme.breakpoints.xsm} {
    margin: 0 2rem;
  }
`;

export const BodyText = styled.p`
  font-size: 1.4rem;
  font-weight: ${({ hero }) => (hero ? "200" : "600")};
  line-height: 2;
  margin-bottom: 2rem;
  width: ${({ about }) => (about ? "50%" : "")};
  color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.6)")};

  @media ${props => props.theme.breakpoints.xmd} {
    font-size: 1.2rem;
    width: 100%;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media ${props => props.theme.breakpoints.xsm} {
    font-size: 1rem;
  }
`;
