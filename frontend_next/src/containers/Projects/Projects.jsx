import { useState, useEffect } from "react";
import Image from "next/image";

import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import {
  Categories,
  Container,
  Header,
  ImageHover,
  LiveIcon,
  ProjectContent,
  ProjectDescription,
  ProjectIcon,
  ProjectIcons,
  ProjectImage,
  ProjectItem,
  ProjectLink,
  ProjectsCard,
  ProjectsFilter,
  ProjectTags,
  ProjectTitle,
  SourceIcon,
  Tag,
} from "./ProjectStyles";
import { Contain } from "../../styles/GlobalComponents";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);

  const handleProjectsFilter = category => {};

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then(data => {
      setProjects(data);
      setFilterProjects(data);
    });
  }, []);

  return (
    <Container id="projects">
      <Contain>
        <Header>My Creative Portfolio</Header>
        <ProjectsFilter>
          {["Front-End", "Full Stack", "Blockchain", "All"].map((category, index) => (
            <Categories
              key={index}
              onClick={() => handleProjectsFilter(category)}
              className={`${activeFilter === category ? "active" : ""}`}>
              {category}
            </Categories>
          ))}
        </ProjectsFilter>
        <ProjectsCard animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }}>
          {filterProjects?.map((project, index) => (
            <ProjectItem key={index}>
              <ProjectImage>
                <img src={urlFor(project.imgUrl)} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </ProjectTags>
                <ProjectIcons>
                  <ProjectLink href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <ProjectIcon>
                      <SourceIcon />
                    </ProjectIcon>
                  </ProjectLink>
                  <ProjectLink href={project.projectLink} target="_blank" rel="noopener noreferrer">
                    <ProjectIcon>
                      <LiveIcon />
                    </ProjectIcon>
                  </ProjectLink>
                </ProjectIcons>
              </ProjectContent>
            </ProjectItem>
          ))}
        </ProjectsCard>
      </Contain>
    </Container>
  );
};
export default MotionWrap(AppWrap(Projects, "projects"));
