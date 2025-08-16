// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';

import { Link } from 'react-router-dom';
import { bannerLists } from '../../utils';

const colors = ["bg-banner-color1", "bg-banner-color2", "bg-banner-color3"];

const HeroBanner = () => {
    return (
        <div className="py-1.5 rounded-md">
            <Swiper
                grabCursor={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation
                modules={[Pagination, EffectFade, Navigation, Autoplay]}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                slidesPerView={1}
            >
                {bannerLists.map((item, i) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className={`carousel-item rounded-md 
                            h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[65vh] 
                            max-h-[600px] lg:max-h-[350px] 
                            ${colors[i]}`}
                        >
                            <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full px-4 lg:px-8">
                            {/* Text Section */}
                            <div className="flex justify-center w-full lg:w-1/2 p-4 lg:p-8">
                                <div className="text-center lg:text-left">
                                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold">
                                    {item.title}
                                </h3>
                                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white font-bold mt-2">
                                    {item.subtitle}
                                </h1>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold mt-4 max-w-xl">
                                    {item.description}
                                </p>
                                <Link
                                    className="mt-6 inline-block bg-black text-white py-2 px-4 rounded-sm hover:bg-gray-800"
                                    to="/products"
                                >
                                    Shop
                                </Link>
                                </div>
                            </div>

                            {/* Image Section */}
                            <div className="flex justify-center w-full lg:w-1/2 p-4">
                                <img
                                src={item?.image}
                                alt={item.title}
                                className="w-[70%] sm:w-[60%] md:w-[50%] lg:w-[80%] object-contain"
                                />
                            </div>
                            </div>
                        </div>
                        </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroBanner;
