import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Links } from "../../constants/headerData";
import { client, urlFor } from "../../client";
import {
  Container,
  Logo,
  LogoImage,
  NavContainer,
  NavLink,
  NavLinks,
  MobileMenu,
  Cv,
} from "./HeaderStyles";

const Header = ({ className, toggleSidebar }) => {
  const [navbar, setNavbar] = useState(false);
  const [items, setItems] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 200) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  useEffect(() => {
    const query = '*[_type == "navbar"]';

    client.fetch(query).then(data => {
      setItems(data[0]);
    });
  }, []);

  return (
    <Container className={navbar ? `${className} active` : `${className}`}>
      {items && (
        <Logo href="/" passHref>
          <NavLink>
            <LogoImage src={urlFor(items.logo)} height={150} width={150} alt="logo" />
          </NavLink>
        </Logo>
      )}
      <NavContainer>
        <NavLinks>
          {Links.map(({ title, href, id }) => (
            <NavLink className={router.asPath == `#${href}` ? "active" : ""} href={href} key={id}>
              {title}
            </NavLink>
          ))}
        </NavLinks>
          <Cv href="/docs/Resume.pdf" download>
            Résumé
          </Cv>
      </NavContainer>
      <MobileMenu onClick={toggleSidebar} />
    </Container>
  );
};
export default Header;
