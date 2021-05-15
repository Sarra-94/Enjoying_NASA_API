import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import "./PictureDay.css";
const PictureDay = () => {
  const [Image, setImage] = useState({});
  const [Load, setLoad] = useState(false);
  useEffect(async () => {
    setLoad(true);
    try {
      let result = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=ExoITnpi55AdRHQaqIabxLaVT8672G2ZdCKX1T0h"
      );
      setImage(result.data);
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return !Load ? (
    <div
      className="blog-card spring-fever"
      style={{ background: `url(${Image.hdurl})` }}
    >
      <div className="title-content">
        <h3>
          <a href="#">NASA Daily Picture</a>
        </h3>{" "}
        <br />
        <h3>
          <a href="#">Title: {Image.title}</a>
        </h3>
        <div className="intro">
          {" "}
          <a href="#">Inspiration</a>{" "}
        </div>
      </div>
      <div className="card-info">
        <h3>Title: {Image.title}</h3>
        <br />
        {Image.explanation}
        <a href="#">
          Hope You enjoy Your Reading <span className="licon icon-heart" />
        </a>
      </div>
      <div className="utility-info">
        <ul className="utility-list">
          <li>
            <span className="licon icon-like" />
            <a href="#">2</a>
          </li>
          <li>
            <span className="licon icon-com" />
            <a href="#">12</a>
          </li>
          <li>
            <span className="licon icon-dat" />
            {Image.date}
          </li>
          <li>
            <span className="licon icon-tag" />
            <a href="#">Photos</a>
          </li>
        </ul>
      </div>
      <div className="gradient-overlay" />
      <div className="color-overlay" />
    </div>
  ) : (
    <Loading />
  );
};

export default PictureDay;
