import { Link } from 'gatsby';
import React, { FC } from 'react';
import Button from '../components/Button';
import FooterImage from '../components/FooterImage';
import SEO from '../components/SEO';
import pacman from '../svg/pacman404.png';

const Error404Page: FC = () => (
  <>
    <SEO />
    <main>
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-404 font-bold leading-none">
              4
              <img className="m-auto moon-404" src={pacman} alt="Moon" />
              4!
            </h1>
            <p className="text-xl lg:text-3xl mt-6 font-light">
              It looks like the page you&amp;re searching for does not exist.
            </p>
            <p className="text-sm mt-6 font-light">
              Impossible. Perhaps the website is incomplete?
            </p>
            <p className="mt-8 md:mt-12">
              <Link to="/">
                <Button size="lg" className="text-md font-bold">
                  Home
                </Button>
              </Link>
            </p>
          </div>
        </div>
      </section>
      <FooterImage />
    </main>
  </>
);
export default Error404Page;
