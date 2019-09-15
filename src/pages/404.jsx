import { Link } from "gatsby";
import React from "react";
import Page from "../templates/page";

const NotFoundPage = () => (
  <Page title="404">
    <div className="align-center">
      <h2>{"This page couldn't be found"}</h2>
      <Link className="button large" to="/">
        Home
      </Link>
    </div>
  </Page>
);

export default NotFoundPage;
