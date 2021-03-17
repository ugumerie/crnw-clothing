import React from "react";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";
import './homepage.styles.scss'

const Hompage = (props) => {
  console.log(props)
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Hompage;
