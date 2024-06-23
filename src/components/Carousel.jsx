import { Box } from "@chakra-ui/react";
import React from "react";

const Carousel = () => {
  return (
    <Box w={"20rem"} h={"25rem"}>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
        data-interval="3000"
        style={{ width: "100%", height: "100%" }}
      >
        <div class="carousel-inner" style={{ width: "100%", height: "100%" }}>
          <div
            class="carousel-item active"
            style={{ width: "100%", height: "100%" }}
          >
            <img
              class="d-block w-100"
              src="/images/headphone.jpg"
              alt="First slide"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1.5)",
              }}
            />
          </div>
          <div class="carousel-item" style={{ width: "100%", height: "100%" }}>
            <img
              class="d-block w-100"
              src="/images/iphone.jpg"
              alt="Second slide"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div class="carousel-item" style={{ width: "100%", height: "100%" }}>
            <img
              class="d-block w-100"
              src="/images/ps4.jpg"
              alt="Third slide"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1.5)",
              }}
            />
          </div>
          <div class="carousel-item" style={{ width: "100%", height: "100%" }}>
            <img
              class="d-block w-100"
              src="/images/laptop.jpg"
              alt="Third slide"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                // transform: "scale(1.5)",
              }}
            />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Carousel;
