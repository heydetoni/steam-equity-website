import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Markdown from "react-markdown/with-html";
import Feature from "../components/feature";
import Scroll from "../components/Scroll";
import Sidebar from "../components/sidebar";
import Spotlight from "../components/spotlight";
import Layout from "../templates/layout";

const IndexPage = () => {
  const { dataJson } = useStaticQuery(
    graphql`
      {
        dataJson {
          siteMetadata {
            title
            description
            contact {
              socialMedia {
                instagram
                gitHub
              }
              email
              phone
              address {
                key
                value
              }
            }
          }
          features {
            body
            features {
              body
              icon
              title
            }
          }
          spotlights {
            body
            image
            title
            to
          }
          contact
        }
      }
    `
  );
  const { siteMetadata } = dataJson;
  return (
    <Layout title="Home">
      <Sidebar />
      <div id="wrapper">
        <section id="intro" className="wrapper style1 fullscreen fade-up">
          <div className="inner">
            <h1>{siteMetadata.title}</h1>
            <p>{siteMetadata.description}</p>
            <ul className="actions">
              <li>
                <Scroll type="id" element="one">
                  <a href="#one" className="button">
                    Learn more
                  </a>
                </Scroll>
              </li>
            </ul>
          </div>
        </section>

        <section id="one" className="wrapper style2 spotlights">
          {dataJson.spotlights.map(spotlight => (
            <Spotlight key={spotlight.title} title={spotlight.title} to={spotlight.to} image={spotlight.image}>
              {spotlight.body}
            </Spotlight>
          ))}
        </section>

        <section id="two" className="wrapper style3 fade-up">
          <div className="inner">
            <h2>What we do</h2>
            <div>
              <Markdown>{dataJson.features.body}</Markdown>
            </div>
            <div className="features">
              {dataJson.features.features.map(feature => (
                <Feature key={feature.icon} icon={feature.icon} title={feature.title}>
                  {feature.body}
                </Feature>
              ))}
            </div>
            <ul className="actions">
              <li>
                <Link className="button" to="/generic">
                  Learn more
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section id="three" className="wrapper style1 fade-up">
          <div className="inner">
            <h2>Get in touch</h2>
            <div>
              <Markdown>{dataJson.contact}</Markdown>
            </div>
            <div className="split style1">
              <section>
                <form method="post" action="#">
                  <div className="fields">
                    <div className="field half">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                      <label htmlFor="message">Message</label>
                      <textarea
                        style={{
                          resize: "vertical",
                          minHeight: "100px"
                        }}
                        name="message"
                        id="message"
                        rows="5"
                      />
                    </div>
                  </div>
                  <ul className="actions">
                    <li>
                      <a href="/#" className="button submit">
                        Send Message
                      </a>
                    </li>
                  </ul>
                </form>
              </section>
              <section>
                <ul className="contact">
                  {siteMetadata.contact.address.length > 0 && (
                    <li>
                      <h3>Address</h3>
                      <span>
                        {siteMetadata.contact.address.map((line, index) => (
                          <React.Fragment key={line.key || index}>
                            {index !== 0 && <br />}
                            {line.value}
                          </React.Fragment>
                        ))}
                      </span>
                    </li>
                  )}
                  {siteMetadata.contact.email && (
                    <li>
                      <h3>Email</h3>
                      <a href={`mailto:${siteMetadata.contact.email}`}>{siteMetadata.contact.email}</a>
                    </li>
                  )}
                  {siteMetadata.contact.phone && (
                    <li>
                      <h3>Phone</h3>
                      <a href={`tel:${siteMetadata.contact.phone}`}>{siteMetadata.contact.phone}</a>
                    </li>
                  )}
                  <li>
                    <h3>Social</h3>
                    <ul className="icons">
                      {siteMetadata.contact.socialMedia.instagram && (
                        <li>
                          <a title="Instagram" href={siteMetadata.contact.socialMedia.instagram}>
                            <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
                            <span className="label">Instagram</span>
                          </a>
                        </li>
                      )}
                      {siteMetadata.contact.socialMedia.gitHub && (
                        <li>
                          <a title="GitHub" href={siteMetadata.contact.socialMedia.gitHub}>
                            <FontAwesomeIcon icon={faGithub} className="fa-2x" />
                            <span className="label">GitHub</span>
                          </a>
                        </li>
                      )}
                    </ul>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default IndexPage;
