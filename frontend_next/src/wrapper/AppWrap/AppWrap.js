import { useEffect, useState } from "react";
import { NavigationDots, SocialMedia } from "../../components";
import { AppWrapper, Container, Copyright, Text } from "./AppWrapStyles";

const AppWrap = (Component, idName) =>
  function HOC() {
    const [background, setBackground] = useState(false);

    useEffect(() => {
      const changeBackground = () => {
        if (window.scrollY >= 10) {
          setBackground(true);
        } else {
          setBackground(false);
        }
      };

      window.addEventListener("scroll", changeBackground);

      return () => {
        window.removeEventListener("scroll", changeBackground);
      };
    }, []);

    return (
      <Container id={idName}>
        <SocialMedia />
        <AppWrapper>
          <Component />
          <Copyright className={background ?  "active" : ""}>
            <Text>©Alex 2022</Text>
            <Text>All rights reserved.</Text>
          </Copyright>
        </AppWrapper>
        <NavigationDots active={idName} />
      </Container>
    );
  };

export default AppWrap;
