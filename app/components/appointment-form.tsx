import { NetlifyForm } from '@/app/components/forms';
import { NiceSelect } from '@/app/components/nice-select';

const categoryOptions = [
  'Select Category',
  'Consultation',
  'Traditional Palm Roll Loc Maintenance',
  'Crochet Loc Maintenance',
  'Loc Extensions',
  'Instant Locs',
  'Micro Locs',
  'Artificial Locs',
  'Natural Hairstylez',
  'Men Braids Stylez',
  'Healthy Hair Maintenance',
  'Fulani Braid stylez',
  'Stitch Braids',
  'Take Downs',
].map((label) => ({ value: label, label }));

/** The template's "make appointment" form. It sends a request by email; booking online reserves a time instantly. */
export function AppointmentForm({
  className,
  backgroundImage,
}: {
  className?: string;
  backgroundImage?: string;
}) {
  return (
    <NetlifyForm
      formName="appointment"
      className={`bg-yellow bgs-cover ${className ?? ''}`.trim()}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
      successMessage="Thanks! Jae will confirm your request. To reserve a time right away, book online."
    >
      <div className="row justify-content-center mb-35 text-white text-center">
        <div className="col-lg-10">
          <div className="section-title text-white">
            <h2 className="title">Request an appointment</h2>
          </div>
          <p>
            Send a request and Jae will reply, or{' '}
            <a href="/book">book online</a> to reserve a time with a deposit.
          </p>
        </div>
      </div>
      <div className="row small-gap">
        <div className="col-lg-6">
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Full Name"
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>
        <div className="col-lg-6 mb-20">
          <div className="form-group">
            <NiceSelect
              name="select-category"
              id="select-category"
              options={categoryOptions}
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label htmlFor="date-time">
              <i className="far fa-calendar-alt"></i>
            </label>{' '}
            <input
              type="datetime-local"
              id="date-time"
              name="date-time"
              className="form-control"
              placeholder="Preferred Date & Time"
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              rows={4}
              placeholder="Write Message"
              required
            ></textarea>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group mb-0">
            <button type="submit" className="theme-btn btn-border w-100">
              send request <i className="far fa-long-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </NetlifyForm>
  );
}
