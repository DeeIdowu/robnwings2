import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Catering from "../../images/catering.jpg";
import Array from "../../images/array.JPG";
import Sauce from "../../images/sauce.JPG";

export default function MenuCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="photo"
          src={Catering}
          alt="First slide"
          height={450}
          width={"100%"}
        />
        <Carousel.Caption>
          <h3
            style={{
              fontFamily: "Rickon Regular",
              fontSize: 50,
              color: "red"
            }}
          >
            Trays of Assorted Wings for Catering Purposes
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="photo"
          src={Array}
          alt="Second slide"
          height={450}
          width={"100%"}
        />

        <Carousel.Caption>
          <h3
            style={{
              fontFamily: "Rickon Regular",
              fontSize: 50,
              color: "black"
            }}
          >
            South-Side Fries and Wings
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="photo"
          src={Sauce}
          alt="Third slide"
          height={450}
          width={"100%"}
        />
        <Carousel.Caption>
          <h3
            style={{
              fontFamily: "Rickon Regular",
              fontSize: 50,
              color: "white"
            }}
          >
            Bottles of South-Side Sauce
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
