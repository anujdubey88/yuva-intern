import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from "./thumbnail1.jfif";
import img2 from "./thumbnail2.jpg";
import img3 from "./thumbnail3.jfif";
import img4 from "./thumbnail4.jfif";
import './slider.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 4;
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };
  
  return (
    <>
    <h1 className='ourcourses'>OUR COURSES</h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        <div class="main__container">
          <div class="cards__container swiper mySwiper">
            <div class="cards  swiper-wrapper">
              <SwiperSlide>
              <div class="card swiper-slide">
                <img class="card__img" src={img1} alt="img" />
                <div class="card__desc">
                  <div class="card__title">Web Development</div>
                  <div class="detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero, voluptate. Beatae repudiandae nemo qui est rem
                    pariatur nulla voluptatem voluptas?
                  </div>
                  <div class="buttons">
                    <button class="btn">Read More</button>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div class="card swiper-slide">
                <img class="card__img" src={img2} alt="img" />
                <div class="card__desc">
                  <div class="card__title">Machine Learning</div>
                  <div class="detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero, voluptate. Beatae repudiandae nemo qui est rem
                    pariatur nulla voluptatem voluptas?
                  </div>
                  <div class="buttons">
                    <button class="btn">Read More</button>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div class="card swiper-slide">
                <img class="card__img" src={img3} alt="img" />
                <div class="card__desc">
                  <div class="card__title">Data Science</div>
                  <div class="detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero, voluptate. Beatae repudiandae nemo qui est rem
                    pariatur nulla voluptatem voluptas?
                  </div>
                  <div class="buttons">
                    <button class="btn">Read More</button>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div class="card swiper-slide">
                <img class="card__img" src={img4} alt="img" />
                <div class="card__desc">
                  <div class="card__title">Android Development</div>
                  <div class="detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero, voluptate. Beatae repudiandae nemo qui est rem
                    pariatur nulla voluptatem voluptas?
                  </div>
                  <div class="buttons">
                    <button class="btn">Read More</button>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div class="card swiper-slide">
                <img class="card__img" src={img4} alt="img" />
                <div class="card__desc">
                  <div class="card__title">Android Development</div>
                  <div class="detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero, voluptate. Beatae repudiandae nemo qui est rem
                    pariatur nulla voluptatem voluptas?
                  </div>
                  <div class="buttons">
                    <button class="btn">Read More</button>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div class="card swiper-slide">
                <img class="card__img" src={img4} alt="img" />
                <div class="card__desc">
                  <div class="card__title">Android Development</div>
                  <div class="detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero, voluptate. Beatae repudiandae nemo qui est rem
                    pariatur nulla voluptatem voluptas?
                  </div>
                  <div class="buttons">
                    <button class="btn">Read More</button>
                  </div>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
                <div class="card swiper-slide">
                  <img class="card__img" src={img4} alt="img" />
                  <div class="card__desc">
                    <div class="card__title">Android Development</div>
                    <div class="detail">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vero, voluptate. Beatae repudiandae nemo qui est rem
                      pariatur nulla voluptatem voluptas?
                    </div>
                    <div class="buttons">
                      <button class="btn">Read More</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </div>
        </div>
      </Swiper>
    </>
  );
}
