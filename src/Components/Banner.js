import React from 'react';
import { Carousel, Form, Button } from 'react-bootstrap';
// import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css"
import one from "../images/pg1.png"
import two from "../images/pg2.png"
import three from "../images/pg3.png"
import four from "../images/pg4.png"
import five from "../images/pg5.png";
import university from '../images/university-icon.png'
import user from "../images/users-icon.png" 
import publish from '../images/publishers-icon.png'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import bgimg from '../images/bgimg.png'







function MyCarousel() {
    return (

        <>

        <div className='bannerbackgroundimage'>
            <img src={bgimg} />
        </div>
    

        <Carousel className='maincarousel' autoPlay interval={3000} indicators={false}>
            <Carousel.Item>
                <div className="homeTop_banner homeTop_banner1">
                    <div className="col-lg-6 col-md-6 context">
                        <h1>Grand 30,000+ eBooks Collection</h1>
                        <p>You can learn from <b> UKG</b> to <b> UPSC</b></p>

                        <div className="search-container">
            <input type="text" placeholder="Search Books by Title & Author" className="search-input" />
            <button className="search-btn">
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
                        </div>


                    </div>

                    <div className="col-lg-6 col-md-6 contimage banner_img">
                        <img src={one} id="image1" alt="" />
                    </div>
                </div>
            </Carousel.Item>
            {/* Add other Carousel.Item elements for more slides */}

            <Carousel.Item>
                <div className="homeTop_banner homeTop_banner1">
                    <div className="col-lg-6 col-md-6 context">
                    <h1 class="homeBanner_head">Be prepared with all the Notes</h1>
                        <p class="homeBanner_subhead">Get all the notes for your exams curated by Faculties from top publishers</p>


                            <div className="search-container">
            <input type="text" placeholder="Search Books by Title & Author" className="search-input" />
            <button className="search-btn">
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 contimage banner_img">
                        <img src={two} id="image2" alt="" />
                    </div>
                </div>
            </Carousel.Item>


            <Carousel.Item>
                <div className="homeTop_banner homeTop_banner1">
                    <div className="col-lg-6 col-md-6 context">
                    <h1 class="homeBanner_head">Practice MCQs</h1>
                        <p class="homeBanner_subhead">Large collection of MCQs to ace exams</p>

                        <div className="search-container">
            <input type="text" placeholder="Search Books by Title & Author" className="search-input" />
            <button className="search-btn">
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 contimage banner_img">
                        <img src={three} id="image3" alt="" />
                    </div>
                </div>
            </Carousel.Item>


            <Carousel.Item>
                <div className="homeTop_banner homeTop_banner1">
                    <div className="col-lg-6 col-md-6 context">
                    <h1 class="homeBanner_head">Solved Previous Year Papers</h1>
                        <p class="homeBanner_subhead">Understand the pattern of exam from Solved Previous Year Papers</p>
                        <div className="search-container">
            <input type="text" placeholder="Search Books by Title & Author" className="search-input" />
            <button className="search-btn">
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 contimage banner_img">
                        <img src={four} id="image3" alt="" />
                    </div>
                </div>
            </Carousel.Item>



            <Carousel.Item>
                <div className="homeTop_banner homeTop_banner1">
                    <div className="col-lg-6 col-md-6 context">
                    <h1 class="homeBanner_head">Video Lectures for better understanding</h1>
                        <p class="homeBanner_subhead">Learn from more than 2,000+ videos for various exams</p>


                        <div className="search-container">
            <input type="text" placeholder="Search Books by Title & Author" className="search-input" />
            <button className="search-btn">
                <i className="fa fa-search" aria-hidden="true"></i>
            </button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 contimage banner_img">
                        <img src={five} id="image5" alt="" />
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>





    
<div className="col-lg-6 col-md-6 allicon">

    <div className="univericon">
        <img src={university} />
        <h5>200+</h5>
        <p>Universities</p>
    </div>

    <div className="Usersicon">
        <img src={user}  />
        <h5>7.5M</h5>
        <p>Users</p>
    </div>

    <div className="Publishicon">
        <img src={publish} />
        <h5>200+</h5>
        <p>Publishers</p>
    </div>


</div>








{/* <div class="kk_cards_widget">
       
                <div class="col-sm-2 card_spacing">
                    <a href="https://stage.kopykitab.com/Books" title="Books" class="kk_cards">
                        <div class="cards_bgcolor books_kk">
                            <img src={book} width="90" height="90" alt="kopykitab book" />
                        </div>Books
                    </a>
                </div>
                <div class="col-sm-2 card_spacing">
                    <a href="https://stage.kopykitab.com/Books/Faculty-Notes" title="Notes" class="kk_cards">
                        <div class="cards_bgcolor notes_kk">
                            <img src={note} width="90" height="90" alt="kopykitab notes" />
                        </div>Notes
                    </a>
                </div>
                <div class="col-sm-2 card_spacing">
                    <a href="https://stage.kopykitab.com/Books/Worksheet" title="MCQ" class="kk_cards">
                        <div class="cards_bgcolor mcq_kk">
                            <img src={mcq} width="90" height="90" alt="kopykitab mcq" />
                        </div>MCQ
                    </a>
                </div>
               
                <div class="col-sm-2 card_spacing">
                    <a href="https://stage.kopykitab.com/Books/Previous-Year-Papers" title="Solved paper" class="kk_cards">
                        <div class="cards_bgcolor solved_paper_kk">
                            <img src={solve} width="90" height="90" alt="kopykitab solvedpaper" />
                        </div>Solved paper
                    </a>
                </div>
                <div class="col-sm-2 card_spacing">
                    <a href="https://stage.kopykitab.com/Videos?sort=4" title="Videos" class="kk_cards">
                        <div class="cards_bgcolor videos_kk">
                            <img src={video} width="90" height="90" alt="kopykitab videos" />
                        </div>Videos
                    </a>
                </div>
            </div> */}
      




        </>
    );
}

export default MyCarousel;
