import { Link } from 'gatsby';
import React, { FC } from 'react';
import Button from '../components/Button';
import FooterImage from '../components/FooterImage';
import SEO from '../components/SEO';

const AlreadyVerifiedPage: FC = () => (
  <>
    <SEO />
    <main>
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              You have already verified your email!
            </h1>
            <p className="text-xl lg:text-3xl mt-6 font-light">
              We are looking forward to meeting you virtually on October 22-23, 2022
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
export default AlreadyVerifiedPage;
