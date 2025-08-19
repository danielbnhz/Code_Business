import React from "react";



export default function Carousel() {
  return (
    <section className="carousel">
      <div className="carousel__track">
        <div className="carousel__slide"><div className="placeholder">Slide 1</div></div>
        <div className="carousel__slide"><div className="placeholder">Slide 2</div></div>
        <div className="carousel__slide"><div className="placeholder">Slide 3</div></div>
      </div>
      <button className="carousel__btn carousel__btn--prev">‹</button>
      <button className="carousel__btn carousel__btn--next">›</button>
    </section>
  );
}
