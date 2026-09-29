import { wixMedia } from '@/app/gallery-data';
import { site } from '@/app/site-data';
import type { Review } from '@/app/content/reviews';

function Stars() {
  return (
    <div className="stars" role="img" aria-label="5 out of 5 stars">
      ★★★★★
    </div>
  );
}

function Card({ review, dark }: { review: Review; dark?: boolean }) {
  return (
    <figure className={`review-card${dark ? '' : ' review-card-light'}`}>
      <img
        className="review-google"
        src={wixMedia('5532d7_9f5a6973fc00425c8ea68b81ae50aba4~mv2.png', 160, 60)}
        alt="Google review"
        loading="lazy"
      />
      <Stars />
      <blockquote>{review.text}</blockquote>
      <figcaption>
        {review.name}
        {review.service && <span className="review-service">{review.service}</span>}
      </figcaption>
      {review.reply && (
        <div className="review-reply">
          <strong>Reply from Jae Stylez:</strong> {review.reply}
        </div>
      )}
    </figure>
  );
}

/** Dark full-width band of Google reviews (home page). */
export function ReviewsBand({ reviews, title = 'What Clients Say on Google' }: { reviews: Review[]; title?: string }) {
  return (
    <section className="reviews-band bg-black text-white py-80 rpy-60">
      <div className="container">
        <div className="section-title text-white text-center mb-45">
          <h2 className="title">{title}</h2>
        </div>
        <div className="row">
          {reviews.map((review) => (
            <div key={review.id} className="col-lg-4 col-md-6 mb-30">
              <Card review={review} dark />
            </div>
          ))}
        </div>
        <ReadMore />
      </div>
    </section>
  );
}

/** Light block of one to three reviews chosen for the page they sit on. */
export function ReviewCards({ reviews, title = 'What Clients Say' }: { reviews: Review[]; title?: string }) {
  if (!reviews.length) return null;
  const col = reviews.length === 1 ? 'col-lg-8' : reviews.length === 2 ? 'col-lg-6' : 'col-lg-4 col-md-6';
  return (
    <section className="reviews-inline py-80 rpy-60">
      <div className="container">
        <div className="section-title text-center mb-40">
          <span className="landing-eyebrow">GOOGLE REVIEWS</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="row justify-content-center">
          {reviews.map((review) => (
            <div key={review.id} className={`${col} mb-30`}>
              <Card review={review} />
            </div>
          ))}
        </div>
        <ReadMore light />
      </div>
    </section>
  );
}

function ReadMore({ light }: { light?: boolean }) {
  return (
    <div className="text-center">
      <a
        className={`theme-btn${light ? '' : ' style-four'}`}
        href={site.googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        read more google reviews <i className="far fa-long-arrow-right"></i>
      </a>
    </div>
  );
}
