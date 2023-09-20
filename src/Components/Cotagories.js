import React from 'react';
import girlwrn from "../images/girlwrn.png"

function KopykitabBooksWidget() {
  return (
    <div className="kk_books_widget">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <picture className="girl_image">
              <img src={girlwrn} alt="Live Tutor" width="578" height="482" />
            </picture>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="eyebrow_title_book">
              <span className="kk_ebooks"></span>Kopykitab books
            </div>
            <div className="kk_tutor_text kk_booksLine">
              Lets's crack the exams with kopykitab
            </div>
            <div className="tutor_button">
              <a href="https://stage.kopykitab.com/Study-Packages">Learn with Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KopykitabBooksWidget;
