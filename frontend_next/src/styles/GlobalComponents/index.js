import styled from "styled-components";

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5rem;
  margin: 0 5rem;

  @media ${props => props.theme.breakpoints.xmd} {
    padding: 0;
    margin: 0 5rem;
  }
`;

export const BodyText = styled.p`
  font-size: 1.4rem;
  font-weight: ${({ hero }) => (hero ? "200" : "600")};
  line-height: 2;
  width: ${({ about }) => (about ? "50%" : "")};
  color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.6)")};

  @media ${props => props.theme.breakpoints.xmd} {
    font-size: 1.2rem;
    width: 100%;
  }
`;
