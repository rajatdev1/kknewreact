import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import che from '../images/che.jpg';
import math from '../images/math.jpg';
import pasu from '../images/pasu.jpg';
import account from '../images/account.jpg';

function BookSlider() {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#f35230", width: "40px",   // Adjust the width
            height: "40px",  // Adjust the height
            borderRadius: "50%",  }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#f35230", width: "40px",   // Adjust the width
            height: "40px",  // Adjust the height
            borderRadius: "50%", marginLeft: "-26px" }}
            onClick={onClick}
          />
        );
      }
      
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div className='container-fluid'>
        <div className='row'>
    <div className=" popular-conatainer col-lg-8">
      <h3 className="widget_name popularBook_line" style={{marginBottom: '2em'}}>Popular with Our Students</h3>

      <Slider {...settings} className="popular_book_carousal">


        <div data-widget="Popularlist_home" className='Popularlist_home' >

           
          <div>
           <img src={account} className='mx-auto' />
           <p style={{textAlign: 'center'}}>Objective Accountancy</p>
          </div>

          <div className='value'>
            <p>₹35.00</p>
            <p> 30% Off</p>
          </div>
          <a href='https://www.kopykitab.com/Objective-Accountancy-by-Dr-S-K-Singh'  target="_blank">
          <button>View Book</button>
          </a>
        </div>

        



        <div data-widget="Popularlist_home" className='Popularlist_home' >

           
          <div>
           <img src={pasu} className='mx-auto' />
           <p style={{textAlign: 'center'}}>उत्तराखंड पशुपालन विभाग पशुधन प्रसार अधिकारी भर्ती परीक्षा</p>
          </div>

          <div className='value'>
            <p>₹87.50</p>
            <p> 30% Off</p>
          </div>
          <a href='https://www.kopykitab.com/Uttarakhand-Pashupalan-Vibhag-Pashudhan-Prasar-Adhikari--Bharti-Pariksha-by-Dr-Lal-and-Jain'  target="_blank">
          <button>View Book</button>
          </a>
        </div>





 <div data-widget="Popularlist_home" className='Popularlist_home' >

           
<div>
 <img src={che} className='mx-auto' />
 <p style={{textAlign: 'center'}}>Pharmaceutical Organic Chemistry - II</p>
</div>

<div className='value'>
  <p>₹63.00</p>
  <p> 30% Off</p>
</div>
<a href='https://www.kopykitab.com/Pharmaceutical-Organic-Chemistry-II-by-Dr-K-G-Bothara'  target="_blank">
<button>View Book</button>
</a>
</div>





<div data-widget="Popularlist_home" className='Popularlist_home' >

           
          <div>
           <img src={math} className='mx-auto' />
           <p style={{textAlign: 'center'}}>Holy Faith Humming Bird Mathematics Primer -A</p>
          </div>

          <div className='value'>
            <p>₹35.00</p>
            <p> 30% Off</p>
          </div>
          <a href='https://www.kopykitab.com/Hf-Humming-Bird-Mathematics-Primer-A-by-Govinda-Ahuja'  target="_blank">
          <button>View Book</button>
          </a>
        </div>


        
      </Slider>
    </div>
    </div>
    </div>
  );
}

export default BookSlider;
