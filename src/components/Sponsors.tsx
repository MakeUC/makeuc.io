import React, { FC, ReactNode } from 'react';

export type SponsorCardProps = {
  className: string;
  children: ReactNode;
};

const SponsorCard: FC<SponsorCardProps> = ({ className, children }) => (
  <div className={`${className}`}>{children}</div>
);

export default SponsorCard;
