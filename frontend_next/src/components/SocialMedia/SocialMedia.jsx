import { socialIcons } from "../../constants/headerData";
import { SocialIcon, SocialIcons } from "./SocialMediaStyles";

const SocialMedia = () => {
  return (
    <SocialIcons>
      {socialIcons.map(({ icon, link, id }) => (
        <SocialIcon key={id} href={link} target="_blank" rel="noopener noreferrer">
          {icon}
        </SocialIcon>
      ))}
    </SocialIcons>
  );
};
export default SocialMedia;
