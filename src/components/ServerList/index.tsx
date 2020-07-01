import React from 'react';

import ServerButton from '../ServerButton';

import {Container, Separator} from './styles';

const ServerList: React.FC = () => {
  return(
    <Container>
      <ServerButton isHome/>

      <Separator/>

      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications mentionsNumber={2}/>
      <ServerButton />
      <ServerButton mentionsNumber={20}/>
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton mentionsNumber={1}/>
      <ServerButton hasNotifications/>

    </Container>
  )
}

export default ServerList;