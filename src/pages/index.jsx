import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCode, faCog, faDesktop, faGem, faLink, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { loremIpsum } from "react-lorem-ipsum";
import Feature from "../components/feature";
import Scroll from "../components/Scroll";
import Sidebar from "../components/sidebar";
import Spotlight from "../components/spotlight";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import Layout from "../templates/layout";

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
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
        }
      }
    `
  );
  const { siteMetadata } = site;
  return (
    <Layout>
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
          <Spotlight
            title="Block 1"
            message={loremIpsum({ avgSentencesPerParagraph: 4, startWithLoremIpsum: false })}
            to="/generic"
            image={pic1}
          />
          <Spotlight
            title="Block 2"
            message={loremIpsum({ avgSentencesPerParagraph: 4, startWithLoremIpsum: false })}
            to="/generic"
            image={pic2}
          />
          <Spotlight
            title="Block 3"
            message={loremIpsum({ avgSentencesPerParagraph: 4, startWithLoremIpsum: false })}
            to="/generic"
            image={pic3}
          />
        </section>

        <section id="two" className="wrapper style3 fade-up">
          <div className="inner">
            <h2>What we do</h2>
            <p>{loremIpsum({ avgSentencesPerParagraph: 5, startWithLoremIpsum: false })}</p>
            <div className="features">
              {[faCode, faLock, faCog, faDesktop, faLink, faGem].map(icon => (
                <Feature
                  key={`${icon.prefix}-${icon.iconName}`}
                  icon={icon}
                  title={loremIpsum({
                    avgWordsPerSentence: 3,
                    avgSentencesPerParagraph: 1,
                    startWithLoremIpsum: false
                  })}
                  body={loremIpsum({ avgSentencesPerParagraph: 2, startWithLoremIpsum: false })}
                />
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
            <p>{loremIpsum({ avgSentencesPerParagraph: 3, startWithLoremIpsum: false })}</p>
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
