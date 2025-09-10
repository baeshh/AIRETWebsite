interface Stat {
  value: string;
  title: string;
  description: string;
}

interface StatStripProps {
  stats: Stat[];
}

export default function StatStrip({ stats }: StatStripProps) {
  return (
    <div className="stat-strip" data-testid="stat-strip">
      {stats.map((stat, index) => (
        <div key={index} style={{ textAlign: "center", padding: "calc(var(--space) * 1.5)" }} data-testid={`stat-item-${index}`}>
          <div
            style={{
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
            data-testid={`stat-value-${index}`}
          >
            {stat.value}
          </div>
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              marginBottom: "0.5rem",
            }}
            data-testid={`stat-title-${index}`}
          >
            {stat.title}
          </h3>
          <p style={{ opacity: "0.8" }} data-testid={`stat-description-${index}`}>
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}
