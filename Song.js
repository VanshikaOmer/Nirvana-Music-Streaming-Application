import React from 'react';

const Song = ({ song }) => {
  return (
    <div className="song">
      <h3>{song.title}</h3>
      <p>{song.artist}</p>
      <audio controls>
        <source src={song.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Song;
