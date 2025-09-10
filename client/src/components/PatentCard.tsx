interface Patent {
  title: string;
  number: string;
  status: string;
  date: string;
  desc: string;
}

interface PatentCardProps {
  patent: Patent;
  theme?: "white" | "black";
}

export default function PatentCard({ patent, theme = "black" }: PatentCardProps) {
  const cardClass = theme === "white" ? "card--white" : "card--black";
  
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "registered":
        return "#059669";
      case "pending":
        return "#d97706";
      default:
        return "#6b7280";
    }
  };

  return (
    <div className={`card ${cardClass}`} style={{ padding: "1.5rem" }} data-testid={`patent-card-${patent.number}`}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
        <div style={{ flex: "1" }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "0.5rem",
            }}
            data-testid={`patent-title-${patent.number}`}
          >
            {patent.title}
          </h3>
          <p
            style={{
              fontSize: "0.875rem",
              opacity: "0.7",
              marginBottom: "0.25rem",
            }}
            data-testid={`patent-number-${patent.number}`}
          >
            <span style={{ fontWeight: "500" }}>Patent #:</span> {patent.number}
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              opacity: "0.7",
              marginBottom: "0.25rem",
            }}
            data-testid={`patent-date-${patent.number}`}
          >
            <span style={{ fontWeight: "500" }}>Date:</span> {patent.date}
          </p>
        </div>
        <span
          style={{
            padding: "0.25rem 0.75rem",
            background: getStatusColor(patent.status),
            color: "white",
            fontSize: "0.75rem",
            borderRadius: "9999px",
          }}
          data-testid={`patent-status-${patent.number}`}
        >
          {patent.status}
        </span>
      </div>
      <p style={{ opacity: "0.8" }} data-testid={`patent-description-${patent.number}`}>
        {patent.desc}
      </p>
    </div>
  );
}
