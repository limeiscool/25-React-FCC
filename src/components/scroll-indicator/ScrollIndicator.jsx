import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./scroll-indicator.css";

function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (urlStr) => {
    try {
      setLoading(true);
      const res = await fetch(urlStr);
      const data = await res.json();
      if (data && data.products && data.products.length) {
        setData(data.products);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(e.message);
    }
  };

  const updateScrollPercentage = () => {
    const scrollAmount =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage(Math.round((scrollAmount / height) * 100));
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", () => updateScrollPercentage());
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  console.log(data, scrollPercentage);

  if (error) return <div>{error}</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <div className="main-container">
      <div className="top-container">
        <h1>Custom Scroll indicator</h1>
        <div className="scroll-progress-container">
          <div
            className="current-progress"
            style={{
              width: `${scrollPercentage}%`,
            }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length
          ? data.map((item, index) => {
              return <p key={index}>{item.title}</p>;
            })
          : null}
      </div>
    </div>
  );
}
ScrollIndicator.propTypes = {
  url: PropTypes.string,
};

export default ScrollIndicator;
