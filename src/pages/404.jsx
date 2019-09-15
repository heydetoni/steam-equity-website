import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layouts/layout";
const NotFoundPage = () => (
  <Layout>
    <section id="main" className="wrapper">
      <div className="inner">
        <h1 className="major">404</h1>
        <div className="align-center">
          <h2>{"This page couldn't be found"}</h2>
          <Link className="button large" to="/">
            Home
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
