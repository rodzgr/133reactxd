import React from 'react'
import '../styles/video.css'
// Antes esta variable se declaraba pero nunca se usaba: el id del
// video estaba escrito directamente en el src. Ahora sí se usa.
const videoId = 'PgO3AZdmQH4'

const YouTubeVideo = () => {
  return (
    <div className="video-informativo">
      <h2>¿Qué es ser vegano?</h2>
      <div className="video-informativo__marco">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Video informativo: ¿Qué es ser vegano?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default YouTubeVideo