import { socialIcons } from "../../constants/headerData";
import { SocialIcon, SocialIcons } from "./SocialMediaStyles";

const SocialMedia = () => {
  return (
    <SocialIcons>
      {socialIcons.map(({ icon, link, id }) => (
        <SocialIcon key={id} href={link}>
          {icon}
        </SocialIcon>
      ))}
    </SocialIcons>
  );
};
export default SocialMedia;
