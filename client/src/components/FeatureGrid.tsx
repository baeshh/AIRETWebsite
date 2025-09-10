interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  theme?: "white" | "black";
}

export default function FeatureGrid({ features, theme = "white" }: FeatureGridProps) {
  const cardClass = theme === "white" ? "card--white" : "card--black";

  return (
    <div className="feature-grid" data-testid="feature-grid">
      {features.map((feature, index) => (
        <div key={index} className={`card ${cardClass}`} style={{ padding: "2rem", textAlign: "center" }} data-testid={`feature-card-${index}`}>
          <div
            style={{
              width: "4rem",
              height: "4rem",
              margin: "0 auto 1.5rem auto",
              background: theme === "white" ? "#f3f4f6" : "#374151",
              borderRadius: "var(--radius)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            data-testid={`feature-icon-${index}`}
          >
            <span style={{ fontSize: "1.5rem" }}>{feature.icon}</span>
          </div>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "1rem",
            }}
            data-testid={`feature-title-${index}`}
          >
            {feature.title}
          </h3>
          <p style={{ opacity: "0.8" }} data-testid={`feature-description-${index}`}>
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
