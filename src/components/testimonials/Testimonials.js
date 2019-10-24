import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { italic } from "ansi-colors";

export default function Testimonials() {
  return (
    <div id="testimonials">
      <h1 style={{ fontSize: 45 }}>Testimonials</h1>
      <Carousel>
        <Carousel.Item>
          <p style={{ fontStyle: italic, paddingBottom: 25, paddingTop: 10 }}>
            "RobNWings made me find love for wings again. I grew tired of honey
            garlic wings as I used to order them too often. However, I tried the
            Southside Sauce and the Dirty South flavors and knew that I couldn't
            buy wings anywhere else again. I'll recommend RobNWings to all my
            friends anytime the topic comes up"
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p style={{ fontStyle: italic, paddingBottom: 25, paddingTop: 10 }}>
            "RobNWings brought me great tasting food and good hospitality like I
            haven’t felt in a long time. Aside from the amazing wing flavours
            (difficult to choose just one because they’re all so delicious) they
            offered attentive and friendly service from the employees as well as
            a very interactive and enjoyable atmosphere amongst customers too.
            10/10 would recommend. I’ll definitely be returning again....and
            again and again"
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p style={{ fontStyle: italic, paddingBottom: 25, paddingTop: 10 }}>
            "RobNWings is the best wings in the Peel region. Amazing quality
            wings and great service. Southside sauce, I put that on everything"
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p style={{ fontStyle: italic, paddingBottom: 25, paddingTop: 10 }}>
            "I only have two words... <b>SOUTH, SIDE!</b>"
          </p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
