import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Scroll from "react-anchor-link-smooth-scroll";
import Scrollspy from "react-scrollspy";

const Sidebar = () => {
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
                  <Scroll href={`#${href}`}>{content}</Scroll>
                </li>
              );
            })}
          </Scrollspy>
        </nav>
      </div>
    </section>
  );
};

export default Sidebar;
