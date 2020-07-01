import React from 'react';

import UserRow from '../UserRow';
import { Container, Role } from './styles';

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Homer Simpson" isBot />

      <Role>Offline - 12</Role>
      <UserRow nickname="Homer Simpson" />
      <UserRow nickname="Homer Simpson" />
      <UserRow nickname="Homer Simpson" />
      <UserRow nickname="Homer Simpson" />
      <UserRow nickname="Homer Simpson" isBot />
      <UserRow nickname="Homer Simpson" isBot />
      <UserRow nickname="Homer Simpson" />
      <UserRow nickname="Homer Simpson" />
      <UserRow nickname="Homer Simpson" />
      <UserRow nickname="Homer Simpson" />
      <UserRow nickname="Homer Simpson" isBot />
      <UserRow nickname="Homer Simpson" />
    </Container>
  );
}

export default UserList;