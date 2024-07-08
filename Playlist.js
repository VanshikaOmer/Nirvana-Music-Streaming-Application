import React from 'react';

const Playlist = ({ playlist }) => {
  return (
    <div className="playlist">
      <h2>{playlist.name}</h2>
      <ul>
        {playlist.songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
