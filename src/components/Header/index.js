/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>

    <User>
      <img src="https://avatars3.githubusercontent.com/u/13560048?v=4" alt="Avatar" />
      <span>Thiago Maturana</span>
    </User>
  </Container>
);

export default Header;
