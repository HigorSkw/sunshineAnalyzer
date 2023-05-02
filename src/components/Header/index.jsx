import { FaReact } from "react-icons/fa";
import { HeaderContainer, IconContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <IconContainer>
        <FaReact />
      </IconContainer>
      <h1>Skowronski Software</h1>
    </HeaderContainer>
  );
};

export default Header;
