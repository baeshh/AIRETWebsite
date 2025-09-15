import { type NewsItem } from "../content/news";

interface NewsCardProps {
  news: NewsItem;
  theme?: "white" | "black";
}

export default function NewsCard({ news, theme = "white" }: NewsCardProps) {
  const cardClass = theme === "white" ? "card--white" : "card--black";

  return (
    <article className={`card ${cardClass}`} data-testid={`news-card-${news.title.replace(/\s+/g, '-').toLowerCase()}`}>
      {/* News thumbnail placeholder */}
      <div
        style={{
          aspectRatio: "16/9",
          background: theme === "white" ? "#f3f4f6" : "#374151",
          position: "relative",
          overflow: "hidden",
        }}
        data-testid={`news-thumbnail-${news.title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        {news.image ? (
          <img 
            src={news.image} 
            alt={news.title}
            style={{ 
              width: "100%", 
              height: "100%", 
              objectFit: "cover",
              display: "block" 
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: "0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme === "white" ? "#9ca3af" : "#6b7280",
            }}
          >
            <span style={{ fontSize: "1.875rem" }}>📰</span>
          </div>
        )}
      </div>
      <div style={{ padding: "1.5rem" }}>
        <time
          style={{
            fontSize: "0.875rem",
            opacity: "0.7",
            marginBottom: "0.5rem",
            display: "block",
          }}
          data-testid={`news-date-${news.title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {news.date}
        </time>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            marginBottom: "0.75rem",
          }}
          data-testid={`news-title-${news.title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {news.title}
        </h3>
        <p
          style={{
            opacity: "0.8",
            marginBottom: "1rem",
          }}
          data-testid={`news-summary-${news.title.replace(/\s+/g, '-').toLowerCase()}`}
        >
          {news.summary}
        </p>
        {news.link === "#" ? (
          <span
            style={{
              color: theme === "white" ? "var(--w-fg)" : "var(--b-fg)",
              fontWeight: "500",
              opacity: "0.5",
            }}
            data-testid={`text-news-read-more-${news.title.replace(/\s+/g, '-').toLowerCase()}`}
          >
            Read more →
          </span>
        ) : (
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: theme === "white" ? "var(--w-fg)" : "var(--b-fg)",
              fontWeight: "500",
              textDecoration: "none",
            }}
            data-testid={`link-news-read-more-${news.title.replace(/\s+/g, '-').toLowerCase()}`}
          >
            Read more →
          </a>
        )}
      </div>
    </article>
  );
}
