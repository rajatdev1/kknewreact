import React from 'react';
import ncert from '../images/ncert.jpg';
import cbse from '../images/cbseee.jpg'
import school from '../images/school.png'

const BlogComponent = () => {
  return (
    <>
    <div className='container'>
        <div className='row'>
        <h3 className='blogheading'>Cheak Our Blogs</h3>
    <div className=' blog-container'>

        
        <div className='blog-item mx-auto'>
            <a href='https://www.kopykitab.com/blog/aarohi-school-recruitment/'>
            <img className='mx-auto' src={ncert} height={200} width={270} />
            <p>Aarohi School Recruitment 2023 – Official Notification for 895 Vacancies Out</p></a>
        </div>

        <div className='blog-item'>
            <a href='https://www.kopykitab.com/blog/aarohi-school-recruitment/'>
            <img className='mx-auto' src={cbse} height={200} width={270} />
            <p>Aarohi School Recruitment 2023 – Official Notification for 895 Vacancies Out</p></a>
        </div>

        <div className='blog-item'>
            <a href='https://www.kopykitab.com/blog/aarohi-school-recruitment/'>
            <img className='mx-auto' src={school} height={200} width={270} />
            <p>Aarohi School Recruitment 2023 – Official Notification for 895 Vacancies Out</p></a>
        </div>
        
    </div>
    </div></div>
    
    </>
  )
}

export default BlogComponent