import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import NewsCard from "../components/NewsCard";
import VideoCard from "../components/VideoCard";
import news, { type NewsItem } from "../content/news";
import videos from "../content/videos";

export default function News() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const updates = [
    {
      date: "2025-09-13",
      title: "Digital Health, Smart Home YouTube Upload",
      description: "Content introducing the convergence trend of smart healthcare and home tech"
    },
    {
      date: "2024-12-10",
      title: "Money Today Gyeonggi Headquarters Interview",
      description: "Sharing the startup’s background, vision, and market expansion strategy"
    },
    {
      date: "2024-11-12",
      title: "Airret Wins Award at 2024 Startup Incubation Competition",
      description: "Recognized for IoT Smart Shoe-Care Cabinet with UV Odor Filter, Dust Collection, and Heat Pump"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  const getVisibleNews = () => {
    const visible = [];
    const itemsToShow = Math.min(4, news.length);
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % news.length;
      visible.push(news[index]);
    }
    return visible;
  };

  const nextVideoSlide = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const prevVideoSlide = () => {
    setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const getVisibleVideos = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentVideoIndex + i) % videos.length;
      visible.push(videos[index]);
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
          <div style={{ position: "relative", maxWidth: "80rem", margin: "0 auto", padding: "0 5rem" }}>
            {/* Navigation Arrows - only show if there's more than one news item */}
            {news.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: "10",
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "50%",
                    border: "2px solid #e5e7eb",
                    background: "white",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    color: "#374151",
                    transition: "all 0.2s ease",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
                  }}
                  data-testid="button-news-prev"
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.background = "#f9fafb";
                    (e.target as HTMLButtonElement).style.borderColor = "#9ca3af";
                    (e.target as HTMLButtonElement).style.transform = "translateY(-50%) scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.background = "white";
                    (e.target as HTMLButtonElement).style.borderColor = "#e5e7eb";
                    (e.target as HTMLButtonElement).style.transform = "translateY(-50%) scale(1)";
                  }}
                >
                  ‹
                </button>
                
                <button
                  onClick={nextSlide}
                  style={{
                    position: "absolute",
                    right: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: "10",
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "50%",
                    border: "2px solid #e5e7eb",
                    background: "white",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    color: "#374151",
                    transition: "all 0.2s ease",
                    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
                  }}
                  data-testid="button-news-next"
                  onMouseEnter={(e) => {
                    (e.target as HTMLButtonElement).style.background = "#f9fafb";
                    (e.target as HTMLButtonElement).style.borderColor = "#9ca3af";
                    (e.target as HTMLButtonElement).style.transform = "translateY(-50%) scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLButtonElement).style.background = "white";
                    (e.target as HTMLButtonElement).style.borderColor = "#e5e7eb";
                    (e.target as HTMLButtonElement).style.transform = "translateY(-50%) scale(1)";
                  }}
                >
                  ›
                </button>
              </>
            )}

            {/* News Cards Container */}
            {news.length === 1 ? (
              // Single news item - display centered
              <div 
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "0 auto",
                  maxWidth: "600px"
                }}
                data-testid="news-single"
              >
                <div
                  style={{
                    width: "100%"
                  }}
                  data-testid="news-single-item"
                >
                  <NewsCard news={news[0]} theme="white" />
                </div>
              </div>
            ) : (
              // Multiple news items - display as carousel
              <div 
                style={{
                  position: "relative",
                  overflow: "hidden",
                  margin: "0 4rem"
                }}
                data-testid="news-carousel"
              >
                <div 
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    width: "calc(100% + 40%)",
                    transform: "translateX(-10%)",
                    alignItems: "stretch"
                  }}
                >
                  {getVisibleNews().map((item, index) => {
                    const isCenter = index === 1 || index === 2;
                    const isEdge = index === 0 || index === 3;
                    
                    return (
                      <div
                        key={`${currentIndex}-${index}`}
                        style={{
                          flex: "0 0 25%",
                          opacity: isEdge ? "0.7" : "1",
                          transform: isEdge ? "scale(0.95)" : "scale(1)",
                          transition: "all 0.3s ease",
                          position: "relative"
                        }}
                        data-testid={`news-carousel-item-${index}`}
                      >
                        <NewsCard news={item} theme="white" />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* YouTube Videos Section (White) */}
      <section className="section section--white">
        <div className="container">
          <SectionHeader
            title="Featured Videos"
            subtitle="Watch our latest presentations and insights"
            theme="white"
          />
          
          {/* Video Carousel */}
          <div style={{ position: "relative", maxWidth: "80rem", margin: "0 auto", padding: "0 5rem" }}>
            {/* Navigation Arrows */}
            <button
              onClick={prevVideoSlide}
              style={{
                position: "absolute",
                left: "0",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "10",
                width: "3.5rem",
                height: "3.5rem",
                borderRadius: "50%",
                border: "2px solid #e5e7eb",
                background: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                color: "#374151",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
              }}
              data-testid="button-video-prev"
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = "#f9fafb";
                (e.target as HTMLButtonElement).style.borderColor = "#9ca3af";
                (e.target as HTMLButtonElement).style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = "white";
                (e.target as HTMLButtonElement).style.borderColor = "#e5e7eb";
                (e.target as HTMLButtonElement).style.transform = "translateY(-50%) scale(1)";
              }}
            >
              ‹
            </button>
            
            <button
              onClick={nextVideoSlide}
              style={{
                position: "absolute",
                right: "0",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: "10",
                width: "3.5rem",
                height: "3.5rem",
                borderRadius: "50%",
                border: "2px solid #e5e7eb",
                background: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                color: "#374151",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)"
              }}
              data-testid="button-video-next"
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = "#f9fafb";
                (e.target as HTMLButtonElement).style.borderColor = "#9ca3af";
                (e.target as HTMLButtonElement).style.transform = "translateY(-50%) scale(1.1)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = "white";
                (e.target as HTMLButtonElement).style.borderColor = "#e5e7eb";
                (e.target as HTMLButtonElement).style.transform = "translateY(-50%) scale(1)";
              }}
            >
              ›
            </button>

            {/* Video Cards Container with clipping */}
            <div 
              style={{
                position: "relative",
                overflow: "hidden",
                margin: "0 4rem"
              }}
              data-testid="video-carousel"
            >
              <div 
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  width: "calc(100% + 33.33%)",
                  transform: "translateX(-16.67%)",
                  alignItems: "stretch"
                }}
              >
                {getVisibleVideos().map((video, index) => {
                  const isCenter = index === 1;
                  const isEdge = index === 0 || index === 2;
                  
                  return (
                    <div
                      key={`${currentVideoIndex}-${index}`}
                      style={{
                        flex: "0 0 33.33%",
                        opacity: isEdge ? "0.7" : "1",
                        transform: isEdge ? "scale(0.95)" : "scale(1)",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        position: "relative"
                      }}
                      data-testid={`video-carousel-item-${index}`}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform = isEdge ? "scale(1)" : "scale(1.02)";
                        (e.currentTarget as HTMLDivElement).style.zIndex = "5";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform = isEdge ? "scale(0.95)" : "scale(1)";
                        (e.currentTarget as HTMLDivElement).style.zIndex = "1";
                      }}
                    >
                      <VideoCard video={video} theme="white" />
                    </div>
                  );
                })}
              </div>
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
