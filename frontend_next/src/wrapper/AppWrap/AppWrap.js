import { NavigationDots, SocialMedia } from "../../components"
import { AppWrapper, Container, Copyright, Text } from "./AppWrapStyles";

const AppWrap = (Component, idName) => function HOC() {
  return (
    <Container id={idName} >
        <SocialMedia />
        <AppWrapper>
            <Component />
            <Copyright>
                <Text>©Alex 2022</Text>
                <Text>All rights reserved.</Text>
            </Copyright>
        </AppWrapper>
        <NavigationDots active={idName} />
    </Container>
  )
}

export default AppWrap;