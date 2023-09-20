// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import oswal from '../images/oswal.png';
import lp from '../images/lp.png'
import phi from '../images/phi.png'
import schand from '../images/schand.jpg'
import upkar from '../images/upkar.jpg'
import sp from '../images/sp.png'

// const Publishers = () => {

//     const responsive = {
//         superLargeDesktop: {
//           // the naming can be any, depends on you.
//           breakpoint: { max: 4000, min: 3000 },
//           items: 5
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 4
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };

//   return (
//     <div>


//         <h1 id='Popular-publisher'>Popular publisher</h1>

//         <Carousel className='col-sm-8 Popular-publisher'   responsive={responsive}>
//   <div className='image'>
//     <img  src={oswal} height={100} width={100} />
//   </div>


//   <div className='image'>
//   <img src={lp} height={100} width={100}/>
//   </div>


//   <div className='image'>
//   <img src={phi} height={100} width={100} />
//   </div>


//   <div className='image'>
//   <img src={schand} height={110} width={100}/>
//   </div>



//   <div className='image'>
//   <img src={upkar} height={100} width={200}/>
//   </div>



//   <div className='image'>
//   <img src={sp} height={100} width={100}/>
//   </div>



// </Carousel>;

//     </div>
//   )
// }

// export default Publishers






import React from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";

function CONTAINER_STYLE() {
  return {
    position: "relative",
    height: "40vh",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "middle"
  };
}

function CARD_STYLE() {
  return {
    height: "250px",
    width: "640px",
    
    paddingTop: "28px",
    textAlign: "center",
    background: "#52C0F5",
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "10px",
    boxSizing: "border-box"
  };
}

function MyCarousel() {
  return (

    <>

    <h2 className='top_publisher'>Top Publisher's</h2>
    <div style={CONTAINER_STYLE()}>


      <ReactCardCarousel  autoplay={true} autoplay_speed={5000}>

       

        <div className='Popular-publisher' style={CARD_STYLE()}>
          <img className='mx-auto' src={oswal} height={100} width={100} />
          <a href='https://www.kopykitab.com/Oswaal-Books'>Oswal Books</a>
          <a href='https://www.kopykitab.com/Oswaal-Books'>
          <button>View Book</button>
         </a>

        </div>


        <div className='Popular-publisher ' style={CARD_STYLE()}>
        <img className='mx-auto' src={lp} height={100} width={100}/>
        <a href='https://www.kopykitab.com/Laxmi-Publications'>Laxmi Books</a>
          <a href='https://www.kopykitab.com/Laxmi-Publications'>
          <button>View Book</button> </a>

        </div>


        <div className='Popular-publisher' style={CARD_STYLE()}>
        <img className='mx-auto' src={phi} height={100} width={100}/>
        <a href='https://www.kopykitab.com/PHI-Learning'>PHI Books</a>
          <a href='https://www.kopykitab.com/PHI-Learning'>
          <button>View Book</button> </a>
        </div>


        <div className='Popular-publisher' style={CARD_STYLE()}> 
        <img className='mx-auto' src={schand} height={100} width={100}/>
        <a href='https://www.kopykitab.com/Schand'>Schand Books</a>
          <a href='https://www.kopykitab.com/Schand'>
          <button>View Book</button> </a>
        </div>


        <div className='Popular-publisher' style={CARD_STYLE()}>
        <img className='mx-auto' src={upkar} height={100} width={100}/>
        <a href='https://www.kopykitab.com/Upkar-Prakashan'>Upkar Books</a>
          <a href='https://www.kopykitab.com/Upkar-Prakashan'>
          <button>View Book</button> </a>
        </div>


        <div className='Popular-publisher' style={CARD_STYLE()}>
        <img className='mx-auto' src={sp} height={100} width={100}/>
        <a href='https://www.kopykitab.com/Shuchita-Prakashan'>Shuchita Books</a>
          <a href='https://www.kopykitab.com/Shuchita-Prakashan'>
          <button>View Book</button> </a>
        </div>
      </ReactCardCarousel>
    </div>
    </>
  );
}


export default MyCarousel;