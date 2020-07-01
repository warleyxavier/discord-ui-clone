import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphonIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Warley Xavier</strong>
          <span>#1000</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphonIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
}

export default UserInfo;