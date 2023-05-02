import styled from "styled-components";

export const FooterSection = styled.footer`
  background-color: #222;
  padding: 20px 30px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 20px;
  }

  .footer-icons {
    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--main-color);
      width: 35px;
      height: 35px;
      margin: 0 5px;
      color: var(--text-color);
      font-size: 1.2rem;
      border-radius: 50%;
      transition: all 0.55s;
    }
  }

  .footer-icons a:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 630px) {
    p {
      margin-bottom: 30px;
    }
  }
`;
