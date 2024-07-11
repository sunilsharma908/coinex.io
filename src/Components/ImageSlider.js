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
                                navigation
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false
                                }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                            >
                                <SwiperSlide>
                                    <img src={Slide1} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Slide2} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Slide3} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Slide4} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Slide5} alt="" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={Slide6} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="anouncement">
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className="announce-txt">
                                <div className="announce-icon">
                                    <img src={VolumeUpIcon} alt=''/>
                                </div>
                                <p>CoinEx Will Support NTRN (Neutron) Network Upgrade</p>
                                <span>2024/07/09</span>
                            </div>
                        </Col>
                        <Col lg={4}>
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
