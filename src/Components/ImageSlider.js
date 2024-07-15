import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Slide1 from '../Assets/Images/slide1.png';
import Slide2 from '../Assets/Images/slide2.png';
import Slide3 from '../Assets/Images/slide3.png';
import Slide4 from '../Assets/Images/slide4.png';
import Slide5 from '../Assets/Images/slide5.png';
import Slide6 from '../Assets/Images/slide6.png';

import { Col, Container, Row } from 'react-bootstrap';
import VolumeUpIcon from '../Assets/Images/broadcast.svg';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import {siteName} from '../config/config'

const ImageSlider = () => {
    return (
        <>
            <div className='img-slider'>
                <Container>
                    <Row>
                        <Col>
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={40}
                                slidesPerView={3}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 1,
                                    },
                                    992: {
                                        slidesPerView: 2,
                                        spaceBetween: 40,
                                    },
                                    1200: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1400: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },

                                }}
                                loop={true}
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 1200,
                                    disableOnInteraction: false
                                }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <img src={Slide1} alt="" className='img-fluid'/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Slide2} alt="" className='img-fluid'/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Slide3} alt="" className='img-fluid'/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Slide4} alt="" className='img-fluid'/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Slide5} alt="" className='img-fluid'/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Slide6} alt="" className='img-fluid'/>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="anouncement">
                <Container>
                    <Row>
                        <Col lg={8} md={10}>
                            <div className="announce-txt">
                                <div className="announce-icon">
                                    <img src={VolumeUpIcon} alt=''/>
                                </div>
                                <p>{siteName} Will Support NTRN (Neutron) Network Upgrade</p>
                                <span>2024/07/09</span>
                            </div>
                        </Col>
                        <Col lg={4} md={2}>
                        <div className="more-link">
                            <Link to="/" className='more-link-1'>More <KeyboardArrowRightIcon/></Link>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default ImageSlider;
