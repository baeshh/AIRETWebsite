import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="section--white" style={{ borderTop: "1px solid var(--w-line)" }}>
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", marginBottom: "2rem" }}>
          <div>
            <h4 style={{ fontSize: "1.125rem", fontWeight: "bold", marginBottom: "1rem" }}>AIRET</h4>
            <p style={{ fontSize: "0.875rem", opacity: "0.8" }}>
              Museum-grade shoe care and display solutions for discerning collectors.
            </p>
          </div>
          <div>
            <h5 style={{ fontWeight: "600", marginBottom: "0.75rem" }}>Products</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem" }}>
              <li><Link to="/product" style={{ opacity: "0.8" }} data-testid="link-footer-built-in"></Link></li>
              <li><Link to="/product" style={{ opacity: "0.8" }} data-testid="link-footer-stand-alone"></Link></li>
              <li><Link to="/product" style={{ opacity: "0.8" }} data-testid="link-footer-lite"></Link></li>
              <li><Link to="/product" style={{ opacity: "0.8" }} data-testid="link-footer-pro"></Link></li>
            </ul>
          </div>
          <div>
            <h5 style={{ fontWeight: "600", marginBottom: "0.75rem" }}>Company</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem" }}>
              <li><Link to="/about" style={{ opacity: "0.8" }} data-testid="link-footer-about">About</Link></li>
              <li><Link to="/patents" style={{ opacity: "0.8" }} data-testid="link-footer-patents">Patents</Link></li>
              <li><Link to="/news" style={{ opacity: "0.8" }} data-testid="link-footer-news">News</Link></li>
              <li><a href="#" style={{ opacity: "0.8" }} data-testid="link-footer-contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 style={{ fontWeight: "600", marginBottom: "0.75rem" }}>Support</h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem" }}>
              <li><a href="#" style={{ opacity: "0.8" }} data-testid="link-footer-documentation">Documentation</a></li>
              <li><a href="#" style={{ opacity: "0.8" }} data-testid="link-footer-installation">Installation</a></li>
              <li><a href="#" style={{ opacity: "0.8" }} data-testid="link-footer-warranty">Warranty</a></li>
              <li><a href="#" style={{ opacity: "0.8" }} data-testid="link-footer-service">Service</a></li>
            </ul>
          </div>
        </div>
        
        <div style={{ paddingTop: "2rem", borderTop: "1px solid var(--w-line)", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", width: "100%" }}>
            <p style={{ fontSize: "0.875rem", opacity: "0.8" }} data-testid="text-copyright">© 2025 AIRET. All rights reserved.</p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <a href="#" style={{ fontSize: "0.875rem", opacity: "0.8" }} data-testid="link-footer-privacy">Privacy Policy</a>
              <a href="#" style={{ fontSize: "0.875rem", opacity: "0.8" }} data-testid="link-footer-terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
