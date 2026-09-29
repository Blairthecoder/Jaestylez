'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, site, type NavItem } from '@/app/site-data';

function isActive(item: NavItem, path: string): boolean {
  if (item.href) return item.href === path;
  return (item.children ?? []).some((child) => isActive(child, path));
}

function MenuItem({ item, path, onNavigate }: { item: NavItem; path: string; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const active = isActive(item, path);

  if (!item.children) {
    return (
      <li className={active ? 'current' : undefined}>
        <a href={item.href!} onClick={onNavigate}>
          {item.label}
        </a>
      </li>
    );
  }

  return (
    <li className={`dropdown${active ? ' current' : ''}${open ? ' open' : ''}`}>
      <a
        href="#"
        onClick={(event) => {
          event.preventDefault();
          setOpen((v) => !v);
        }}
      >
        {item.label}
      </a>
      <ul>
        {item.children.map((child) => (
          <MenuItem key={child.label} item={child} path={path} onNavigate={onNavigate} />
        ))}
      </ul>
      <div
        className="dropdown-btn"
        role="button"
        aria-label={`Toggle ${item.label} menu`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="fas fa-chevron-down"></span>
      </div>
    </li>
  );
}

export function SiteHeader({ variant }: { variant: 'one' | 'three' }) {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const onScroll = () => setFixed(window.scrollY >= 100);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const three = variant === 'three';
  const close = () => setMenuOpen(false);

  const top = (
    <div className="header-top py-5">
      <div className="row">
        <div className="col-sm-8">
          <div className="top-left">
            <ul>
              <li>
                <i className="far fa-phone"></i> <b>Call Us : </b> <a href={site.phoneHref}>{site.phone}</a>
              </li>
              <li>
                <i className="far fa-clock"></i> <b>Opening Hour : </b> {site.hoursLong}
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="top-right text-center text-sm-right">
            <div className="social-style-one">
              {site.social.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}>
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const upper = (
    <div className={`header-upper${three ? ' bg-black' : ''}`}>
      <div className="container clearfix">
        <div className="header-inner py-10 rpy-0 d-lg-flex align-items-center">
          <div className="logo-outer">
            <div className="logo">
              <a href="/">
                <img src="/assets/images/logos/logo.png" alt={site.name} title={site.name} />
              </a>
            </div>
          </div>

          <div className="nav-outer clearfix mx-lg-auto">
            <nav className="main-menu navbar-expand-lg">
              <div className="navbar-header">
                <div className="mobile-logo my-15">
                  <a href="/">
                    <img src="/assets/images/logos/logo.png" alt={site.name} title={site.name} />
                  </a>
                </div>
                <button
                  type="button"
                  className="navbar-toggle"
                  aria-label="Toggle navigation"
                  aria-expanded={menuOpen}
                  onClick={() => setMenuOpen((v) => !v)}
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <div className={`navbar-collapse collapse clearfix${menuOpen ? ' show' : ''}`}>
                <ul className="navigation clearfix">
                  {nav.map((item) => (
                    <MenuItem key={item.label} item={item} path={path} onNavigate={close} />
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          <div className="menu-button d-none d-lg-block">
            <a href="/services#book" className={`theme-btn${three ? ' style-four' : ''}`}>
              appointment <i className="far fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header
      className={`main-header ${three ? 'header-three' : 'header-one menu-absolute'}${fixed ? ' fixed-header' : ''}`}
    >
      {three ? (
        <div className="header-top-wrap bg-yellow text-white">
          <div className="container">{top}</div>
        </div>
      ) : (
        <div className="container">{top}</div>
      )}
      {upper}
    </header>
  );
}
