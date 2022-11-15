import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Page2.scss"
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export default function Page2() {

  useEffect(() => {
    let temp = [];
    for (let i = 1; i < 101; i++) {
      temp.push(`https://picsum.photos/id/${i}/800/600`);
    }
    setImageList(temp);
  }, [])

  const [imageList, setImageList] = useState([])

  return <div className="page2-body">
    <div className="wrapper">
      <FaArrowCircleLeft
        className="carousel-button prev"
        onClick={_carsouselMoveLeft}
      />
      <FaArrowCircleRight
        className="carousel-button next"
        onClick={_carsouselMoveRight}
      />
      <div className="carousel">
        <div className="image-container" >
          {imageList?.map((url, i) => {
            return <img src={url} alt={i} width="300px" key={i}/>
          })}
        </div>
      </div>
    </div>
  </div>
}

function _carsouselMoveLeft() {
  const carsouselContainer =
    document.getElementsByClassName("carousel")[0];

    carsouselContainer.scrollLeft -= 315;
}
function _carsouselMoveRight() {
  const carsouselContainer =
    document.getElementsByClassName("carousel")[0];

    carsouselContainer.scrollLeft += 415;
}
