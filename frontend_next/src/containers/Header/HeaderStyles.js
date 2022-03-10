import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 2rem 5rem;
  background: rgba(45, 46, 73, 0.1);
  color: rgb(222, 223, 238);
  transition: all 0.4s ease;
  z-index: 20;
  position: fixed;

  @media ${props => props.theme.breakpoints.xmd} {
    padding: 2rem 2rem;
  }
`;

export const Logo = styled(Link)``;

export const LogoImage = styled(Image)``;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media ${props => props.theme.breakpoints.xmd} {
    display: none;
  }
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

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const Cv = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 2px solid rgb(225, 173, 105);
  color: rgba(222, 223, 238);
  transition: all 0.4s ease;

  @media ${props => props.theme.breakpoints.xmd} {
    display: none;
  }

  &:hover {
    transform: scale(0.96);
  }
  &:active {
    transform: scale(1.1);
  }
`;

export const MobileMenu = styled(CgMenuRight)`
  color: rgb(225, 173, 105);
  font-size: 2.2rem;
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