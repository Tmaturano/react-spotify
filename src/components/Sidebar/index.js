/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import { Container, NewPlayList, Nav } from './styles';

import AddPlayListIcon from '../../assets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a href="/">Navigate</a>
        </li>
        <li>
          <a href="">Radio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>YOUR LIBRARY</span>
        </li>
        <li>
          <a href="">Your Daily Mix</a>
        </li>
        <li>
          <a href="">Recently Played</a>
        </li>
        <li>
          <a href="">Musics</a>
        </li>
        <li>
          <a href="">Albums</a>
        </li>
        <li>
          <a href="">Artists</a>
        </li>
        <li>
          <a href="">Stations</a>
        </li>
        <li>
          <a href="">Local files</a>
        </li>
        <li>
          <a href="">Videos</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="">Bests of Rock</a>
        </li>
      </Nav>
    </div>
    <NewPlayList>
      <img src={AddPlayListIcon} alt="Add playlist" />
      New playlist
    </NewPlayList>
  </Container>
);

export default Sidebar;
