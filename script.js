document.addEventListener('DOMContentLoaded', () => {
  const playButton = document.querySelector('.play-button');
  let isPlaying = false;

  playButton.addEventListener('click', () => {
    isPlaying = !isPlaying;
    playButton.innerHTML = isPlaying ? '⏸' : '▶';
  });

  // Add hover effect to playlist items
  const playlistItems = document.querySelectorAll('.playlist-item');
  playlistItems.forEach(item => {
    item.addEventListener('click', () => {
      // Update now playing
      const title = item.querySelector('h3').textContent;
      const artist = item.querySelector('p').textContent;
      const image = item.querySelector('img').src;

      document.querySelector('.now-playing img').src = image;
      document.querySelector('.track-info h4').textContent = title;
      document.querySelector('.track-info p').textContent = artist;

      // Auto-play when selecting a new track
      isPlaying = true;
      playButton.innerHTML = '⏸';
    });
  });
});