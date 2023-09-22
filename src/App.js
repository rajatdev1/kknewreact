import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import NavBar from './Components/Navbar';
import HomeBanner from './Components/Banner'
import CardsWidget from './Components/Cards'
import KopykitabBooksWidget from './Components/Cotagories'
import PopularCategories from './Components/Tab'
// import Publishers from './Components/Publishers';
import MyCarousel from './Components/Publishers';
import PromotionWidget from '../src/Components/Profesionalcourse'
import BookSlider from '../src/Components/Popularstudent';
import BlogComponent from '../src/Components/Blogs'
// import FooterLinks from '../src/Components/Footertop'
import StudentVideoTestimonial from '../src/Components/Youtubeslide'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';


 



function App() {
  const images = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
];
  return (
    <div className="App">
      
  <Header />
  <NavBar/>
  <HomeBanner images={images}/>
  <CardsWidget/>
  {/* <PopularCategories/> */}
  <KopykitabBooksWidget/>
  {/* <Publishers/> */}

<MyCarousel/>
<PromotionWidget/>
<BookSlider/>
<StudentVideoTestimonial/>
<BlogComponent/>
{/* <FooterLinks /> */}
    </div>
  );
}

export default App;
