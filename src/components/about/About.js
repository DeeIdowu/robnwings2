import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Tray4 from "../../images/tray4.JPG";
import Fries2 from "../../images/fries2.JPG";
import Tray6 from "../../images/tray6.JPG";
import Tray7 from "../../images/tray7.JPG";

export default function About() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="photo"
          src={Tray4}
          alt="First slide"
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
            IG Honey
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="photo"
          src={Fries2}
          alt="Second slide"
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
            South Side Fries
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="photo"
          src={Tray6}
          alt="Third slide"
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
            BBQ Wings
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="photo"
          src={Tray7}
          alt="Fourth slide"
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
            South Side Wings
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
