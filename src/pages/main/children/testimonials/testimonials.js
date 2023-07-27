import { TestimonialsCard } from "src/components";
import { testimonialsMock } from "src/dict/mock";
import { isEmpty } from "src/dict/lodash";

import "./testimonials.scss";

export function Testimonials() {
  return (
    <div className="testimonials default-container">
      <h2>Testimonials</h2>
      <p className="testimonials__desc">Some quotes from our happy customers</p>
      <div className="testimonials__cards">
        {!isEmpty(testimonialsMock) &&
          testimonialsMock.map(
            ({ buyerPhoto, stars, buyerReview, buyerName }, i) => {
              return (
                <TestimonialsCard
                  key={i}
                  buyerPhoto={buyerPhoto}
                  stars={stars}
                  buyerReview={buyerReview}
                  buyerName={buyerName}
                />
              );
            }
          )}
      </div>
    </div>
  );
}
