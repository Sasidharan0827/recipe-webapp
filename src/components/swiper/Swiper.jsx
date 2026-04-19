import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";
import dish1 from "../../assets/img/dish-1.png";

export default function SwiperContent({ prevRef, nextRef }) {
  const schedule = [
    {
      day: "wed",
      date: 19,
      img: dish1,
      description: "Garden Harvest Bowl",
    },
    {
      day: "wed",
      date: 19,
      img: dish1,
      description: "Garden Harvest Bowl",
    },
    {
      day: "wed",
      date: 19,
      img: dish1,
      description: "Garden Harvest Bowl",
    },
    {
      day: "wed",
      date: 19,
      img: dish1,
      description: "Garden Harvest Bowl",
    },
    {
      day: "wed",
      date: 19,
      img: dish1,
      description: "Garden Harvest Bowl",
    },
    {
      day: "wed",
      date: 19,
      img: dish1,
      description: "Garden Harvest Bowl",
    },
    {
      day: "wed",
      date: 19,
      img: dish1,
      description: "Garden Harvest Bowl",
    },
    {
      day: "wed",
      date: 19,
      img: dish1,
      description: "Garden Harvest Bowl",
    },
    {
      day: "wed",
      date: 19,
      img: dish1,
      description: "Garden Harvest Bowl",
    },
    {
      day: "wed",
      date: 19,
      img: dish1,
      description: "Garden Harvest Bowl",
    },
  ];

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      // This will be handled by Swiper's internal logic
      // No need to manually set up event listeners here
    }
  }, [prevRef, nextRef]);

  return (
    <section className="content-bg rounded-xl py-5 px-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 5, spaceBetween: 50 },
        }}
        className="mySwiper"
        // Use the custom navigation elements
        onSwiper={(swiper) => {
          // Assign the custom navigation elements to Swiper's navigation
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }, 0);
        }}
      >
        {schedule.map((s, index) => (
          <SwiperSlide
            key={index}
            className="bg-mist-50 text-green px-5 py-5 rounded-xl"
          >
            <div className="flex flex-col gap-5">
              <p className="flex gap-5">
                <span>{s.day}</span>
                <span>{s.date}</span>
              </p>
              <div className="img-wrapper flex items-center justify-center">
                <img
                  src={s.img}
                  alt={s.description}
                  className="rounded-xl h-auto w-full"
                />
              </div>
              <p className="description fs-xs">{s.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
