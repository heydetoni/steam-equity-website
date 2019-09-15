import React from "react";
import { loremIpsum } from "react-lorem-ipsum";
import Page from "../components/layouts/page";
import pic4 from "../images/pic4.jpg";

const GenericPage = () => (
  <Page title="A Generic Page" image={pic4}>
    <p>{loremIpsum({ startWithLoremIpsum: false })}</p>
    <p>{loremIpsum({ startWithLoremIpsum: false })}</p>
  </Page>
);

export default GenericPage;
