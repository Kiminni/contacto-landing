import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/swiper-custom.css';
import { useTranslation } from 'react-i18next';

import carousel1 from '../assets/images/carousel1.svg';
import carousel2 from '../assets/images/carousel2.svg';
import carousel3 from '../assets/images/carousel3.svg';
import carousel4 from '../assets/images/carousel4.svg';

const usage = [
  ['usage_swipe_title', 'usage_swipe_text', carousel1],
  ['usage_match_title', 'usage_match_text', carousel2],
  ['usage_chat_title', 'usage_chat_text', carousel3],
  ['usage_collaboration_title', 'usage_collaboration_text', carousel4],
];

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function Usage() {
  const { t } = useTranslation();

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
        {usage.map(([titleKey, descriptionKey, image], idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center gap-[30px]">
              <p className="text-[25px] font-extrabold">{t(titleKey)}</p>
              <img src={image} alt={t(titleKey)} className="w-[250px]" />
              <p className="font-bold leading-tight pb-[60px]" dangerouslySetInnerHTML={{ __html: t(descriptionKey) }} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}