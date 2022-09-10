/* eslint-disable react/no-unused-prop-types */
import { Link } from 'gatsby';
import { FC, ReactNode, useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';
import LogoIcon from '../../svg/LogoIcon';

type SafeScrollLinkProps = {
  path: string;
  anchor: string;
  children: ReactNode;
};

export type HeaderProps = {
  page?: string;
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 85px;
  background-color: #212121;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 36px;
  z-index: 3;
  color: #f1f1f1;
  font-size: 2em;

  > *:nth-child(2) {
    display: flex;
    justify-content: center;
  }

  > *:nth-child(3) {
    display: flex;
    justify-content: end;
  }

  a {
    color: #f1f1f1 !important;

    :hover {
      color: #8b728e !important;
    }
  }

  @media screen and (max-width: 800px) {
    > *:nth-child(2) {
      display: none;
    }
  }
`;

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
    <Nav>
      <Link to="/">
        <LogoIcon />
      </Link>
      <div>
        {page === 'index' && (
          <>
            <AnchorLink className="px-4 xs:px-2 nav-link" href="#about">
              ABOUT
            </AnchorLink>
            <AnchorLink className="px-4 xs:px-2 nav-link" href="#tracks">
              TRACKS
            </AnchorLink>
            <AnchorLink className="px-4 xs:px-2 nav-link" href="#faq">
              FAQ
            </AnchorLink>
            <AnchorLink className="px-4 xs:px-2 nav-link" href="#sponsors">
              SPONSORS
            </AnchorLink>
          </>
        )}
      </div>
      <div>
        &nbsp;
        {page === 'index' && (
          <></>

          // <Link to="https://makeuc-2022.devpost.com/">
          //   <Button className="text-sm font-bold">DEVPOST</Button>
          // </Link>

          // <Link to="/register">
          //   <Button className="text-sm font-bold">REGISTER</Button>
          // </Link>
        )}
      </div>
      <a
        id="mlh-trust-badge"
        style={{
          display: 'block',
          maxWidth: '100px',
          minWidth: '60px',
          position: 'fixed',
          right: '50px',
          top: '0',
          width: '10%',
          zIndex: '10000',
        }}
        rel="noreferrer"
        href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=white"
        target="_blank"
      >
        <img
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-white.svg"
          alt="Major League Hacking 2023 Hackathon Season"
          style={{ width: '100%' }}
        />
      </a>
    </Nav>
  );
};

export default Header;
