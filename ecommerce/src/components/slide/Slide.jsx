import TenisNike from "../../assets/images/Tenis.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./Slide.scss";

const Slide = () => {
  const bannerContent = [
    {
      title: "Queima de stoque Nike 🔥",
      subtitle: "Melhores ofertas personalizadas",
      btnTitle: "Ver ofertas",
      image: TenisNike,
      description:
        "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    },
    {
      title: "Queima de stoque Nike 🔥",
      subtitle: "Melhores ofertas personalizadas",
      btnTitle: "Ver ofertas",
      image: TenisNike,
      description:
        "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    },
    {
      title: "Queima de stoque Nike 🔥",
      subtitle: "Melhores ofertas personalizadas",
      btnTitle: "Ver ofertas",
      image: TenisNike,
      description:
        "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    },
    {
      title: "Queima de stoque Nike 🔥",
      subtitle: "Melhores ofertas personalizadas",
      btnTitle: "Ver ofertas",
      image: TenisNike,
      description:
        "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {bannerContent.map((item, index) => (
          <SwiperSlide key={index} className="bg-black">
            <div className="banner-content">
              <div className="banner-info flex flex-col gap-8 w-[200px]">
                <h5 className="font-bold text-yellow">{item.subtitle}</h5>
                <p className="font-extrabold texto">{item.title}</p>
                <p>{item.description}</p>
                <button className="btn-banner w-[30px]">{item.btnTitle}</button>
              </div>
              <div className="banner-img">
                <img src={item.image} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slide;
