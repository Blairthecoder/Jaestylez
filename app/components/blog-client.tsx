'use client';

import { useEffect, useMemo, useState } from 'react';
import { Slider } from '@/app/components/slider';
import {
  formatDate,
  loadCategories,
  loadPostBySlug,
  loadPosts,
  type BlogCategory,
  type BlogPost,
  type RichNode,
} from '@/app/lib/wix-blog';
import { ReviewCards } from '@/app/components/reviews-ui';
import { reviewsFor } from '@/app/content/reviews';
import { site } from '@/app/site-data';

const RELATED: {
  match: RegExp;
  links: { label: string; href: string }[];
  topics: string[];
}[] = [
  {
    match: /palm-roll|interlock/,
    links: [
      {
        label: 'Loc Retwist and Palm Roll',
        href: '/loc-retwist-and-palm-roll',
      },
      {
        label: 'Interlocking Loc Maintenance',
        href: '/interlocking-loc-maintenance',
      },
    ],
    topics: ['retwist', 'interlocking', 'maintenance'],
  },
  {
    match: /retwist/,
    links: [
      {
        label: 'Loc Retwist and Palm Roll',
        href: '/loc-retwist-and-palm-roll',
      },
      {
        label: 'Interlocking Loc Maintenance',
        href: '/interlocking-loc-maintenance',
      },
    ],
    topics: ['retwist', 'maintenance'],
  },
  {
    match: /starter-loc/,
    links: [
      { label: 'Starter Locs', href: '/starter-locs' },
      { label: 'Instant Locs', href: '/instant-locs' },
    ],
    topics: ['starter', 'locs', 'first-visit'],
  },
  {
    match: /silk-press/,
    links: [
      { label: 'Silk Press', href: '/silk-press' },
      {
        label: 'Lavender Rose Hydration Mist',
        href: '/product-details?slug=lavender-rose-water',
      },
    ],
    topics: ['silk', 'styles'],
  },
  {
    match: /protective|natural-hairstyles/,
    links: [
      { label: 'Two-Strand Twists', href: '/two-strand-twists' },
      { label: 'Goddess Locs', href: '/goddess-locs' },
      { label: 'Hair Styles Gallery', href: '/hair-styles' },
    ],
    topics: ['twists', 'goddess', 'styles'],
  },
  {
    match: /humidity/,
    links: [
      { label: 'Silk Press', href: '/silk-press' },
      { label: 'The Lox Box', href: '/shop?category=The%20Lox%20Box' },
    ],
    topics: ['silk', 'shop', 'healthy'],
  },
  {
    match: /./,
    links: [
      { label: 'Book Online', href: '/book' },
      { label: 'About Jae', href: '/about' },
    ],
    topics: ['about', 'natural', 'first-visit', 'booking'],
  },
];

function relatedFor(post: BlogPost) {
  const key = `${post.slug} ${post.title}`.toLowerCase();
  return RELATED.find((r) => r.match.test(key)) ?? RELATED[RELATED.length - 1];
}

const postHref = (post: BlogPost) =>
  `/blog-details?slug=${encodeURIComponent(post.slug)}`;

type Blog = {
  status: 'loading' | 'ready' | 'error';
  posts: BlogPost[];
  categories: BlogCategory[];
};

function useBlog(): Blog {
  const [state, setState] = useState<Blog>({
    status: 'loading',
    posts: [],
    categories: [],
  });
  useEffect(() => {
    let cancelled = false;
    Promise.all([loadPosts(), loadCategories().catch(() => [])])
      .then(
        ([posts, categories]) =>
          !cancelled && setState({ status: 'ready', posts, categories }),
      )
      .catch(
        () =>
          !cancelled &&
          setState({ status: 'error', posts: [], categories: [] }),
      );
    return () => {
      cancelled = true;
    };
  }, []);
  return state;
}

function Meta({ post }: { post: BlogPost }) {
  return (
    <ul className="blog-meta">
      <li>
        <i className="far fa-user-circle"></i> {site.owner}
      </li>
      {post.date && (
        <li>
          <i className="far fa-calendar-alt"></i> {formatDate(post.date)}
        </li>
      )}
      {post.minutes > 0 && (
        <li>
          <i className="far fa-clock"></i> {post.minutes} min read
        </li>
      )}
    </ul>
  );
}

function Sidebar({
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
                  className={
                    activeCategory === category.id ? 'active' : undefined
                  }
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
                  <i className="far fa-calendar-alt"></i>{' '}
                  {formatDate(post.date)}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="widget widget-form">
        <h3 className="widget-title">Book a Visit</h3>
        <p className="text-white">
          See live availability and reserve your appointment online.
        </p>
        <a className="theme-btn btn-border w-100" href="/book">
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
      {blog.status === 'error' &&
        'Posts could not be loaded right now. Please try again shortly.'}
      {blog.status === 'ready' && count === 0 && 'No posts match that search.'}
    </p>
  );
}

