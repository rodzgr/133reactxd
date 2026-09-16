import React from 'react';

const YouTubeVideo = () => {
  // Reemplaza 'VIDEO_ID' con la ID real de tu video de YouTube
  const videoId = 'VIDEO_ID';

  return (
    <div>
      <h2>VIDEO INFORMATIVO DE ¿QUE ES SER VEGANO?</h2>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/PgO3AZdmQH4`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
