import React from "react";
import Scrollspy from "react-scrollspy";
import Scroll from "./Scroll";

export class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: "Welcome", href: "header" },
        { content: "Who we are", href: "one" },
        { content: "What we do", href: "two" },
        { content: "Get in touch", href: "three" }
      ]
    };
  }

  render() {
    const { tabs } = this.state;
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
  }
}

export default Sidebar;
