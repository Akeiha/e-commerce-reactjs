import "./testimonials-card.scss";

export function TestimonialsCard({
  buyerPhoto,
  stars,
  buyerReview,
  buyerName,
}) {
  return (
    <div className="testimonialsCard">
      <div
        className="testimonialsCard__photo"
        style={{ backgroundImage: `url(${buyerPhoto})`, height: 104 }}
      ></div>
      <div className="testimonialsCard__stars" style={{ height: 24 }}>
        {stars}
      </div>
      <p className="testimonialsCard__review">“{buyerReview}”</p>
      <p className="testimonialsCard__name">{buyerName}</p>
    </div>
  );
}
