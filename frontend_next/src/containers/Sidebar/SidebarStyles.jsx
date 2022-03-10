import { RiCloseCircleLine } from "react-icons/ri";
import styled from "styled-components";

export const Container = styled.div`
  transition: 0.4s ease;
  position: fixed;
  display: none;
  flex-direction: column;
  padding: 2rem;
  z-index: 999;
  width: 40%;
  border-radius: 0 0 0 10px;
  background: rgba(93, 97, 124, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(9.5px);
  -webkit-backdrop-filter: blur(9.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media ${props => props.theme.breakpoints.md2} {
    display: flex;
  }
`;

export const CloseIcon = styled(RiCloseCircleLine)`
  color: rgb(225, 173, 105);
  font-size: 2rem;
  cursor: pointer;
  display: none;
  transition: all 0.4s ease;

  @media ${props => props.theme.breakpoints.xmd} {
    display: flex;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const NavLink = styled.a`
  color: rgba(222, 223, 238);
  transition: all 0.4s ease;

  &.active {
    color: rgb(225, 173, 105);
  }

  &:hover {
    color: rgb(225, 173, 105);
  }
`;

export const Icon = styled.span`
  margin-right: 1rem;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const SocialIcon = styled.a`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: rgb(45, 46, 73);
  color: rgb(222, 223, 238);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;

  &:hover {
    color: rgb(225, 173, 105);
    transform: scale(1.3);
  }
`;
