import React from 'react';

import Logo from '../../assets/Logo.svg';

import { Container } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentionsNumber?: number;
}

const ServerButton: React.FC<Props> = ({ selected, isHome, hasNotifications, mentionsNumber }) => {
  return (
    <Container className={selected ? 'active' : ''} isHome={isHome} hasNotifications={hasNotifications} mentionsNumber={mentionsNumber}>
      {isHome && <img src={Logo} alt="Discord" />}
    </Container>
  );
}

export default ServerButton;