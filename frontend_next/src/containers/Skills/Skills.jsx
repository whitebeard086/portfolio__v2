import { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import {
  Contain,
  Container,
  Experiences,
  ExperienceItem,
  ExperienceYear,
  Skill,
  SkillImage,
  SkillItem,
  SkillsContainer,
  SkillsList,
  Title,
  Work,
  Works,
  Year,
  Experience,
  Description,
} from "./SkillsStyles";

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then(data => {
      setExperience(data);
    });

    client.fetch(skillsQuery).then(data => {
      setSkills(data);
    });
  }, []);

  return (
    <Container>
      <Contain>
        <Title>Skills & Experience</Title>
        <SkillsContainer>
          <SkillsList>
            {skills.map(skill => (
              <SkillItem
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                key={skill.name}>
                <SkillImage style={{ backgroundColor: skill.bgColor }}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </SkillImage>
                <Skill>{skill.name}</Skill>
              </SkillItem>
            ))}
          </SkillsList>
          <Experiences>
            {experience?.map((experience) => (
              <ExperienceItem key={experience._id}>
                <ExperienceYear>
                  <Year>{experience.year}</Year>
                </ExperienceYear>
                <Experience>
                  {experience.works.map((work) => (
                    <div key={work._key}>
                      <Works
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}>
                        <Work>{work.name}</Work>
                        <Description>{work.desc}</Description>
                      </Works>
                    </div>
                  ))}
                </Experience>
              </ExperienceItem>
            ))}
          </Experiences>
        </SkillsContainer>
      </Contain>
    </Container>
  );
};
export default MotionWrap(AppWrap(Skills, "skills"));
