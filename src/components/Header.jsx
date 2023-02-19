import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="relative">
      <div className="container header--text z-10 tracking-wider">
        <h1 className="uppercase font-bold xl:text-6xl lg:text-6xl md:text-4xl text-4xl text-white">
          we deliver <br /> your software needs
        </h1>
        <button className="text-white bg-primary hover:bg-transparent border-2 border-primary px-10 py-2 mt-10 rounded-full transition-all duration-300">
          <Link to={"/contact"}>Contact Us</Link>
        </button>
      </div>
      <Splide
        options={{
          rewind: true,
          lazyLoad: true,
          gap: "5px",
          autoplay: true,
          pauseOnFocus: true,
          breakpoints: {
            678: {
              arrows: false,
            },
          },
        }}
      >
        <SplideSlide>
          <img src="./img/image1.jpg" alt="image1" />
        </SplideSlide>
        <SplideSlide>
          <img src="./img/image2.jpg" alt="image1" />
        </SplideSlide>
        <SplideSlide>
          <img src="./img/image3.jpg" alt="image1" />
        </SplideSlide>
        <SplideSlide>
          <img src="./img/image4.jpg" alt="image1" />
        </SplideSlide>
        <SplideSlide>
          <img src="./img/image5.jpg" alt="image1" />
        </SplideSlide>
      </Splide>
    </header>
  );
}

export default Header;
