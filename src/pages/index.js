import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import HeaderImage from '../components/HeaderImage';
import Accordion from '../components/Accordion';
import SEO from '../components/SEO';

export const query = graphql`
  query {
    site {
      siteMetadata {
        faq {
          question
          answer
        }
      }
    }
  }
`;

export default () => {
  const data = useStaticQuery(query);

  return <Layout>
    <SEO />
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">MakeUC 2020</h1>
          <p className="text-xl lg:text-3xl mt-6 font-light">
            Discovering the beyond <br />
            <strong>October 3-4, 2020</strong>
          </p>
          <p className="mt-8 md:mt-12">
            <Link to="/register">
              <Button size="lg">Register</Button>
            </Link>
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeaderImage />
        </div>
      </div>
    </section>
    {/* <section id="schedule" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Schedule</h2>
        <div className="sm:-mx-3 mt-12">
          <iframe
            title="schedule"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSl9HPcmstfEHYhgx0RJO4F_jfGLmfnsiSWQRMSasb6oJXbcwk6NsLqzSD-GgtgSd8EP0ILKODmxllC/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
            width="100%"
            height="500px"
          />
        </div>
      </div>
    </section> */}
    <section id="tracks" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Tracks</h2>
        <div className="sm:-mx-3 mt-12">
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card style={{ height: `250px` }}>
                <h1 className="text-2xl font-semibold">Education</h1>
                <p>
                  The Education track aims to improve the accessibility of information and enhance the
                  learning experiences of students at any level. These projects include but are not
                  limited to increasing access to information and technologies related to space
                  science, and providing an improved learning experience for students with a variety
                  of learning styles.
              </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card style={{ height: `250px` }}>
                <h1 className="text-2xl font-semibold">Space Exploration</h1>
                <p>
                  The Space Exploration track aligns with the main theme of this year’s hackathon.
                  This track includes any technologies aimed to enhance or otherwise improve any
                  aspect of space exploration.
              </p>
              </Card>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card style={{ height: `250px` }}>
                <h1 className="text-2xl font-semibold">Health Technology</h1>
                <p>
                  The Health Technology track aims to make improvements to a variety of health
                  technologies including but not limited to medical imaging, healthcare technology
                  systems, and interpreting health-related data. This track also aims to improve
                  accessibility to medical technology improvements.
              </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card style={{ height: `250px` }}>
                <h1 className="text-2xl font-semibold">Social Responsibility</h1>
                <p>
                  The Social Responsibility track encompasses technologies concerning social and
                  economic inequality as well as reducing environmental impact. This track aims to
                  increase overall social responsibility and make improvements on the current systems
                  we have in place.
              </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="faq" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">FAQ</h2>
        <div className="sm:-mx-3 mt-12 text-left">
          <Card>
            {data.site.siteMetadata.faq.map(faq =>
              <Accordion
                key={faq.question}
                title={faq.question}
                content={faq.answer}
              />
            )}
            <Accordion
              title="How much does it cost?"
              content="Nothing! The entire event is free for any student, with tools and prizes all included."
            />
            <Accordion
              title="What if I'm new to hackathons?"
              content="You’re new to hackathons? Wonderful! MakeUC is open to all skill levels, beginners to veterans. There’s nothing we love more than helping our hackers learn something new while they build something cool!"
            />
            <Accordion
              title="How do I form teams?"
              content="Teams are formed at the event but you're free to organize before if all participants are registered."
            />
          </Card>
        </div>
      </div>
    </section>
    {/* <section id="prizes" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Prizes</h2>
        <div className="sm:-mx-3 mt-12">
          <Card>
            <p className="text-xl">Prizes</p>
          </Card>
        </div>
      </div>
    </section> */}
    <section id="sponsors" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">SPONSORS!</h2>
        <div className="sm:-mx-3 mt-12">
          <Card>
            <p className="text-xl">Interested in sponsoring MakeUC 2020? Reach out to us at:</p>
            <p className="text-2xl"><a href="mailto:contact@makeuc.io">contact@makeuc.io</a></p>
          </Card>
        </div>
      </div>
    </section>
  </Layout>
};
