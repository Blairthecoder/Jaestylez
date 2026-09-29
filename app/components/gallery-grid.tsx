'use client';

import { useState } from 'react';
import { galleryIds, wixMedia } from '@/app/gallery-data';
import { galleryPhotos, photoUrl } from '@/app/content/photos';

type Filter = 'all' | 'locs' | 'twists' | 'braids' | 'curls' | 'kids';

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All Styles' },
  { key: 'locs', label: 'Locs' },
  { key: 'twists', label: 'Twists' },
  { key: 'braids', label: 'Braids' },
  { key: 'curls', label: 'Curls' },
  { key: 'kids', label: 'Kids' },
];

/** Photo gallery with style filters. Tagged photos live in the repo; the older Wix gallery only shows under "All". */
export function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>('all');

  const local = galleryPhotos
    .filter((p) => filter === 'all' || p.tags.includes(filter))
    .map((p) => ({ key: p.file, full: photoUrl(p), thumb: photoUrl(p), alt: p.alt }));
  const wix =
    filter === 'all'
      ? galleryIds.map((id, i) => ({
          key: id,
          full: wixMedia(id, 1400),
          thumb: wixMedia(id, 640, 800),
          alt: `Hair style by Jae Stylez, photo ${i + 1}`,
        }))
      : [];
  const items = [...local, ...wix];

  return (
    <>
      <div className="booking-chips mb-40" role="tablist" aria-label="Filter by style">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            role="tab"
            aria-selected={filter === f.key}
            className={filter === f.key ? 'active' : undefined}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="row">
        {items.map((item) => (
          <div key={item.key} className="col-lg-4 col-md-6 mb-30">
            <a className="gallery-tile" href={item.full} data-lightbox="image">
              <img src={item.thumb} alt={item.alt} loading="lazy" />
            </a>
          </div>
        ))}
      </div>
      {items.length === 0 && <p className="text-center">No photos in this category yet.</p>}
    </>
  );
}
