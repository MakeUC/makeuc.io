import { Link } from 'gatsby';
import React, { FC, useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

export type HeaderProps = {
  page?: string;
};

const Header: FC<HeaderProps> = ({ page = 'index' }) => {
  const [state, setState] = useState('top');

  useEffect(() => {
    const scrollListener = () => {
      const scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        if (state !== 'scrolling') {
          setState('scrolling');
        }
      } else if (state !== 'top') {
        setState('top');
      }
    };

    document.addEventListener('scroll', scrollListener);
    return () => document.removeEventListener('scroll', scrollListener);
  });

  return (
    <header
      className={`sticky top-0 shadow navbar ${state}`}
      style={{
        zIndex: 10,
      }}
    >
      <div className="container flex flex-col sm:flex-row items-center max-w-full px-8 py-2">
        <Link to="/">
          <div className="flex items-center">
            <div className="w-14 md:ml-24 lg:ml-30">
              <LogoIcon />
            </div>
          </div>
        </Link>
        {page === 'index' && (
          <div className="flex justify-evenly md:justify-center flex-grow mt-3 sm:mt-0 text-xs sm:text-sm md:text-base">
            <AnchorLink className="px-4 xs:px-2 nav-link" href="#about">
              ABOUT
            </AnchorLink>
            {/* <AnchorLink href="#schedule"></AnchorLink> */}
            <AnchorLink className="px-4 xs:px-2 nav-link" href="#tracks">
              TRACKS
            </AnchorLink>
            <AnchorLink className="px-4 xs:px-2 nav-link" href="#hypeweek">
              HYPEWEEK
            </AnchorLink>
            <AnchorLink className="px-4 xs:px-2 nav-link" href="#faq">
              FAQ
            </AnchorLink>
            {/* <AnchorLink href="#prizes"></AnchorLink> */}
            <AnchorLink className="px-4 xs:px-2 nav-link" href="#sponsors">
              SPONSORS
            </AnchorLink>
          </div>
        )}
        <div className="hidden md:block">
          {page === 'index' && (
            // <Link to="/register">
            //   <Button className="text-sm font-bold">REGISTER NOW!</Button>
            // </Link>

            <Link to="https://makeuc-2022.devpost.com/">
              <Button className="text-sm font-bold">DEVPOST</Button>
            </Link>

            // <Link to="/register">
            //   <Button className="text-sm font-bold">REGISTER</Button>
            // </Link>
          )}{' '}
          {/*: (
            <Link to="/">
              <Button className="text-sm font-bold">HOME</Button>
          </Link>
          )} */}
        </div>
      </div>

      {/* <a
        id="mlh-trust-badge"
        className="flex"
        style={{
          display: 'block',
          maxWidth: '100px',
          minWidth: '40px',
          position: 'fixed',
          left: '15px',
          top: 0,
          width: '10%',
          zIndex: '10000',
        }}
        href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg"
          alt="Major League Hacking 2022 Hackathon Season"
          style={{ width: '100%' }}
        />
      </a> */}
    </header>
  );
};

export default Header;