export function BlogIndex() {
  const blog = useBlog();
  const [category, setCategory] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  useEffect(
    () =>
      setCategory(new URLSearchParams(window.location.search).get('category')),
    [],
  );

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
            <Sidebar
              blog={blog}
              onSearch={setQuery}
              activeCategory={category}
              onCategory={setCategory}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Post bodies come from the Wix editor; some are a single custom HTML block. Drop anything executable and
// the block's own <style> so the site's typography applies instead.
function cleanHtml(html: string): string {
  return html
    .replace(/<(script|style|iframe|object|embed)[\s\S]*?<\/\1>/gi, '')
    .replace(/\son\w+="[^"]*"/gi, '')
    .replace(/\son\w+='[^']*'/gi, '')
    .replace(/javascript:/gi, '');
}

function renderText(node: RichNode, key: number): React.ReactNode {
  let out: React.ReactNode = node.textData?.text ?? '';
  for (const d of node.textData?.decorations ?? []) {
    if (d.type === 'BOLD') out = <strong>{out}</strong>;
    else if (d.type === 'ITALIC') out = <em>{out}</em>;
    else if (d.type === 'UNDERLINE') out = <u>{out}</u>;
    else if (d.type === 'LINK' && d.linkData?.link?.url) {
      out = (
        <a href={d.linkData.link.url} target="_blank" rel="noopener noreferrer">
          {out}
        </a>
      );
    }
  }
  return <span key={key}>{out}</span>;
}

function renderNodes(nodes: RichNode[] | undefined): React.ReactNode[] {
  return (nodes ?? []).map((node, i) => {
    const kids = () => renderNodes(node.nodes);
    switch (node.type) {
      case 'TEXT':
        return renderText(node, i);
      case 'PARAGRAPH':
        return node.nodes?.length ? <p key={i}>{kids()}</p> : null;
      case 'HEADING': {
        const level = Math.min(6, Math.max(2, node.headingData?.level ?? 2));
        const Tag = `h${level}` as 'h2';
        return <Tag key={i}>{kids()}</Tag>;
      }
      case 'BULLETED_LIST':
        return <ul key={i}>{kids()}</ul>;
      case 'ORDERED_LIST':
        return <ol key={i}>{kids()}</ol>;
      case 'LIST_ITEM':
        return <li key={i}>{kids()}</li>;
      case 'BLOCKQUOTE':
        return <blockquote key={i}>{kids()}</blockquote>;
      case 'DIVIDER':
        return <hr key={i} />;
      case 'IMAGE': {
        const id = node.imageData?.image?.src?.id;
        return id ? (
          <img
            key={i}
            src={`https://static.wixstatic.com/media/${id}`}
            alt={node.imageData?.altText ?? ''}
            loading="lazy"
          />
        ) : null;
      }
      case 'TABLE':
        return (
          <div key={i} className="table-responsive">
            <table className="table">
              <tbody>{kids()}</tbody>
            </table>
          </div>
        );
      case 'TABLE_ROW':
        return <tr key={i}>{kids()}</tr>;
      case 'TABLE_CELL':
        return <td key={i}>{kids()}</td>;
      case 'HTML': {
        const html = node.htmlData?.html;
        return html ? (
          <div
            key={i}
            className="blog-html"
            dangerouslySetInnerHTML={{ __html: cleanHtml(html) }}
          />
        ) : null;
      }
      default:
        return kids().length ? <div key={i}>{kids()}</div> : null;
    }
  });
}

export function BlogPostView() {
  const blog = useBlog();
  const [state, setState] = useState<{
    status: 'loading' | 'ready' | 'missing' | 'error';
    post?: BlogPost;
    nodes?: RichNode[];
  }>({
    status: 'loading',
  });

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get('slug');
    if (!slug) return setState({ status: 'missing' });
    let cancelled = false;
    loadPostBySlug(slug)
      .then((result) => {
        if (cancelled) return;
        if (!result) return setState({ status: 'missing' });
        document.title = `${result.post.title} | Jae Stylez`;
        setState({ status: 'ready', post: result.post, nodes: result.nodes });
      })
      .catch(() => !cancelled && setState({ status: 'error' }));
    return () => {
      cancelled = true;
    };
  }, []);

  const { post, nodes } = state;

  return (
    <section className="blog-details-area py-130 rpy-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {state.status !== 'ready' || !post ? (
              <p role="status">
                {state.status === 'loading' && 'Loading post…'}
                {state.status === 'error' &&
                  'This post could not be loaded right now. Please try again shortly.'}
                {state.status === 'missing' && (
                  <>
                    We could not find that post.{' '}
                    <a href="/blog">Back to the blog</a>
                  </>
                )}
              </p>
            ) : (
              <div className="blog-details-content">
                {post.image && (
                  <div className="image mb-30">
                    <img src={post.image} alt={post.title} />
                  </div>
                )}
                <Meta post={post} />
                <h2>{post.title}</h2>
                <div className="blog-body">{renderNodes(nodes)}</div>
                <div className="mt-40">
                  <h5 className="mb-10">Related services</h5>
                  <ul className="list-style-one landing-list">
                    {relatedFor(post).links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                  <a className="theme-btn mt-15" href="/book">
                    book an appointment{' '}
                    <i className="far fa-long-arrow-right"></i>
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-4 col-md-7 col-sm-9">
            <Sidebar blog={blog} />
          </div>
        </div>
      </div>
      {post && (
        <ReviewCards
          reviews={reviewsFor(relatedFor(post).topics, 1)}
          title="A Client Review"
        />
      )}
    </section>
  );
}

/** Latest posts in the template's news slider (its arrow buttons sit in the section header). */
export function LatestPosts() {
  const blog = useBlog();
  const latest = blog.posts.slice(0, 9);
  if (latest.length === 0) return <Status blog={blog} count={0} />;
  return (
    <Slider
      className="news-slider-wrap"
      slidesToShow={3}
      responsive={[
        [1199, 2],
        [768, 1],
      ]}
      arrows
    >
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
            <p>
              {post.excerpt.length > 110
                ? `${post.excerpt.slice(0, 107)}…`
                : post.excerpt}
            </p>{' '}
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
export function LatestPostsGrid() {
  const blog = useBlog();
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
