import PropTypes from "prop-types";
import { useEffect, useState, useCallback } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./image-slider.css";

function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchImages = useCallback(
    async (urlString) => {
      try {
        const response = await fetch(
          `${urlString}?page=${page}&limit=${limit}`
        );
        const data = await response.json();

        if (data) {
          setImages(data);
          setIsLoading(false);
        }
      } catch (e) {
        setErrorMessage(e.message);
        setIsLoading(false);
      }
    },
    [limit, page]
  );
  const goBack = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const next = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  useEffect(() => {
    if (url) fetchImages(url);
    console.log("reloaded");
  }, [url, fetchImages]);

  if (isLoading) return <div className="container">Loading ...</div>;
  if (errorMessage) return <div className="container">{errorMessage}</div>;

  return (
    <div className="big-wrap">
      <div className="container">
        <BsArrowLeftCircleFill onClick={goBack} className="arrow arrow-left" />
        {images && images.length ? (
          images.map((image, i) => (
            <img
              key={image.id}
              src={image.download_url}
              alt={image.download_url}
              className={
                currentSlide === i ? "current-slide" : "current-slide hide-img"
              }
            />
          ))
        ) : (
          <div className="container">No images found</div>
        )}
        <BsArrowRightCircleFill onClick={next} className="arrow arrow-right" />
        <span className="circle-indicator">
          {images && images.length
            ? images.map((_, index) => {
                return (
                  <button
                    key={index}
                    className={
                      currentSlide === index
                        ? "current-indicator"
                        : "current-indicator hide-indicator"
                    }
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                );
              })
            : null}
        </span>
      </div>
    </div>
  );
}
ImageSlider.propTypes = {
  url: PropTypes.string,
  limit: PropTypes.string,
  page: PropTypes.string,
};
export default ImageSlider;
