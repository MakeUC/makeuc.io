import { Link } from 'gatsby';
import { FC } from 'react';
import Button from '../components/Button';
import FooterImage from '../components/FooterImage';
import Footer from '../components/layout/Footer';
import { PageContainer } from '../components/PageStyles/StyledComponents';
import SEO from '../components/SEO';

const VerifiedPage: FC = () => (
  <PageContainer>
    <SEO />
    <main>
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
              Thank you for verifying your email!
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
    <Footer />
  </PageContainer>
);
export default VerifiedPage;
