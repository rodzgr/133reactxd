import React from 'react'
import img_banner_1 from '../images/img_banner_1.jpg'
import img_banner_2 from '../images/img_banner_2.jpg'
import img_banner_3 from '../images/img_banner_3.jpg'
import YouTubeVideo from './video'
import '../styles/Banner.css'

const imagenesBanner = [img_banner_1, img_banner_2, img_banner_3]

export const Banner = () => {
  return (
    <div className="contenedor banner">
      <div
        id="carouselPrincipal"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {imagenesBanner.map((imagen, index) => (
            <div
              key={imagen}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <img src={imagen} className="d-block w-100" alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselPrincipal"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselPrincipal"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      <YouTubeVideo />
    </div>
  )
}