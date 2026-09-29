import { Slider } from '@/app/components/slider';
import { site } from '@/app/site-data';
import type { Review } from '@/app/content/reviews';

// Reviews have no photos, so each gets a gold circle with the reviewer's initial in the template's avatar slot.
function avatar(name: string) {
  const initial = name.trim().charAt(0).toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120"><rect width="120" height="120" fill="#d69838"/><text x="60" y="78" font-family="Oswald,Arial,sans-serif" font-size="56" fill="#fff" text-anchor="middle">${initial}</text></svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/** The template's testimonial section, filled with Google reviews. */
export function Testimonials({
  reviews,
  title = 'What our clients say',
  text = 'Reviews from Jae Stylez clients on Google.',
  className = 'pt-120 rpt-90 pb-125 rpb-95',
}: {
  reviews: Review[];
  title?: string;
  text?: string;
  className?: string;
}) {
  if (!reviews.length) return null;
  return (
    <section className={`testimonial-area rel z-1 ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-8">
            <div className="section-title text-center mb-50">
              <h2 className="title">{title}</h2>
              <p>{text}</p>
            </div>
          </div>
        </div>
        <Slider className="testimonial-wrap" slidesToShow={2} responsive={[[1199, 1]]} dots={reviews.length > 2}>
          {reviews.map((review) => (
            <div key={review.id} className="testimonial-item">
              <div className="image">
                <img src={avatar(review.name)} alt={review.name} />
              </div>
              <div className="description">
                <p>{review.text}</p>
                <h4>{review.name}</h4>{' '}
                <span className="designation">{review.service ?? 'Google review'}</span>{' '}
                <div className="ratting" role="img" aria-label="5 out of 5 stars">
                  <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i>{' '}
                  <i className="fas fa-star"></i> <i className="fas fa-star"></i>
                </div>
                {review.reply && (
                  <p className="review-reply-line">
                    <strong>Reply from Jae Stylez:</strong> {review.reply}
                  </p>
                )}
              </div>
            </div>
          ))}
        </Slider>
        <div className="text-center mt-30">
          <a className="theme-btn" href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">
            read more google reviews <i className="far fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

/** Kept as thin wrappers so pages can pick the review count that suits them. */
export const ReviewsBand = Testimonials;
export const ReviewCards = Testimonials;
