import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ReviewItem from '../Components/ReviewItem';

function ReviewsSetion() {
    return (
        <ReviewsStyled>
            <Title title={'Reviews'} span={'Reviews'} />
            <InnerLayout>
                <div className="reviews">
                    <ReviewItem 
                        text={'Emmanuel is AMAZING, A very good professional, I hired him to build my website, and he did an EXCELLENT JOB, he also did an EXCELLENT JOB in SEO on my website, and I could get many new customers for my business Nicky Party Rental. Once again, THANK YOU EMMANUEL.'} 
                    />
                    <ReviewItem 
                        text={'A Website mirrors the company identity, That gives it a face and a soul. Onanuga Emmanuel did that for our website. He instantly knew what we wanted to accomplish, it was fast, responsive and relatively affordable. The final product was very functional, tasteful and aesthetically nice to look at. We already recommended him to other customers and I think that would be the best testimonial and the ultimate recognition.'} 
                    />
                    
                </div>
            </InnerLayout>
        </ReviewsStyled>
    )
}

const ReviewsStyled = styled.section`
    .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ReviewsSetion;
