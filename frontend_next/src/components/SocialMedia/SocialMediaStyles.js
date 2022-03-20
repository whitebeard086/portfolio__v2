import styled from "styled-components";

export const SocialIcons = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 2rem;
  left: 0;
  z-index: 1;
  margin: 0 5rem;

  @media ${props => props.theme.breakpoints.lg} {
    margin: 0 3rem;
  }

  @media ${props => props.theme.breakpoints.xmd} {
      display: none;
  }
`;

export const SocialIcon = styled.a`
  margin: 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 10%;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(45, 46, 73, 0.5);
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.1);
    color: rgba(255, 255, 255);
  }
`;
