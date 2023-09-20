import React from 'react';
import book from '../images/book-icon.png'
import mcq from '../images/mcq.png'
import note from '../images/note2.png'
import solve from '../images/solved-papers.png'
import video from '../images/videos.png'


const Card = ({ link, title, className, imgSrc, altText }) => (
    <div className="col-sm-2 card_spacing">
        <a href={link} title={title} className="kk_cards">
            <div className={`cards_bgcolor ${className}`}>
                <img src={imgSrc} width="90" height="90" alt={altText} />
            </div>
            {title}
        </a>
    </div>
);

const CardsWidget = () => {
    return (
        <div className="kk_cards_widget">
            <div className="container">
                <div className="row">
                    <Card link="https://stage.kopykitab.com/Books" title="Books" className="books_kk" imgSrc={book} altText="" />
                    <Card link="https://stage.kopykitab.com/Books/Faculty-Notes" title="Notes" className="notes_kk" imgSrc={note} altText="" />
                    <Card link="https://stage.kopykitab.com/Books/Worksheet" title="MCQ" className="mcq_kk" imgSrc={mcq} altText="" />
                    <Card link="https://stage.kopykitab.com/Books/Previous-Year-Papers" title="Solved paper" className="solved_paper_kk" imgSrc={solve} altText="" />
                    <Card link="https://stage.kopykitab.com/Videos?sort=4" title="Videos" className="videos_kk" imgSrc={video} altText="" />
                </div>
            </div>
        </div>
    );
};

export default CardsWidget;
