import React from 'react';
import professional from '../images/profesion.png'

function PromotionWidget() {
  return (
    <div className="promotion_widget col-sm-6">
      <div className="promotional_img">
        <img 
          src={professional}  
          className="lazy_load" 
        
        />
      </div>


      <div className="promotional_detials">
        <p className="promotional_product_name">Professional Courses Books 2023</p>
        <p className="promotional_product">
          Get Chartered Accountant, Company Secretary and CMA Books PDF for June 2021 Exam with Essential Study Materials.
        </p>
        <a href="https://www.kopykitab.com/Professional-Courses" className="explore_promotional_product">
          <button>Explore Books → </button>
        </a>
      </div>


    </div>
  );
}

export default PromotionWidget;
