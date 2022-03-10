import styled from "styled-components";

export const SocialIcons = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 0;
  z-index: 100;
  margin: 0 5rem;
`;

export const SocialIcon = styled.a`
  margin: 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  color: white;
  background: rgba(93, 97, 124, 0.3);
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
