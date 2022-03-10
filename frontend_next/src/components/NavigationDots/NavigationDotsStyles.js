import styled from "styled-components";

export const AppNavigation = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    position: fixed;
    top: 50%;
    right: 0;
    margin: 0 5rem;
`

export const NavLink = styled.a`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: flex;
    margin: 0.5rem 0;
    background: rgb(93, 97, 124);
    transition: all 0.4s ease;

    &:hover {
    transform: scale(1.1);
  }
`