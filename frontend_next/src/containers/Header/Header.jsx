import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import logo from "../../assets/images/logo.svg";
import { Links, socialIcons } from "../../constants/headerData";
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

  return (
    <Container className={navbar ? `${className} active` : `${className}`}>
      <Logo href="/" passHref>
        <NavLink>
          <LogoImage src={logo} alt="logo" />
        </NavLink>
      </Logo>
      <NavContainer>
        <NavLinks>
          {Links.map(({ title, href, id }) => (
            <NavLink className={router.asPath == `#${href}` ? "active" : ""} href={href} key={id}>
              {title}
            </NavLink>
          ))}
        </NavLinks>
        <Cv href="../../assets/docs/resume.pdf" download>
          Résumé
        </Cv>
      </NavContainer>
      <MobileMenu onClick={toggleSidebar} />
    </Container>
  );
};
export default Header;
