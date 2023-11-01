import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";

import img1 from "../../../assets/images/banner/1.jpg";
// import img2 from "../../../assets/images/banner/2.jpg";
// import img3 from "../../../assets/images/banner/3.jpg";
// import img4 from "../../../assets/images/banner/4.jpg";
// import img5 from "../../../assets/images/banner/5.jpg";
// import img6 from "../../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="w-full md:h-[600px] mt-7">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img className="rounded-xl" src={img1} alt="carousel image 1" />
            <div className="absolute flex left-5 right-5 bottom-0">
              <div className="text-white flex flex-col items-center">
                <h2 className="md:text-6xl font-bold">
                  Affordable Price For Car Servicing
                </h2>
                <p className="text-xs md:text-lg w-[520px]">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-3">
                  <button className="btn btn-primary">Discover More</button>
                  <button className="btn btn-outline btn-secondary">
                    Latest Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={img2} alt="carousel image 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="carousel image 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="carousel image 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="carousel image 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img6} alt="carousel image 6" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Banner;
