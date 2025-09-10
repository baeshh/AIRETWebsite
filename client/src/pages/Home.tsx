import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import StatStrip from "../components/StatStrip";
import FeatureGrid from "../components/FeatureGrid";
import ProductCard from "../components/ProductCard";
import NewsCard from "../components/NewsCard";
import products from "../content/products";
import news from "../content/news";

export default function Home() {
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const stats = [
    {
      value: "±2%",
      title: "Preservation Quality",
      description: "Leather moisture deviation within ±2%"
    },
    {
      value: "99.9%",
      title: "Hygiene Reliability",
      description: "UV-C sterilization (lab tested)"
    },
    {
      value: "60%",
      title: "Operational Efficiency", 
      description: "Maintenance time reduced by 60%"
    }
  ];

  const features = [
    {
      icon: "🔬",
      title: "UV-C Sterilization",
      description: "Advanced UV-C technology eliminates 99.9% of bacteria and fungi while preserving material integrity"
    },
    {
      icon: "💨",
      title: "Precision Humidity & Air Circulation",
      description: "Climate-controlled environment maintains optimal conditions for leather preservation"
    },
    {
      icon: "💡",
      title: "Exhibition Lighting",
      description: "Museum-grade LED lighting with high CRI for true color representation"
    },
    {
      icon: "📱",
      title: "Remote Monitoring",
      description: "Smart connectivity for real-time status updates and remote control capabilities"
    }
  ];

  return (
    <main>
      {/* Hero Section (White) */}
      <section className="section section--white" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-start", justifyContent: "center", overflow: "hidden", paddingTop: "6rem" }}>
        {/* Background video */}
        {!videoError ? (
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            onError={(e) => {
              console.log('Video error:', e);
              setVideoError(true);
            }}
            onLoadedData={() => {
              console.log('Video loaded successfully');
              setVideoLoaded(true);
            }}
            onCanPlay={() => {
              console.log('Video can play');
            }}
            data-testid="hero-video"
          >
            <source src="/videos/movie.mp4" type="video/mp4" />
          </video>
        ) : (
          <div
            className="hero-video"
            style={{
              background: "#f3f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9ca3af",
            }}
            data-testid="hero-video-fallback"
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "3.75rem", marginBottom: "1rem" }}>📹</div>
              <p>movie.mp4 background video</p>
              <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>autoplay, muted, loop, playsInline</p>
            </div>
          </div>
        )}
        
        <div style={{ position: "relative", zIndex: "10", paddingLeft: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", minHeight: "100vh", paddingTop: "3rem" }}>
            <div style={{ textAlign: "left", maxWidth: "50%", color: "#fff" }} className="fade-up" data-testid="hero-content">
              <h1 style={{ fontSize: "clamp(3rem, 8vw, 4.5rem)", fontWeight: "bold", marginBottom: "1.5rem", lineHeight: "1.1" }} data-testid="text-hero-title">
                Luxury Built-in<br />ShoeCare System
              </h1>
              <p style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.25rem)", opacity: "0.9", lineHeight: "1.4" }} data-testid="text-hero-subtitle">
                Gallery-style display integrated with AI-powered maintenance<br />designed for today's modern luxury lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why AIRET Section (Black) */}
      <section className="section section--black">
        <div className="container">
          <SectionHeader
            title="Why AIRET"
            subtitle="Scientific precision meets luxury presentation"
            theme="black"
          />
          <StatStrip stats={stats} />
        </div>
      </section>

      {/* Core Features Section (White) */}
      <section className="section section--white">
        <div className="container">
          <SectionHeader
            title="Core Features"
            subtitle="Advanced technology for perfect preservation"
            theme="white"
          />
          <FeatureGrid features={features} theme="white" />
        </div>
      </section>

      {/* Product Preview Section (Black) */}
      <section className="section section--black">
        <div className="container">
          <SectionHeader
            title="Product Preview"
            subtitle="Choose the perfect solution for your needs"
            theme="black"
          />
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.key} product={product} theme="black" />
            ))}
          </div>
        </div>
      </section>

      {/* News Preview Section (White) */}
      <section className="section section--white">
        <div className="container">
          <SectionHeader
            title="Latest News"
            subtitle="Stay updated with AIRET developments"
            theme="white"
          />
          <div className="news-grid">
            {news.slice(0, 3).map((item, index) => (
              <NewsCard key={index} news={item} theme="white" />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              href="/news"
              style={{
                display: "inline-block",
                background: "var(--w-fg)",
                color: "var(--w-bg)",
                padding: "0.75rem 2rem",
                borderRadius: "var(--radius)",
                fontWeight: "500",
                transition: "all 0.2s ease",
              }}
              data-testid="button-view-all-news"
            >
              View All News
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
