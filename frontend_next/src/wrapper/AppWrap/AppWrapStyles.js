import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const AppWrapper = styled.div`
  width: 100%;
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  transition: all 0.4s ease;
  padding: 1rem 5rem;
  position: fixed;
  color: rgba(255, 255, 255, 0.7);
  bottom: 2rem;
  right: 0;

  &.active {
    color: rgb(45, 46, 73);

    p {
        font-weight: bold;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 1rem;
  }
`;

export const Text = styled.p`
  text-transform: capitalize;
  font-weight: 200;
`;
