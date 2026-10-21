'use client';

import { useEffect, useMemo, useState } from 'react';
import { Slider } from '@/app/components/slider';
import { loadCategories, loadPosts } from '@/app/lib/wix-blog';
import { formatDate, type BlogCategory, type BlogPost } from '@/app/lib/blog-shared';
import { Meta } from '@/app/components/blog-render';

export const postHref = (post: BlogPost) => `/blog/${encodeURIComponent(post.slug)}/`;

type Blog = { status: 'loading' | 'ready' | 'error'; posts: BlogPost[]; categories: BlogCategory[] };

export type BlogSeed = { posts: BlogPost[]; categories: BlogCategory[] };

/** Posts and categories. With `seed` (fetched at build time) the first render already has them, so the HTML carries the post links. */
function useBlog(seed?: BlogSeed): Blog {
  const [state, setState] = useState<Blog>(
    seed ? { status: 'ready', ...seed } : { status: 'loading', posts: [], categories: [] },
  );
  useEffect(() => {
    if (seed) return;
    let cancelled = false;
    Promise.all([loadPosts(), loadCategories().catch(() => [])])
      .then(([posts, categories]) => !cancelled && setState({ status: 'ready', posts, categories }))
      .catch(() => !cancelled && setState({ status: 'error', posts: [], categories: [] }));
    return () => {
      cancelled = true;
    };
  }, [seed]);
  return state;
}

export function Sidebar({
  blog,
  onSearch,
  activeCategory,
  onCategory,
}: {
  blog: Blog;
  onSearch?: (q: string) => void;
  activeCategory?: string | null;
  onCategory?: (id: string | null) => void;
}) {
  return (
    <div className="blog-sidebar rmt-75">
      {onSearch && (
        <div className="widget widget-search">
          <form onSubmit={(event) => event.preventDefault()} role="search">
            <input
              type="search"
              placeholder="Search posts"
              aria-label="Search posts"
              onChange={(event) => onSearch(event.target.value)}
            />
            <button type="submit" aria-label="Search">
              <i className="far fa-search"></i>
            </button>
          </form>
        </div>
      )}
      {blog.categories.length > 0 && (
        <div className="widget widget-menu">
          <h5 className="widget-title">Categories</h5>
          <ul>
            <li>
              <a
                href={onCategory ? '#' : '/blog'}
                className={onCategory && !activeCategory ? 'active' : undefined}
                onClick={(event) => {
                  if (!onCategory) return;
                  event.preventDefault();
                  onCategory(null);
                }}
              >
                All Posts <i className="far fa-long-arrow-right"></i>
              </a>
            </li>
            {blog.categories.map((category) => (
              <li key={category.id}>
                <a
                  href={onCategory ? '#' : `/blog?category=${category.id}`}
                  className={activeCategory === category.id ? 'active' : undefined}
                  onClick={(event) => {
                    if (!onCategory) return;
                    event.preventDefault();
                    onCategory(category.id);
                  }}
                >
                  {category.label} <i className="far fa-long-arrow-right"></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="widget widget-news">
        <h5 className="widget-title">Recent Posts</h5>
        <ul>
          {blog.posts.slice(0, 4).map((post) => (
            <li key={post.id}>
              {post.thumb && (
                <div className="image">
                  <img src={post.thumb} alt="" />
                </div>
              )}
              <div className="content">
                <h6>
                  <a href={postHref(post)}>{post.title}</a>
                </h6>
                <span className="date">
                  <i className="far fa-calendar-alt"></i> {formatDate(post.date)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="widget widget-form">
        <h3 className="widget-title">Book a Visit</h3>
        <p className="text-white">See live availability and reserve your appointment online.</p>
        <a className="theme-btn btn-border w-100" href="/services#book">
          book online <i className="far fa-long-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

function Status({ blog, count }: { blog: Blog; count: number }) {
  if (blog.status === 'ready' && count > 0) return null;
  return (
    <p role="status" className="text-center">
      {blog.status === 'loading' && 'Loading posts…'}
      {blog.status === 'error' && 'Posts could not be loaded right now. Please try again shortly.'}
      {blog.status === 'ready' && count === 0 && 'No posts match that search.'}
    </p>
  );
}

export function BlogIndex({ seed }: { seed?: BlogSeed }) {
  const blog = useBlog(seed);
  const [category, setCategory] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => setCategory(new URLSearchParams(window.location.search).get('category')), []);

  const posts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blog.posts.filter(
      (p) =>
        (!category || p.categoryIds.includes(category)) &&
        (!q || `${p.title} ${p.excerpt}`.toLowerCase().includes(q)),
    );
  }, [blog.posts, category, query]);

  return (
    <section className="blog-standard-area py-130 rpy-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <Status blog={blog} count={posts.length} />
            {posts.map((post) => (
              <div className="blog-standard-item" key={post.id}>
                {post.image && (
                  <div className="image">
                    <a href={postHref(post)}>
                      <img src={post.image} alt={post.title} loading="lazy" />
                    </a>
                  </div>
                )}
                <div className="content">
                  <Meta post={post} />
                  <h3>
                    <a href={postHref(post)}>{post.title}</a>
                  </h3>
                  <p>{post.excerpt}</p>{' '}
                  <a href={postHref(post)} className="theme-btn">
                    Read more <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-4 col-md-7 col-sm-9">
            <Sidebar blog={blog} onSearch={setQuery} activeCategory={category} onCategory={setCategory} />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Latest posts in the template's news slider (its arrow buttons sit in the section header). */
export function LatestPosts({ seed }: { seed?: BlogSeed }) {
  const blog = useBlog(seed);
  const latest = blog.posts.slice(0, 9);
  if (latest.length === 0) return <Status blog={blog} count={0} />;
  return (
    <Slider className="news-slider-wrap" slidesToShow={3} responsive={[[1199, 2], [768, 1]]} arrows>
      {latest.map((post) => (
        <div className="news-item" key={post.id}>
          {post.image && (
            <div className="image">
              <a href={postHref(post)}>
                <img src={post.image} alt={post.title} loading="lazy" />
              </a>
            </div>
          )}
          <div className="content">
            <Meta post={post} />
            <h5>
              <a href={postHref(post)}>{post.title}</a>
            </h5>
            <p>{post.excerpt.length > 110 ? `${post.excerpt.slice(0, 107)}…` : post.excerpt}</p>{' '}
            <a href={postHref(post)} className="read-more">
              Read more <i className="far fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
}

/** Three newest posts in the template's second news layout (used on the Services page). */
export function LatestPostsGrid({ seed }: { seed?: BlogSeed }) {
  const blog = useBlog(seed);
  const latest = blog.posts.slice(0, 3);
  return (
    <div className="row justify-content-center">
      <div className="col-12">
        <Status blog={blog} count={latest.length} />
      </div>
      {latest.map((post) => (
        <div className="col-xl-4 col-md-6" key={post.id}>
          <div className="news-item style-two">
            {post.image && (
              <div className="image">
                <a href={postHref(post)}>
                  <img src={post.image} alt={post.title} loading="lazy" />
                </a>
              </div>
            )}
            <div className="content">
              <Meta post={post} />
              <h5>
                <a href={postHref(post)}>{post.title}</a>
              </h5>
              <a href={postHref(post)} className="read-more">
                Read more <i className="far fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
