import React, { FC, ReactNode, useRef, useState } from 'react';
import '../css/Accordion.css';
import Chevron from './Chevron';

export type AccordionType = {
  title: string;
  content: ReactNode;
};

const Accordion: FC<AccordionType> = ({ title, content: _content }) => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState('accordion__icon');

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0px' : `${content.current.scrollHeight}px`);
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{title}</p>
        <Chevron className={`${setRotate}`} width="10px" fill="#777" />
      </button>
      <div ref={content} style={{ maxHeight: `${setHeight}` }} className="accordion__content">
        <div className="accordion__text">{_content}</div>
      </div>
    </div>
  );
};

export default Accordion;
