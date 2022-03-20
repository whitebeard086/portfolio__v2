import { motion } from "framer-motion";
import { MdOutlineOpenInNew } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";
import ReactTooltip from "react-tooltip";
import styled from "styled-components";

export const Container = styled.section`
  background: rgba(93, 97, 124, 0.4);
  display: flex;
  justify-content: center;
`;

export const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 0 5rem;
  margin: 0 5rem;

  @media ${props => props.theme.breakpoints.xmd} {
    padding: 0;
    margin: 0 5rem;
  }
`;

export const Span = styled.span`
  color: rgb(45, 46, 73);
`

export const Header = styled.h2`
  margin-top: 4rem;
  font-size: 3rem;

  @media ${props => props.theme.breakpoints.xmd} {
    font-size: 2.3rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.8rem;
  }
`;

export const ProjectsFilter = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  gap: 2rem;
  margin: 2rem 0;
  font-weight: 800;
  font-size: 1.3rem;

  @media ${props => props.theme.breakpoints.xmd} {
    font-size: 1rem;
    font-weight: 500;
    gap: 1rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: .7rem;
  }
`;

export const Categories = styled.div`
  padding: 0.4rem 1rem;
  border-radius: 6px;
  cursor: pointer;

  &.active {
    background: rgba(45, 46, 73, 0.9);
    color: rgba(255, 255, 255);
    font-weight: 500;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.4rem 0.4rem;
  }
`;

export const ProjectsCard = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 5rem;
  row-gap: 3rem;
  margin: 2rem 0;

  @media ${props => props.theme.breakpoints.xl} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${props => props.theme.breakpoints.lg} {
    grid-template-columns: 1fr;
  }
`;

export const ProjectItem = styled.div`
  background: rgba(93, 97, 124, 0.6);
  -webkit-box-shadow: 1px 1px 7px 0px #2d2e49;
  box-shadow: 1px 1px 7px 0px #2d2e49;
  width: 350px;
  border-radius: 10px;

  @media ${props => props.theme.breakpoints.xmd} {
    width: 350px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 250px;
  }
`;

export const ProjectImage = styled.div`
  width: 100%;

  img {
    border-radius: 10px 10px 0 0;
  }
`;

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2.5rem;
  width: 100%;
  height: 450px;

  @media ${props => props.theme.breakpoints.lg} {
    height: auto;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 1.5rem;
  }
`;

export const ProjectTitle = styled.h4`
  margin: 1rem 0;
  font-size: 2rem;
  color: rgb(241, 258, 238);
  display: flex;
  text-align: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.xmd} {
    font-size: 1.5rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const ProjectDescription = styled.p`
  line-height: 1.3;
  font-size: 1.3rem;

  @media ${props => props.theme.breakpoints.xmd} {
    font-size: 1.15rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1rem;
    line-height: 1.1;
  }
`;

export const ProjectTags = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem 0;

  @media ${props => props.theme.breakpoints.sm} {
    gap: .5rem;
  }
`;

export const Tag = styled.p`
  background: rgba(93, 97, 124, 0.7);
  color: rgb(241, 258, 238);
  display: flex;
  font-size: 0.8rem;
  font-weight: 200;
  padding: 0.5rem;
  border-radius: 6px;
  -webkit-box-shadow: 1px 1px 5px 0px #2d2e49;
  box-shadow: 1px 1px 5px 0px #2d2e49;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`;

export const ProjectIcons = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const ProjectLink = styled.a``;

export const ProjectIcon = styled(motion.div)`
  background: rgba(45, 46, 73, 0.9);
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 30%;
  margin: 0 1.2rem;
  -webkit-box-shadow: 1px 1px 6px 0px #2d2e49;
  box-shadow: 1px 1px 6px 0px #2d2e49;
  transition: all 0.4s ease;

  &:hover {
    transform: scale(1.05);
    color: rgba(255, 255, 255, 0.8);
  }

  &.tooltip {
    background-color: #fff !important;
  }
`;

export const LiveIcon = styled(MdOutlineOpenInNew)`
  font-size: 1.6rem;
`;

export const SourceIcon = styled(RiGithubLine)`
  font-size: 1.6rem;
`;

export const Tooltip = styled(ReactTooltip)`
  background: rgba(46, 45, 73, 0.5) !important;
  transition: all 0.4s ease !important;
`