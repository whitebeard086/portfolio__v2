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

  @media ${props => props.theme.breakpoints.lg} {
    margin: 0 3rem;
  }

  @media ${props => props.theme.breakpoints.xmd} {
    display: none;
  }
`;

export const NavLink = styled.a`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  display: flex;
  margin: 0.5rem 0;
  background: rgb(160, 161, 191);
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
