import React from 'react'
import decorationImg from './Decoration.svg';
import signatureImg from './Signature.svg';

function AboutUs() {
  return (
    <section id="aboutus" className="aboutus">
      <div className="aboutus__left">
        <div className="aboutus__about">
          O nas
        </div>
        <img src={decorationImg} alt="decoration" />
        <p className="aboutus__article">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek
          lentil turnip greens parsnip.
        </p>
        <div className="aboutus__signature">
          <img src={signatureImg} alt="signature" />
        </div>
      </div>
      <div className="aboutus__img">
      </div>
    </section>
  )
}

export default AboutUs;
