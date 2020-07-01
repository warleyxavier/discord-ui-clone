import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />

      <Title>Jogos</Title>

      <Separator />

      <Description> Canal para discussão sobre jogos</Description>
    </Container>
  )
};

export default ChannelInfo;