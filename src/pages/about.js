import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <h1>About Me</h1>
        <p>I'm a React Jr Developer currently learning the Gatsby framework</p>
        <p>
          <Link to="/contact">Want to contact me?</Link>
        </p>
      </Layout>
    </div>
  );
};

export default AboutPage;
