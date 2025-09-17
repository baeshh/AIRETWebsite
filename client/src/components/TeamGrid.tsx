interface TeamMember {
  name: string;
  role: string;
  note: string;
  image?: string;
}

interface TeamGridProps {
  members: TeamMember[];
  theme?: "white" | "black";
}

export default function TeamGrid({ members, theme = "black" }: TeamGridProps) {
  return (
    <div className="team-grid" data-testid="team-grid">
      {members.map((member, index) => (
        <div key={index} style={{ textAlign: "center" }} data-testid={`team-member-${index}`}>
          <div
            style={{
              width: "12rem",
              height: "12rem",
              margin: "0 auto 1rem auto",
              background: member.image ? "transparent" : (theme === "white" ? "#f3f4f6" : "#374151"),
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: theme === "white" ? "#9ca3af" : "#6b7280",
              overflow: "hidden"
            }}
            data-testid={`team-avatar-${index}`}
          >
            {member.image ? (
              <img 
                src={member.image} 
                alt={member.name}
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover",
                  display: "block" 
                }}
              />
            ) : (
              <span style={{ fontSize: "3rem" }}>👤</span>
            )}
          </div>
          <h4
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              marginBottom: "0.25rem",
            }}
            data-testid={`team-name-${index}`}
          >
            {member.name}
          </h4>
          <p
            style={{
              opacity: "0.8",
              fontSize: "0.875rem",
              marginBottom: "0.5rem",
            }}
            data-testid={`team-role-${index}`}
          >
            {member.role}
          </p>
          <p
            style={{
              opacity: "0.7",
              fontSize: "0.875rem",
            }}
            data-testid={`team-note-${index}`}
          >
            {member.note}
          </p>
        </div>
      ))}
    </div>
  );
}
