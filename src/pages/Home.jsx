import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import hero from '@/assets/media/img/hero.img.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper CSS-i daxil edin
import { Autoplay, Navigation } from 'swiper/modules';
import amazon from '@/assets/media/img/amazon.png';
import drib from '@/assets/media/img/drib.png';
import hub from '@/assets/media/img/hub.png';
import netflix from '@/assets/media/img/netflix.png';
import notion from '@/assets/media/img/notion.png';
import zoom from '@/assets/media/img/zoom.png';
import cta from '@/assets/media/img/cta.png';
import img from '@/assets/media/img/ilis.png';
import { services } from '@/MockData';
import { HiArrowUpRight } from "react-icons/hi2";


const Home = () => {
    return (
        <>
            <section className="hero my-5">
                <Container>
                    <Row className="mx-4">
                        <Col sm={12} md={6} lg={6}>
                            <div className="content">
                                <h2>Navigating the digital landscape for success</h2>
                                <p>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                                <button className="my-btn">Book a consultation</button>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div className="img-box">
                                <img src={hero} alt="hero" />
                            </div>
                        </Col>
                    </Row>

                    <Swiper
                        spaceBetween={10}
                        centeredSlides={true}
                        slidesPerView={4}  // Ekranda 4 slayd 
                        loop={true}
                        autoplay={{
                            delay: 2800,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="box my-5">
                                <img src={amazon} alt="Amazon" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box my-5">
                                <img src={drib} alt="Dribbble" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box my-5">
                                <img src={hub} alt="HubSpot" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box my-5">
                                <img src={netflix} alt="Netflix" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box my-5">
                                <img src={notion} alt="Notion" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="box my-5">
                                <img src={zoom} alt="Zoom" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Container>
            </section>
            {/* Hero-End */}


            <section className="services">
                <Container >
                    <Row className='my-5'>
                        <div className="title">
                            <h3>Services</h3>
                            <p>At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
                        </div>

                    </Row>
                    <Row className='my-5'>
                        {services.map((service) => (
                            <Col sm={12} md={4} lg={6} className='service-container mx-4 g-5'>
                                <div key={service.id} className="service-card">
                                    <h3>{service.title}</h3>
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <a href="#"> <span className='icon'><HiArrowUpRight />
                                </span>Learn More</a>
                            </Col>
                        ))}

                    </Row>
                </Container>

            </section>

            {/* services-end */}

            <section className="cta m-5">
                <Container>
                    <Row className='m-5'>
                        <Col sm={12} md={6} lg={6}>
                            <div className="content m-5">
                                <h4>Let’s make things happen</h4>
                                <p>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
                                <button className='my-btn'>Get your free proposal</button>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div className="img-box">
                                <img src={cta} alt="err" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="contact m-5">
                <div className="title">
                    <h3>Contact Us</h3>
                    <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
                </div>
               <Container>
                <Row>
                    <Col sm={12} md={12} lg={6}>
                    <div className='my-container'>
                    <form className="contact-form">
                        <div className="input-group">
                            <div className="input-wrapper">
                                <input type="text" placeholder="First Name" className="input-field" />
                            </div>
                            <div className="input-wrapper">
                                <input type="text" placeholder="Last Name" className="input-field" />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="input-wrapper">
                                <input type="email" placeholder="Email" className="input-field" />
                            </div>
                            <div className="input-wrapper">
                                <input type="tel" placeholder="Phone Number" className="input-field" />
                            </div>
                        </div>
                        <textarea placeholder="Your Message" className="textarea-field" />
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>

                    </Col>
                    <Col sm={12} md={12} lg={6}>
                    <img src={img} alt="err" />
                    </Col>
                </Row>
               </Container>
            </section>
        </>
    );
};

export default Home;
