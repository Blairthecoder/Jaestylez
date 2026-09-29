'use client';

import { FormEvent, ReactNode, useRef, useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

/**
 * Posts to the static Netlify form definitions in `public/__forms.html`.
 * Netlify picks up submissions by `form-name`, so every form used on the site
 * needs a matching entry there (scripts/export-netlify.mjs generates it).
 */
export function NetlifyForm({
  formName,
  className,
  style,
  children,
  successMessage = 'Thank you! Your message has been sent. We will be in touch soon.',
}: {
  formName: string;
  className?: string;
  style?: React.CSSProperties;
  children: ReactNode;
  successMessage?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const body = new URLSearchParams();
    body.set('form-name', formName);
    data.forEach((value, key) => {
      if (typeof value === 'string') body.set(key, value);
    });
    setStatus('sending');
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error(`Form submission failed (${response.status})`);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form ref={formRef} className={className} style={style} onSubmit={submit} name={formName}>
      <input type="hidden" name="form-name" value={formName} />
      <p className="qt-honeypot" aria-hidden="true">
        <label>
          Do not fill this out <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      {children}
      {status === 'sending' && (
        <div className="form-status" role="status">
          Sending…
        </div>
      )}
      {status === 'sent' && (
        <div className="form-status" role="status">
          {successMessage}
        </div>
      )}
      {status === 'error' && (
        <div className="form-status is-error" role="alert">
          Sorry, something went wrong sending that. Please try again or call us.
        </div>
      )}
    </form>
  );
}

/** Blog search box. There is no search index yet, so it just avoids a page reload. */
export function SearchForm({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <form className={className} onSubmit={(event) => event.preventDefault()} role="search">
      {children}
    </form>
  );
}

export function AddToCartForm({ className, children }: { className?: string; children: ReactNode }) {
  const [added, setAdded] = useState<number | null>(null);
  return (
    <form
      className={className}
      onSubmit={(event) => {
        event.preventDefault();
        const qty = Number(new FormData(event.currentTarget).get('quantity')) || 1;
        setAdded(qty);
      }}
    >
      <input type="number" name="quantity" defaultValue={1} min={1} max={20} required aria-label="Quantity" />
      {children}
      {added !== null && (
        <div className="form-status" role="status">
          Added {added} to your cart.
        </div>
      )}
    </form>
  );
}
