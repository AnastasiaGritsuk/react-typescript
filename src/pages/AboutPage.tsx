import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {

  const history = useHistory();
  return (
    <React.Fragment>
      <h1>About page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut exercitationem eos ipsa? Voluptatum dolorum iure quo, voluptates doloremque minus.</p>
      <button className="btn" onClick={() => history.push('/')}>Return to todos</button>
    </React.Fragment>
  )
}