import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navigate</Title>

    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Good Rocks</strong>
        <p>Relax while you program listening only the best of rock</p>
      </Playlist>
      <Playlist to="playlists/2">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Good Rocks</strong>
        <p>Relax while you program listening only the best of rock</p>
      </Playlist>
      <Playlist to="playlists/3">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Good Rocks</strong>
        <p>Relax while you program listening only the best of rock</p>
      </Playlist>
      <Playlist to="playlists/4">
        <img
          src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"
          alt="Playlist"
        />
        <strong>Good Rocks</strong>
        <p>Relax while you program listening only the best of rock</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
