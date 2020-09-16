import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import Button from "../components/Button";
import Card from "../components/Card";
import Layout from "../components/layout/Layout";
import HeaderImage from "../components/HeaderImage";
import Accordion from "../components/Accordion";
import SEO from "../components/SEO";

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../../images/1.png'
import image5 from '../../images/5.png'

// import Schedule from '../components/Schedule';
// import scheduleData from '../../content/schedule.yaml';

export const query = graphql`
  query {
    site {
      siteMetadata {
        tracks { title content }
        faq { question answer }
        sponsors { link src imageHeight className alt }
      }
    }
  }
`;

export default () => {
  const data = useStaticQuery(query);
  const { tracks, faq, sponsors } = data.site.siteMetadata;

  // _onMouseMove = (e) => {
  //   const width = this.refs.speaker1.clientWidth;
  //   const height = this.refs.speaker1.clientHeight;
  //   console.log(width, height);
  // }

  return (
    <Layout>
      <SEO />
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              MAKEUC 2020
            </h1>
            <p className="text-xl lg:text-3xl mt-6 font-light">
              DISCOVERING THE BEYOND <br />
              <strong>OCTOBER 3-4, 2020</strong>
            </p>
            <p className="mt-8 md:mt-12">
              <Link to="/register">
                <Button size="lg" className="font-sans text-md font-bold">
                  REGISTER
                </Button>
              </Link>
            </p>
          </div>
          <div className="lg:w-1/2">
            <HeaderImage />
          </div>
        </div>
      </section>
      <section id="about" className="py-10 lg:pb-24 lg:pt-24">
        <div className="container mx-auto">
          <h2
            className="text-3xl lg:text-5xl font-semibold text-center"
            style={{
              textDecoration: "underline",
              textDecorationColor: "#8ae9c1",
            }}
          >
            ABOUT
          </h2>
          <div className="grid sm:grid-cols-1">
            <div className="mt-12 text-left text-black">
              <Card className="m-4 bg-white text-center">
                <h1 className="text-2xl font-semibold text-black">
                  BACKGROUND
                </h1>
                <br></br>
                <p>
                  MakeUC is a 24-hour hackathon hosted by {" "} 
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://ieee.uc.edu/"
                  >
                    IEEE at University of Cincinnati
                  </a>
                  ! At MakeUC, we believe that the most critical challenges must
                  be solved by interdisciplinary and diverse teams. All you need
                  to participate is a passion for bettering the world. We offer
                  workshops, APIs and resources to help you succeed!
                </p>
                <br></br>
                <hr></hr>
                <br></br>
                <h1 className="text-2xl font-semibold text-black">
                  CHANGES TO MAKEUC
                </h1>
                <br></br>
                <p>
                  Due to the unprecedented COVID-19 pandemic 😷, MakeUC 2020 will
                  take place virtually this year. Check out our FAQ section to
                  learn more!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="schedule" className="py-20 lg:pb-24 lg:pt-24">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Schedule</h2>
        <div className="mt-12">
          <Schedule schedule={scheduleData} height="300px" />
        </div>
      </div>
    </section> */}
      <section id="tracks" className="py-10 lg:pb-24 lg:pt-24">
        <div className="container mx-auto text-center">
          <h2
            className="text-3xl lg:text-5xl font-semibold"
            style={{
              textDecoration: "underline",
              textDecorationColor: "#8ae9c1",
            }}
          >
            TRACKS
          </h2>
          <div className="mt-12">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
              {tracks.map((track) => (
                <Card key={track.title} className="m-4 text-secondary bg-white">
                  <h1 className="text-2xl font-semibold text-black">
                    {track.title}
                  </h1>
                  <br></br>
                  <p className="text-black">{track.content}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="py-10 lg:pb-24 lg:pt-24">
        <div className="container mx-auto">
          <h2
            className="text-3xl lg:text-5xl font-semibold text-center"
            style={{
              textDecoration: "underline",
              textDecorationColor: "#8ae9c1",
            }}
          >
            FAQ
          </h2>
          <div className="grid sm:grid-cols-1">
            <div className="mt-12 text-left text-black">
              <Card className="m-4 bg-white">
                {faq.map((faq) => (
                  <Accordion
                    key={faq.question}
                    title={faq.question}
                    content={faq.answer}
                  />
                ))}
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="py-10 lg:pb-24 lg:pt-24">
        <div className="container mx-auto">
          <h2
            className="text-3xl lg:text-5xl font-semibold text-center"
            style={{
              textDecoration: "underline",
              textDecorationColor: "#8ae9c1",
            }}
          >
            SPEAKERS
          </h2>
          <div className='carousel mt-12'>
            <Card className="m-4 bg-white">
            <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-1 lg:grid-rows-1">
                <AliceCarousel 
                  autoPlay
                  autoPlayInterval="3000" 
                  buttonsDisabled="true" 
                  touchTrackingEnabled="true"
                  controlsStrategy="responsive"
                  preventEventOnTouchMove
                  showSlideInfo="true">
                    
                      <div className="speaker1">
                        <img src={image1} style={{width:"150px", height:"150px"}} className="sliderimg"/>
                        <p><h4 className="mt-3 text-xl lg:text-3xl font-semibold" 
                               style={{textDecoration: "underline", textDecorationColor: "#8ae9c1", color: "black"}}>
                                 Miri Rodriguez
                            </h4 ><br />
                            <h5 className="mt-1 text-l lg:text-xl font-semibold" 
                               style={{textDecoration: "underline", textDecorationColor: "#8ae9c1", color: "black"}}>
                                 Head of Global Internship Program at Microsoft
                            </h5 ><br />
                            <font color="black"> 
                              Author: Brand Storytelling
                            </font>
                        </p>
                      </div>
                      <div className="speaker2">
                        <img src={image5} style={{width:"150px", height:"150px"}} className="sliderimg"/>
                        <p><h4 className="mt-3 text-xl lg:text-3xl font-semibold" 
                               style={{textDecoration: "underline", textDecorationColor: "#8ae9c1", color: "black"}}>
                                 speaker 2 
                            </h4 ><br />
                            <h5 className="mt-1 text-l lg:text-xl font-semibold" 
                               style={{textDecoration: "underline", textDecorationColor: "#8ae9c1", color: "black"}}>
                                 &lt; Title &gt; 
                            </h5 ><br />
                            <font color="black"> 
                              &lt; text &gt; 
                            </font>
                        </p>
                      </div>
                      <div className="m-4">
                        <img src={image5} style={{width:"150px", height:"150px"}} className="sliderimg"/>
                        <p><h4 className="mt-3 text-xl lg:text-3xl font-semibold" 
                               style={{textDecoration: "underline", textDecorationColor: "#8ae9c1", color: "black"}}>
                                 speaker 3 
                            </h4 ><br />
                            <h5 className="mt-1 text-l lg:text-xl font-semibold" 
                               style={{textDecoration: "underline", textDecorationColor: "#8ae9c1", color: "black"}}>
                                 &lt; Title &gt; 
                            </h5 ><br />
                            <font color="black"> 
                              &lt; text &gt; 
                            </font>
                        </p>
                      </div>
                      <div className="m-4">
                        <img src={image5} style={{width:"150px", height:"150px"}} className="sliderimg"/>
                        <p><h4 className="mt-3 text-xl lg:text-3xl font-semibold" 
                               style={{textDecoration: "underline", textDecorationColor: "#8ae9c1", color: "black"}}>
                                 speaker 4 
                            </h4 ><br />
                            <h5 className="mt-1 text-l lg:text-xl font-semibold" 
                               style={{textDecoration: "underline", textDecorationColor: "#8ae9c1", color: "black"}}>
                                 &lt; Title &gt; 
                            </h5 ><br />
                            <font color="black"> 
                              &lt; text &gt; 
                            </font>
                        </p>
                      </div>    
                </AliceCarousel>
                </div>
             </Card>
          </div>
        </div>
      </section>
      {/* <section id="prizes"></section> */}
      <section id="sponsors" className="py-10 lg:pb-24 lg:pt-24">
        <div className="container mx-auto text-center">
          <h2
            className="text-3xl lg:text-5xl font-semibold"
            style={{
              textDecoration: "underline",
              textDecorationColor: "#8ae9c1",
            }}
          >
            SPONSORS
          </h2>
          <div className="container mx-auto grid sm:grid-cols-1">
            <div className="mt-12 text-center text-black sm:grid-cols-1">
              <Card className="m-4 bg-white">
                {sponsors.map((category, index) =>
                  <>
                    {!!index && <hr className="mt-5"></hr>}

                    <div className="sm:mx-auto px-auto flex justify-center content-around flex-wrap">
                      {category.map((sponsor) => (
                        <div key={sponsor.link} className="mt-1 text-secondary bg-white">
                          <a href={sponsor.link} target={"_blank"} rel={"noopener noreferrer"}>
                          <img src={sponsor.src} style={{ height: sponsor.imageHeight }} className={sponsor.className} alt={sponsor.alt} />
                          </a>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div id="ghost" className="mb-5 mt-2 mt-4 px-0 px-5 mt-4 sm:px-16 sm:px-8 sm:px-20 mt-2 partner" />
    </Layout>
  );
};
