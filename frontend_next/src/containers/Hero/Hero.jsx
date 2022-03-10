import { useEffect, useState } from "react";
import { sanityClient } from "../../../sanity";
import { client } from "../../client"
import { userQuery } from "../../utils/data"

import { Container, HeroBg, HeroContent, HeroText, Video } from "./HeroStyles";

const Hero = ( ) => {
    const [video, setVideo] = useState(null)
    useEffect(() => {
        const query = userQuery()

        client.fetch(query)
            .then((data) => {
                setVideo(data)
            })
    }, [])

  return (
    <Container id="home">
      {console.log(video)}
      <HeroBg>
        <Video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </Video>
        <HeroContent>
          <HeroText>
            Welcome To <br /> KryptOkib Trading Hub <br /> The Home Of Technical Analysis
          </HeroText>
        </HeroContent>
      </HeroBg>
    </Container>
  );
};

export default Hero;
