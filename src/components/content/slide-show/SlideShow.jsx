import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// import backgroundImage from '../../../assets/background-slide-show.jpg';
import './SlideShow.scss';

const SlideShow = ({ images, auto, showArrows }) => {
  // const images = [1, 2, 3, 4, 5];
  /* const [state, setState] = useState({
    slideShow: images[0],
    slideIndex: 0
  }); */
  const [currentIndexState, setCurrentIndexState] = useState(0);

  // const { slideShow, slideIndex } = state;
  // const currentSlideIndex = 0;

  const autoMoveSlide = () => {
    console.log(' autoMoveSlide >>> ' + currentIndexState);
    setCurrentIndexState((prev) => { console.log(' AUTO: ' + prev); return ((prev === images.length - 1) ? setCurrentIndexState(1) : setCurrentIndexState(prev + 1)); });
  };

  useEffect(() => {
    if (auto) {
      const timeInterval = setInterval(() => {
        autoMoveSlide();
      }, 5000);
      return () => {
        clearInterval(timeInterval);
      };
    }
    // eslint-disable-next-line
  }, []);

  const movieSlideWithArrows = (type) => {
    const imagesLength = images.length - 1;
    console.log(' currentIndexState ^^^ ' + currentIndexState + ' imagesLength  ' + imagesLength);
    if (type === 'left') {
      if (currentIndexState === 0) {
        setCurrentIndexState((prev) => { console.log(' currentIndexState imagesLength ^^^:  ' + imagesLength); return imagesLength; });
      } else {
        setCurrentIndexState((prev) => prev - 1);
      }
    } else if (type === 'right') {
      if (currentIndexState === imagesLength) {
        setCurrentIndexState(0);
      } else {
        setCurrentIndexState(currentIndexState + 1);
      }
    }
  };

  const RenderArrows = () => {
    return (
      <div className="slider-arrows">
        <div className="slider-arrow slider-arrow--left" onClick={() => movieSlideWithArrows('left')} />
        <div className="slider-arrow slider-arrow--right" onClick={() => movieSlideWithArrows('right')} />
      </div>
    );
  };

  const Indicators = ({ currentSlide }) => {
    const listIndicators = images.map((slide, index) => {
      const buttonClasses = currentSlide === index ? 'slider-navButton slider-navButton--active' : 'slider-navButton';
      return <button key={index} className={buttonClasses} />;
    });
    return <div className="slider-nav">{listIndicators}</div>;
  };

  console.log(' currentIndexState >>> ' + currentIndexState);

  return (
    <>
      <div className="slider-container">
        <div className="slider-slides">
          {images && images.length && <div className="slider-image" style={{ backgroundImage: `url(${images[currentIndexState].url})` }}></div>}
        </div>
        <Indicators currentSlide={currentIndexState} />
        { showArrows && <RenderArrows /> }
      </div>
    </>
  );
};

SlideShow.propTypes = {
  images: PropTypes.array.isRequired,
  auto: PropTypes.bool.isRequired,
  showArrows: PropTypes.bool.isRequired,
  currentSlide: PropTypes.number
};

export default SlideShow;
