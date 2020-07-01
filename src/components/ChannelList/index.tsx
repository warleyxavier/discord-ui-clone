import React from 'react';

import ChannelButton from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de Jogos</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton selected name="Jogos" />
      <ChannelButton name="CS go" />
      <ChannelButton name="CS go" />
      <ChannelButton name="CS go" />
      <ChannelButton name="CS go" />
      <ChannelButton name="CS go" />

    </Container>
  )
}

export default ChannelList;