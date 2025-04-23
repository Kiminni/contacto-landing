import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/swiper-custom.css'

import carousel1 from '../assets/images/carousel1.svg';
import carousel2 from '../assets/images/carousel2.svg';
import carousel3 from '../assets/images/carousel3.svg';
import carousel4 from '../assets/images/carousel4.svg';

const usage = [
  ['1. 스와이프', '관심이 가는 프로필에\nO를 눌러보세요!', carousel1],
  ['2. 매칭', '서로 O를 누른다면\n매칭이 되어 대화창이 열립니다.', carousel2],
  ['3. 대화', '매치된 아티스트와 대화해보세요.\n협업, 커뮤니티 챗 등 예상치못한\n재미있는 만남들이 기다립니다!', carousel3],
  ['4. 협업', '혼자라면 생각하지 못했을\n새로운 창작물을 만들어보세요!', carousel4],
];

export default function Usage() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        {usage.map(([title, description, image], idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center gap-[30px]">
              <p className="text-[25px] font-extrabold">{title}</p>
              <img src={image} alt={title} className="w-[250px]" />
              <p className="font-bold leading-tight pb-[60px]">
                {description.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}