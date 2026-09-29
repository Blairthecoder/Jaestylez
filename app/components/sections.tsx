
export function PageBanner({ title, crumbs }: { title: string; crumbs: { label: string; href?: string }[] }) {
  return (
    <section
      className="page-banner text-white py-190 rpy-130"
      style={{ backgroundImage: 'url(/assets/images/banner/banner.jpg)' }}
    >
      <div className="container">
        <div className="banner-inner">
          <h1 className="page-title wow fadeInRight delay-0-2s">{title}</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center wow fadeInLeft delay-0-2s">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              {crumbs.map((crumb, i) =>
                crumb.href ? (
                  <li key={crumb.label} className="breadcrumb-item">
                    <a href={crumb.href}>{crumb.label}</a>
                  </li>
                ) : (
                  <li key={crumb.label} className={`breadcrumb-item${i === crumbs.length - 1 ? ' active' : ''}`}>
                    {crumb.label}
                  </li>
                ),
              )}
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}
