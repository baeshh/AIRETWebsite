import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/product", label: "Product" },
    { path: "/patents", label: "Patents" },
    { path: "/news", label: "News" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4rem" }}>
          <Link to="/" style={{ fontSize: "1.25rem", fontWeight: "bold" }} data-testid="link-home-logo">
            AIRET
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div className="desktop-menu" style={{ display: "flex", gap: "1.5rem" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? "nav-link--active" : ""}`}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <button
              className="mobile-menu"
              style={{ padding: "0.5rem" }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
            <span style={{ position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: "0" }}>
              Open menu
            </span>
            <div style={{ width: "1.5rem", height: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.25rem" }}>
              <span style={{ width: "100%", height: "2px", background: "currentColor" }}></span>
              <span style={{ width: "100%", height: "2px", background: "currentColor" }}></span>
              <span style={{ width: "100%", height: "2px", background: "currentColor" }}></span>
            </div>
            </button>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="mobile-menu" style={{ paddingTop: "1rem", paddingBottom: "1rem", borderTop: "1px solid var(--w-line)" }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? "nav-link--active" : ""}`}
                style={{ display: "block", padding: "0.75rem 0" }}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
