import React, { useState, useEffect } from 'react';
import Playlist from './components/Playlist';
import Song from './components/Song';
import UserProfile from './components/UserProfile';
import Search from './components/Search';

const App = () => {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  // Example: Fetch playlists from API
  useEffect(() => {
    // Replace with actual API fetch logic
    const fetchPlaylists = async () => {
      const response = await fetch('http://api.example.com/playlists');
      const data = await response.json();
      setPlaylists(data.playlists);
    };

    fetchPlaylists();
  }, []);

  const handlePlaylistSelect = (playlist) => {
    setSelectedPlaylist(playlist);
  };

  const handleSearch = (query) => {
    // Replace with actual search functionality
    // Example: Filter songs based on query
    const results = selectedPlaylist.songs.filter(song =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="App">
      <h1>Nirvana Music Streaming App</h1>

      <Search onSearch={handleSearch} />

      {selectedPlaylist ? (
        <div>
          <h2>{selectedPlaylist.name}</h2>
          <ul>
            {searchResults.map(song => (
              <li key={song.id}>
                <Song song={song} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h2>Playlists</h2>
          <ul>
            {playlists.map(playlist => (
              <li key={playlist.id}>
                <Playlist playlist={playlist} />
                <button onClick={() => handlePlaylistSelect(playlist)}>
                  View Playlist
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Example: Display user profile */}
      <UserProfile user={{ username: 'exampleuser', email: 'user@example.com', location: 'Earth' }} />
    </div>
  );
};

export default App;
