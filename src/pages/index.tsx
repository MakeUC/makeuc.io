import { graphql, useStaticQuery } from 'gatsby';
import React, { FC, useEffect, useState } from 'react';
import Accordion from '../components/Accordion';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import HeaderImg from '../images/better_header_retro.png';

export const query = graphql`
  query {
    site {
      siteMetadata {
        tracks {
          title
          content
        }
        faq {
          question
          answer
        }
        sponsors {
          link
          src
          imageHeight
          className
          alt
        }
      }
    }
  }
`;

const IndexPage: FC = () => {
  const data = useStaticQuery(query);
  const { tracks, faq, sponsors } = data.site.siteMetadata;

  const smallFontStyle = {
    fontSize: 20,
  };

  const mediumFontStyle = {
    fontSize: 30,
  };
  // Recently edited for making nav-bar contents responsive
  const [width, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    const { innerWidth } = window;
    setWindowWidth(innerWidth);
  };

  // componentDidMount...runs only once
  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <Layout>
      <SEO />
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">MAKEUC 2022</h1>
            <p className="text-xl lg:text-3xl mt-6 font-light" style={mediumFontStyle}>
              NEXT STOP: MAKE YOUR WORLD <br />
              <strong>OCTOBER 22-23, 2022</strong>
            </p>
            <p className="mt-8 md:mt-12">
              {/* <Link to="/register">
                <Button size="lg" className="font-sans text-md font-bold">
                  REGISTER
                </Button>
              </Link> */}

              {/* <Link to="https://makeuc-2022.devpost.com/">
                <Button size="lg" className="text-md font-bold">
                  DEVPOST
                </Button>
              </Link> */}

              {/* <Link to="/register">
                <Button size="lg" className="text-md font-bold">
                  REGISTER
                </Button>
              </Link> */}
            </p>
          </div>
          <div className="lg:w-1/2">
            <img className="m-auto" style={{ width: '60%' }} src={HeaderImg} alt="MakeUC Header" />
          </div>
        </div>
      </section>
      <section id="about" className="py-10 lg:pb-24 lg:pt-24">
        <div className="container mx-auto">
          <h2
            className="text-6xl lg:text-9xl font-semibold text-center"
            style={{
              textDecoration: 'underline',
              textDecorationColor: '#8b7283',//'#fccf00', // "#8ae9c1",
            }}
          >
            ABOUT
          </h2>
          <div className="grid sm:grid-cols-1">
            <div className="mt-12 text-left text-black">
              <Card className="m-4 bg-white text-center is-centered is-rounded">
                <h1 className="text-2xl font-semibold text-black">BACKGROUND</h1>
                <br />
                <p style={{ fontSize: '20px' }}>
                  MakeUC is a 24-hour hackathon hosted by{' '}
                  <a target="_blank" rel="noopener noreferrer" href="https://ieee.uc.edu/">
                    IEEE at University of Cincinnati
                  </a>
                  ! At MakeUC, we believe that the most critical challenges must be solved by
                  interdisciplinary and diverse teams. All you need to participate is a passion for
                  bettering the world. We offer workshops, APIs and resources to help you succeed!
                </p>
              </Card>
              <Card className="m-4 bg-white text-center is-centered is-rounded">
                <h1 className="text-2xl font-semibold text-black">CHANGES TO MAKE UC</h1>
                <br />
                <p style={{ fontSize: '20px' }}>
                  As we begin to move forward into 2022, MakeUC is proud to announce that we will be
                  open to partial in-person attendance! Information on in-person attendance will be
                  released in the near future.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="tracks" className="py-10 lg:pb-24 lg:pt-24">
        <div className="container mx-auto text-center">
          <h2
            className="text-3xl lg:text-5xl font-semibold"
            style={{
              textDecoration: 'underline',
              textDecorationColor: '#8b7283',//'#fccf00', // "#8ae9c1",
            }}
          >
            TRACKS
          </h2>
          <div className="mt-12">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
              {tracks.map(track => (
                <Card
                  key={track.title}
                  className="is-centered is-rounded m-4 text-secondary bg-white"
                >
                  <h1 className="text-2xl font-semibold text-black">{track.title}</h1>
                  <br />
                  <p className="text-black" style={smallFontStyle}>
                    {track.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <section id="hypeweek" className="py-10 lg:pb-24 lg:pt-24">
        <div className="container mx-auto text-center">
          <h2
            className="text-3xl lg:text-5xl font-semibold"
            style={{
              textDecoration: 'underline',
              textDecorationColor: '#8b7283',//'#fccf00', // "#8ae9c1",
            }}
          >
            HYPE WEEK
          </h2>
          <div className="mt-12">
            <Card className="is-centered is-rounded m-4 text-secondary bg-white">
              <h1 className="text-2xl font-semibold text-black">WHAT IS HYPE WEEK?</h1>
              <br />
              <p className="text-black" style={{ fontSize: '20px' }}>
                Hype Week is a week of events and workshops that will help you get to know your
                fellow hackers, sponsors, mentors, and the MakeUC community. We&amp;ll be hosting
                workshops on a number of different topics as well as some fun events to network with
                hackers and mentors.
              </p>
            </Card>
            <Card className="is-centered is-rounded m-4 text-secondary bg-white">
              <h1 className="text-2xl font-semibold text-black">SCHEDULE</h1>
              <br />
              <Schedule />
            </Card>
          </div>
        </div>
      </section> */}
      <section id="faq" className="py-10 lg:pb-24 lg:pt-24">
        <div className="container mx-auto">
          <h2
            className="text-3xl lg:text-5xl font-semibold text-center"
            style={{
              textDecoration: 'underline',
              textDecorationColor: '#8b7283',//'#fccf00', // "#8ae9c1",
            }}
          >
            FAQ
          </h2>
          <div className="grid sm:grid-cols-1">
            <div className="mt-12 text-left text-black">
              <Card className="is-centered is-rounded m-4 bg-white">
                {faq.map(faqItem => (
                  <Accordion
                    key={faqItem.question}
                    title={faqItem.question}
                    content={faqItem.answer}
                  />
                ))}
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="sponsors" className="py-10 lg:pb-24 lg:pt-24">
        <div className="container mx-auto text-center">
          <h2
            className="text-3xl lg:text-5xl font-semibold"
            style={{
              textDecoration: 'underline',
              textDecorationColor: '#8b7283',//'#fccf00', // "#8ae9c1",
            }}
          >
            SPONSORS
          </h2>
          <div  id="sponsor-interest" className="container mx-auto text-center py-120">
            <h2 className="font-semibold text-center">
            INTERESTED IN SPONSORING MAKEUC? <br />
            CONTACT US AT{' '}
              <a href="mailto:contact@makeuc.io" style={{color: '#fff'}}>
              <u>CONTACT@MAKEUC.IO</u>
              </a>
            </h2>
          {/* <Card className="is-centered is-rounded m-4 bg-white">
              <a href="mailto:contact@makeuc.io">
                <Button size="lg" className="text-md font-bold is-centered">
                CONTACT US
                </Button>
              </a>
              <p className="mt-4 text-md sm:text-xl text-black">
              OR EMAIL US AT{' '}
              <a href="mailto:contact@makeuc.io">
                <u>CONTACT@MAKEUC.IO</u>
              </a>
            </p>
          </Card> */}
           </div>
          <div className="container mx-auto grid sm:grid-cols-1">
            <div className="mt-12 text-center text-black sm:grid-cols-1">
              <Card className="is-centered is-rounded m-4 bg-white">
                {sponsors.map((category, index) => (
                  <>
                    {!!index && index !== 6 && index !== 2 && <hr className="mt-5" />}{' '}
                    {/* this is absolutely disgusting */}
                    <div className="sm:mx-auto px-auto flex justify-center items-center content-around flex-wrap">
                      {category.map(sponsor => (
                        <div key={sponsor.link} className="mt-1 text-secondary bg-white m-2 md:m-4">
                          <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                            <img
                              src={sponsor.src}
                              style={{ height: sponsor.imageHeight }}
                              className={sponsor.className}
                              alt={sponsor.alt}
                            />
                          </a>
                        </div>
                      ))}
                    </div>
                  </>
                ))}
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div
        id="ghost"
        className="mb-5 mt-2 mt-4 px-0 px-5 mt-4 sm:px-16 sm:px-8 sm:px-20 mt-2 partner"
      />
    </Layout>
  );
};
export default IndexPage;
