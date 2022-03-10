import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.7) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const Video = styled.video`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const HeroContent = styled.div`

`

export const HeroText = styled.h1`

`