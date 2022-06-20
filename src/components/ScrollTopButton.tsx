import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import ScrollTop from './ScrollTop';

export type ScrollTopButtonProps = {
  distance?: number;
};

const sharedStyles = {
  fontSize: '3em',
  backgroundColor: '#f1f1f1',
  backgroundSize: '10px',
  backgroundClip: 'content-box',
  borderRadius: '50%',
};

const ScrollTopButton: FC<ScrollTopButtonProps> = ({ distance = 700 }) => (
  <ScrollTop
    text=""
    distance={distance}
    breakpoint={50000}
    speed={1000}
    bottomOffset={200}
    lit={<FontAwesomeIcon icon={faCircleArrowUp} style={{ color: '#8b728e', ...sharedStyles }} />}
    hovering={
      <FontAwesomeIcon
        icon={faCircleArrowUp}
        style={{
          color: '#126f52',
          ...sharedStyles,
        }}
      />
    }
    style={{
      border: 'none',
      padding: 0,
      backgroundColor: 'transparent',
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: '9999',
    }}
  />
);

export default ScrollTopButton;
