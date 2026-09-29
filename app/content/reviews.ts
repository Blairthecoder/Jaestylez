// Google Business Profile reviews for Jae Stylez, quoted as written by the reviewers.
// `topics` decide which pages show which review (relevance first), see reviewsFor().

export type Review = {
  id: string;
  name: string;
  text: string;
  /** Service the reviewer picked when leaving the review, when Google shows one. */
  service?: string;
  /** Owner reply from the Google listing. */
  reply?: string;
  topics: string[];
};

export const allReviews: Review[] = [
  {
    id: 'latoya-mcghee',
    name: 'LaToya McGhee',
    text: 'Always on time and professional! She gets me in and out. On top of that...she is growing my locs!! Book her! Check out her products!',
    service: 'Loc retwist',
    topics: ['retwist', 'maintenance', 'locs', 'shop', 'booking', 'monday', 'interlocking'],
  },
  {
    id: 'jessika-woodard',
    name: 'Jessika Woodard',
    text: "Jae was extremely professional, gentle, and efficient, making the entire process comfortable from start to finish. My hair feels light, looks flawless, and the results have held up wonderfully. If you need reliable, high-quality crochet loc maintenance, I couldn't recommend this place enough",
    service: 'Crochet loc maintenance',
    reply:
      'Thank you so much for taking the time to share your experience. I really appreciate your business and look forward to seeing you again!',
    topics: ['maintenance', 'instant', 'crochet', 'retwist', 'interlocking', 'locs', 'starter', 'micro'],
  },
  {
    id: 'sam-mays',
    name: 'Sam Mays',
    text: "The attention to detail was exactly what I was looking for. I might wear this style all the time now. I'm for sure coming back!",
    topics: ['styles', 'twists', 'goddess', 'braids', 'gallery', 'silk', 'starter', 'first-visit'],
  },
  {
    id: 'kevin-joseph',
    name: 'Kevin Joseph',
    text: 'Jae is one of the best in the city when it comes to natural hair and maintenance. Highly recommend!',
    reply: 'Thank you for your review and business!',
    topics: ['about', 'maintenance', 'twists', 'monday', 'contact', 'booking', 'natural'],
  },
  {
    id: 't-clark',
    name: 'T. Clark',
    text: "I absolutely love getting my love done here! JaeStyles keeps your locs healthy and have your hair looking good! Schedule your appointment you won't be disappointed.",
    reply: 'Thank you! I appreciate your business and looking forward to seeing you again soon!',
    topics: ['locs', 'healthy', 'booking', 'about', 'retwist', 'interlocking', 'shop'],
  },
  {
    id: 'maisie-lawrence',
    name: 'Maisie Lawrence',
    text: 'I absolutely love my hair! She was prompt and on time, very clean and professional, and so easy to talk to. She made the entire experience comfortable and enjoyable. I highly recommend her and will definitely be booking again!',
    service: 'Hairstyling',
    topics: ['first-visit', 'silk', 'goddess', 'twists', 'booking', 'contact', 'about', 'monday', 'styles'],
  },
  {
    id: 'max-waobikeze',
    name: 'Max Waobikeze',
    text: 'Jae always does it right. Been going to her for 4 years now. Five star service all around and extremely reliable. No matter what style you need she will get it done for you!',
    service: 'Hairstyling',
    reply:
      'Thank you so much for taking the time to share your experience. I really appreciate your business and look forward to seeing you again!',
    topics: ['about', 'monday', 'booking', 'twists', 'starter', 'micro', 'goddess', 'natural', 'contact'],
  },
];

/** The reviews most relevant to a page, best match first. Each topic match scores a point; ties keep list order. */
export function reviewsFor(topics: string[], count: number, exclude: string[] = []): Review[] {
  return allReviews
    .filter((r) => !exclude.includes(r.id))
    .map((r, i) => ({ r, i, score: r.topics.filter((t) => topics.includes(t)).length }))
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .slice(0, count)
    .map((x) => x.r);
}
