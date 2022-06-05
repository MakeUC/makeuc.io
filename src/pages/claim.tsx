import React, { FC } from 'react';
import Button from '../components/Button';
import FooterImage from '../components/FooterImage';
import SEO from '../components/SEO';

const ClaimPage: FC = () => (
  <>
    <SEO />
    <main>
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Welcome to MakeUC!
            </h1>
            <p className="text-xl lg:text-3xl mt-6 font-light">
              Click the button below to claim some virtual swag for your social media!
            </p>
            <p className="mt-8 md:mt-12">
              <a download="MakeUCVirtualSwag.zip" href="/assets.zip" title="MakeUCVirtualSwag">
                <Button size="lg" className="text-md font-bold">
                  CLAIM
                </Button>
              </a>
            </p>
          </div>
        </div>
      </section>
      <FooterImage />
    </main>
  </>
);
export default ClaimPage;
