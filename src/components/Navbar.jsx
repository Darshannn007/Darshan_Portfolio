const Navbar = ({ links, cta }) => {
  return (
    <header className="nav">
      <nav className="nav__links">
        {links.map((link) => (
          <a key={link.href} className="nav__link" href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="btn btn--ghost" href={cta.href}>
        {cta.label}
      </a>
    </header>
  );
};

export default Navbar;
