import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&family=Roboto&display=swap');

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  :root {
    --blue-dark: #301896;
    --blue-medium: #0077b6;
    --blue-light: #00b4d8;
    --blue-grey: #90e0ef;
    --gray-medium: #415a77;
    --gray-light: #e0e1dd;
    --white: #fff;
    --purple: #8c7abd;
    --gray: #444;
  };

  body,html{
    display: flex;
    justify-content: flex-start;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;

    overflow-x: hidden;

    background-color: var(--purple);
    color: var(--white);
    }


  body {
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;

  }
  body, input, button, textarea {
    font-family: 'Poppins';
  }
  button {
    text-align: center;
    cursor: pointer;
  }

  * {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: var(--purple);
}

*::-webkit-scrollbar-thumb {
  background-color: var(--gray-medium);
  border-radius: 20px;
  border: 1px solid var(--blue-medium);
}
`;
