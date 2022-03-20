import { IoMdMailUnread } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { ImHome3 } from "react-icons/im";
import { RiGitBranchFill, RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane, FaTools, FaLinkedinIn, FaUser } from "react-icons/fa";

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
    title: "Skills",
    href: "#skills",
    id: 4,
  },
  {
    title: "Contact",
    href: "#contact",
    id: 5,
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
    title: "Skills",
    href: "#skills",
    icon: <FaTools size="0.8rem" />,
    id: 4,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: <IoMdMailUnread size="0.8rem" />,
    id: 5,
  },
];

export const socialIcons = [
  {
    icon: <BsGithub size="1.4rem" />,
    link: "https://github.com/whitebeard086",
    id: 1,
  },
  {
    icon: <FaLinkedinIn size="1.4rem" />,
    link: "https://www.linkedin.com/in/alex-ejimkaraonye-82b533180/",
    id: 2,
  },
  {
    icon: <FaTelegramPlane size="1.4rem" />,
    link: "https://t.me/Code_Ninja0",
    id: 3,
  },
];
