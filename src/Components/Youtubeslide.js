import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

const StudentVideoTestimonial = () => {
    const videos = [
        "https://www.youtube.com/embed/WVNgWJbJdyU?vq=hd720",
        "https://www.youtube.com/embed/WVNgWJbJdyU?vq=hd720",
        "https://www.youtube.com/embed/WVNgWJbJdyU?vq=hd720",
        // ... add more URLs as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div className="container student_video_testimonial">
            <div className="row">
                <div className="col-lg-12">
                    <h3 className="widget_name testimonial_line">Students Videos Testimonial</h3>
                    <Slider {...settings}>
                        {videos.map((videoURL, index) => (
                            <div key={index} className="item-video">
                                <iframe 
                                    src={videoURL} 
                                    loading="lazy" 
                                    title={`YouTube video player ${index}`} 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default StudentVideoTestimonial;
