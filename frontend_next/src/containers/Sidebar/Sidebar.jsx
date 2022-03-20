import { useRouter } from "next/router";
import { socialIcons, mobileLinks } from "../../constants/headerData";
import {
  CloseIcon,
  Container,
  Cv,
  Icon,
  NavLink,
  NavLinks,
  SocialIcon,
  SocialIcons,
} from "./SidebarStyles";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const router = useRouter();

  return (
    <Container isOpen={isOpen} onClick={toggleSidebar}>
      <CloseIcon />
      <NavLinks>
        {mobileLinks.map(({ title, href, icon, id }) => (
          <NavLink className={router.asPath == href ? "active" : ""} key={id} href={href}>
            <Icon>{icon}</Icon>
            {title}
          </NavLink>
        ))}
      </NavLinks>
      <Cv href="docs/Resume.pdf" download>Résumé</Cv>
      <SocialIcons>
        {socialIcons.map(({ icon, link, id }) => (
          <SocialIcon key={id} href={link} target="_blank" rel="noopener noreferrer">
            {icon}
          </SocialIcon>
        ))}
      </SocialIcons>
    </Container>
  );
};
export default Sidebar;
