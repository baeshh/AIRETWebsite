import { type VideoItem } from "../content/videos";

interface VideoCardProps {
  video: VideoItem;
  theme?: "white" | "black";
}

export default function VideoCard({ video, theme = "white" }: VideoCardProps) {
  const cardClass = theme === "white" ? "card--white" : "card--black";

  return (
    <article className={`card ${cardClass}`} data-testid={`video-card-${video.id}`}>
      {/* YouTube video embed */}
      <div
        style={{
          aspectRatio: "16/9",
          position: "relative",
          overflow: "hidden",
          background: "#000",
        }}
        data-testid={`video-embed-${video.id}`}
      >
        <iframe
          src={video.embedUrl}
          title={video.title}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            border: "none",
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          data-testid={`iframe-video-${video.id}`}
        />
      </div>
      <div style={{ padding: "1.5rem" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            marginBottom: "0.75rem",
          }}
          data-testid={`video-title-${video.id}`}
        >
          {video.title}
        </h3>
        <p
          style={{
            opacity: "0.8",
            marginBottom: "1rem",
          }}
          data-testid={`video-description-${video.id}`}
        >
          {video.description}
        </p>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: theme === "white" ? "var(--w-fg)" : "var(--b-fg)",
            fontWeight: "500",
            textDecoration: "none",
          }}
          data-testid={`link-video-watch-${video.id}`}
        >
          YouTube에서 보기 →
        </a>
      </div>
    </article>
  );
}