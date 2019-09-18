import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Scrollspy from "react-scrollspy";
import Scroll from "./Scroll";

export default () => {
  const { dataJson } = useStaticQuery(
    graphql`
      query {
        dataJson {
          sidebar {
            href
            content
          }
        }
      }
    `
  );

  const { sidebar: tabs } = dataJson;

  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <Scrollspy items={tabs.map(tab => tab.href)} currentClassName="active" offset={-300}>
            {tabs.map(tab => {
              const { href, content } = tab;
              return (
                <li key={href}>
                  <Scroll type="id" element={href}>
                    <a href={`#${href}`}>{content}</a>
                  </Scroll>
                </li>
              );
            })}
          </Scrollspy>
        </nav>
      </div>
    </section>
  );
};
