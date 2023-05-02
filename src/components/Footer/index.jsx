import { FooterSection } from "./style";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterSection>
      <div className="footer-text">
        <p>
          {" "}
          © 2023 alguns direitos reservados - Developer by: Higor Skowronski
        </p>
      </div>
      <div className="footer-icons">
        <a href="https://github.com/HigorSkw/" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/higorskw"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
    </FooterSection>
  );
};

export default Footer;
