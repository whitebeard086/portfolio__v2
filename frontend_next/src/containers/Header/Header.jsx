import { useRouter } from "next/router";

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
  const router = useRouter();

  return (
    <Container className={className}>
      <Logo href="/" passHref>
        <NavLink>
          <LogoImage src={logo} alt="logo" />
        </NavLink>
      </Logo>
      <NavContainer>
        <NavLinks>
          {Links.map(({ title, href, id }) => (
            <NavLink className={router.asPath == href ? "active" : ""} href={href} key={id}>
              {title}
            </NavLink>
          ))}
        </NavLinks>
      </NavContainer>
      <Cv href="../../assets/docs/resume.pdf" download>
        Résumé
      </Cv>
      <MobileMenu onClick={toggleSidebar} />
    </Container>
  );
};
export default Header;
