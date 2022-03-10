import { IoLogoYoutube, IoMdMailUnread } from "react-icons/io";
import { ImHome3 } from "react-icons/im";
import { RiGitBranchFill, RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane, FaTwitter, FaUser } from "react-icons/fa";

export const Links = [
  {
    title: "Home",
    href: "#",
    id: 1,
  },
  {
    title: "About",
    href: "#about",
    id: 2,
  },
  {
    title: "Projects",
    href: "#projects",
    id: 3,
  },
  {
    title: "Contact",
    href: "#contact",
    id: 4,
  },
];

export const mobileLinks = [
  {
    title: "Home",
    href: "#",
    icon: <ImHome3 size="0.8rem" />,
    id: 1,
  },
  {
    title: "About",
    href: "#about",
    icon: <FaUser size="0.8rem" />,
    id: 2,
  },
  {
    title: "Projects",
    href: "#projects",
    icon: <RiGitBranchFill size="0.8rem" />,
    id: 3,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: <IoMdMailUnread size="0.8rem" />,
    id: 4,
  },
];

export const socialIcons = [
  {
    icon: <IoLogoYoutube size="1.1rem" />,
    link: "https://www.youtube.com/c/KryptOkib",
    id: 1,
  },
  {
    icon: <FaTelegramPlane size="1.1rem" />,
    link: "https://www.youtube.com/c/KryptOkib",
    id: 2,
  },
  {
    icon: <FaTwitter size="1.1rem" />,
    link: "https://twitter.com/KryptOkib",
    id: 3,
  },
  {
    icon: <RiInstagramFill size="1.1rem" />,
    link: "https://www.instagram.com/kryptokib/",
    id: 4,
  },
];
