import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap");

html,
body,
#root {
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito", sans-serif;
  font-size: 16px;
}

h1 {
    font-size: 2.5rem;
}

h2 {
    font-size: 2rem;
}

h3 {
    font-size: 1.75rem;
}

h4 {
    font-size: 1.5rem;
}

h5 {
    font-size: 1.25rem;
}

h6 {
    font-size: 1rem;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}



/* === DASHBOARD PAGE === */

#dashboard-page {
  margin-top: 5%;
  display: grid;
  grid-auto-columns: sidebar 1fr main 3fr;
}

#profile-pic {
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

@media only screen and (min-width: 902px) {
  .brand-logo {
    margin-left: 1em;
  }
}

@media only screen and (max-width: 504px) {
  .card-action {
    font-size: 1em;
  }
}

@media only screen and (max-width: 400px) {
  .card-action {
    height: 100%;
  }
}
`;
