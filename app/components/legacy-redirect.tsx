'use client';

import { useEffect, useState } from 'react';

/** Old /service-details?slug=... links now live at /services/<slug>/. */
export function LegacyServiceRedirect() {
  const [target, setTarget] = useState<string | null>(null);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('slug');
    const next = slug ? `/services/${encodeURIComponent(slug)}/` : '/services/';
    setTarget(next);
    window.location.replace(next);
  }, []);

  return (
    <section className="py-130 rpt-90 rpb-100">
      <div className="container text-center" role="status">
        <p>
          Taking you to the service page…{' '}
          {target && (
            <>
              If nothing happens, <a href={target}>continue here</a>.
            </>
          )}
        </p>
      </div>
    </section>
  );
}

/** Old /blog-details?slug=... links now live at /blog/<slug>/. */
export function LegacyBlogRedirect() {
  const [target, setTarget] = useState<string | null>(null);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('slug');
    const next = slug ? `/blog/${encodeURIComponent(slug)}/` : '/blog/';
    setTarget(next);
    window.location.replace(next);
  }, []);

  return (
    <section className="blog-details-area py-130 rpy-100">
      <div className="container text-center" role="status">
        <p>
          Taking you to the post…{' '}
          {target && (
            <>
              If nothing happens, <a href={target}>continue here</a>.
            </>
          )}
        </p>
      </div>
    </section>
  );
}
