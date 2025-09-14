import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import NewsCard from "../components/NewsCard";
import news from "../content/news";

export default function News() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const updates = [
    {
      date: "2025-09-14",
      title: "기사",
      description: "기사"
    },
    {
      date: "2025-09-14",
      title: "기사",
      description: "기사"
    },
    {
      date: "2025-09-14",
      title: "기사",
      description: "기사"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2 >= news.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? Math.max(0, news.length - 2) : prev - 2));
  };

  const getVisibleNews = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % news.length;
      visible.push(news[index]);
    }
    return visible;
  };

  return (
    <main>
      {/* News Feed Section (White) */}
      <section className="section section--white" style={{ paddingTop: "6rem" }}>
        <div className="container">
          <SectionHeader
            title="Latest News"
            subtitle="Stay informed about AIRET developments and innovations"
            theme="white"
          />
          
          {/* News Carousel */}
          <div style={{ position: "relative", maxWidth: "80rem", margin: "0 auto", overflow: "hidden" }}>
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              style={{
                position: "absolute",
                left: "-2rem",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "10",
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                border: "2px solid #e5e7eb",
                background: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                color: "#374151",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
              }}
              data-testid="button-news-prev"
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = "#f9fafb";
                (e.target as HTMLButtonElement).style.borderColor = "#9ca3af";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = "white";
                (e.target as HTMLButtonElement).style.borderColor = "#e5e7eb";
              }}
            >
              ‹
            </button>
            
            <button
              onClick={nextSlide}
              style={{
                position: "absolute",
                right: "-2rem",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "10",
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                border: "2px solid #e5e7eb",
                background: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                color: "#374151",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
              }}
              data-testid="button-news-next"
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = "#f9fafb";
                (e.target as HTMLButtonElement).style.borderColor = "#9ca3af";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = "white";
                (e.target as HTMLButtonElement).style.borderColor = "#e5e7eb";
              }}
            >
              ›
            </button>

            {/* News Cards Container */}
            <div 
              style={{
                display: "flex",
                gap: "1.5rem",
                padding: "0 4rem",
                alignItems: "stretch"
              }}
              data-testid="news-carousel"
            >
              {getVisibleNews().map((item, index) => {
                const isCenter = index === 1 || index === 2;
                const isEdge = index === 0 || index === 3;
                
                return (
                  <div
                    key={`${currentIndex}-${index}`}
                    style={{
                      flex: isCenter ? "0 0 40%" : "0 0 20%",
                      opacity: isEdge ? "0.6" : "1",
                      transform: isEdge ? "scale(0.9)" : "scale(1)",
                      transition: "all 0.3s ease",
                      overflow: isEdge ? "hidden" : "visible"
                    }}
                    data-testid={`news-carousel-item-${index}`}
                  >
                    <NewsCard news={item} theme="white" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section (Black) */}
      <section className="section section--black">
        <div className="container">
          <SectionHeader
            title="Recent Updates"
            subtitle="Timeline of our latest activities and milestones"
            theme="black"
          />
          <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {updates.map((update, index) => (
                <div
                  key={index}
                  style={{
                    padding: "1.5rem",
                    background: "var(--b-surface)",
                    borderRadius: "var(--radius)",
                    border: "1px solid var(--b-line)",
                  }}
                  data-testid={`update-${index}`}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <time
                      style={{
                        fontSize: "0.875rem",
                        opacity: "0.7",
                      }}
                      data-testid={`update-date-${index}`}
                    >
                      {update.date}
                    </time>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "600",
                      }}
                      data-testid={`update-title-${index}`}
                    >
                      {update.title}
                    </h3>
                    <p
                      style={{
                        opacity: "0.8",
                      }}
                      data-testid={`update-description-${index}`}
                    >
                      {update.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
