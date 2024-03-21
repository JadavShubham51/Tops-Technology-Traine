import React from "react";
import Header from "../Common_component/Header";
import Footer from "../Common_component/Footer";
import { Carousel } from "react-bootstrap";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import ExampleCarouselImage from "./ExampleCarouselImage";

function Home() {
  return (
    <div>
      <Header />
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage
            height={"600px"}
            src={
              "https://th.bing.com/th/id/OIP.cWRhX4cOYk74_dr_p4zVtwHaE1?rs=1&pid=ImgDetMain"
            }
            text="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage
            height={"600px"}
            src={
              "https://th.bing.com/th?id=OIP.HwedDVvHmxtpKkbRtBOC8wHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            }
            text="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage
            height={"600px"}
            src={
              "https://th.bing.com/th?id=OIP.BD0zZTKrJdybnqsrsCwQIAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            }
            text="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer />
    </div>
  );
}

export default Home;
