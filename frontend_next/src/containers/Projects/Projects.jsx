import { useState, useEffect } from "react";

import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import {
  Categories,
  Container,
  Contain,
  Header,
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
  Span,
  Tooltip,
} from "./ProjectStyles";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);

  const handleProjectsFilter = category => {
    setActiveFilter(category);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (category === "All") {
        setFilterProjects(projects)
      } else {
        setFilterProjects(projects.filter((project) => project.categories.includes(category)))
      }
    }, 500);
  };

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
        <Header>My <Span>Creative</Span> Portfolio</Header>
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
                    <ProjectIcon
                      data-tip="view source code"
                    >
                      <SourceIcon />
                    </ProjectIcon>
                  </ProjectLink>
                  <ProjectLink href={project.projectLink} target="_blank" rel="noopener noreferrer">
                    <ProjectIcon
                      data-tip="visit live site"
                    >
                      <LiveIcon />
                    </ProjectIcon>
                    <Tooltip 
                      className="tooltip"
                      effect="solid"
                      arrowColor="#fff"
                    />
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
