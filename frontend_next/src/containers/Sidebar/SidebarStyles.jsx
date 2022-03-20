import { MdOutlineClose } from "react-icons/md";
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
  background: rgba(45, 46, 73, 0.65);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12.5px);
  -webkit-backdrop-filter: blur(12.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  @media ${props => props.theme.breakpoints.md2} {
    display: flex;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 60%;
  }

  @media ${props => props.theme.breakpoints.xsm} {
    width: 70%;
  }
`;

export const CloseIcon = styled(MdOutlineClose)`
  color: rgb(225, 173, 105);
  font-size: 1.5rem;
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

export const Cv = styled.a`
  padding: 0.5rem 1rem;
  width: 100px;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 2px solid rgb(225, 173, 105);
  color: rgba(222, 223, 238);
  transition: all 0.4s ease;

  @media ${props => props.theme.breakpoints.xmd} {
    
  }

  &:hover {
    transform: scale(0.96);
    background: rgba(93, 97, 124, 0.2);
  }
  &:active {
    transform: scale(1.1);
  }
`

export const Icon = styled.span`
  margin-right: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.8rem;
  gap: 1.5rem;
  margin-top: 2rem;
  border-radius: 8px;
  background: rgba(45, 46, 73, 0.65);
  width: 70%;

  @media ${props => props.theme.breakpoints.xsm} {
    width: 85%;
  }
`;

export const SocialIcon = styled.a`
  border-radius: 50%;
  color: rgb(222, 223, 238);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.3);
  }
`;
