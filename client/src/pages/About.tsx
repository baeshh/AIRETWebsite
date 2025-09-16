import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import TeamGrid from "../components/TeamGrid";
import team from "../content/team";
import visionImage from "@assets/main_1757842353489.png";

type Year = 2023 | 2024 | 2025;

interface Milestone {
  date: string;
  description: string;
}

export default function About() {
  const [activeYear, setActiveYear] = useState<Year>(2025);

  const milestonesByYear: Record<Year, Milestone[]> = {
    2023: [
      { date: "Feb 2023", description: "Patent granted (KR No. 10-2499846)." },
      { date: "Dec 2023", description: "Patent application filed: Smart sterilizing shoe cabinet (KR 10-2023-0175107)." }
    ],
    2024: [
      { date: "Jan 2024", description: "MOU with MDI to install shoe cabinets in model homes." },
      { date: "Feb 2024", description: "Patent application filed: AI smart shoe cabinet using image analysis (KR 10-2024-0165413)." },
      { date: "Sep 2024", description: "LOI signed with SM Gyeongnam (Gyeongnam Honorsville Gwangju Station Taejeon)." },
      { date: "Sep 2024", description: "MOU signed with Buildhada, a SaaS construction platform." },
      { date: "Sep 2024", description: "MOU signed with MoDef (custom furniture installation & manufacturing)." },
      { date: "Oct 2024", description: "Patent application filed: Smart shoe automatic re-care system and method (KR 10-2024-0147477)." },
      { date: "Oct 2024", description: "MOU signed with Andrew L. Pettit Architects (New York)." },
      { date: "Dec 2024", description: "Product validation testing underway with HOBAN Construction (product adoption under discussion)." }
    ],
    2025: [
      { date: "Jan 2025", description: "MOU signed with Jeongrok Co., Ltd. for plasma technology development." },
      { date: "Mar 2025", description: "LOI executed with HDC Hyundai Development Company." },
      { date: "Apr 2025", description: "LOI executed with Yangwoo Construction for the Yangwoo Naean-Ae project." },
      { date: "Apr 2025", description: "Purchase commitment contract executed for Jeju City Residence, Unit 140." }
    ]
  };

  return (
    <main>
      {/* Vision & Mission Section (Black) */}
      <section className="section section--black" style={{ paddingTop: "6rem" }}>
        <div className="container">
          <SectionHeader
            title="About AIRET"
            subtitle="Smart homes begin at the entrance."
            theme="black"
          />
          
          <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center", marginBottom: "4rem" }}>
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem" }} data-testid="text-vision-title">
                  Our Vision
                </h3>
                <p style={{ opacity: "0.8", marginBottom: "1rem" }} data-testid="text-vision-paragraph-1">
                  Airet is a life tech company actualizing the vision of “the smart home that begins at your entryway."
                </p>
                <p style={{ opacity: "0.8" }} data-testid="text-vision-paragraph-2">
                  We develop a built-in AI shoe care system that integrates storage, sterilization, drying, deodorization, and data management into a single, seamless solution.
                </p>
              </div>
              <div
                style={{
                  aspectRatio: "1",
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                }}
                data-testid="img-vision-container"
              >
                <img 
                  src={visionImage} 
                  alt="AIRET Vision" 
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover",
                    display: "block" 
                  }}
                  data-testid="img-vision"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Overview Section (Black) */}
      <section className="section section--black">
        <div className="container">
          <div style={{ position: "relative", overflow: "hidden", padding: "4rem 0" }}>
            {/* Background Map */}
            <div style={{ 
              position: "absolute", 
              top: "50%", 
              left: "50%", 
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              opacity: "0.3",
              zIndex: "1"
            }}>
              <svg 
                style={{ width: "100%", height: "100%", minHeight: "400px" }} 
                viewBox="0 0 900 500" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* World Map Continents */}
                <path 
                  d="M158 206c0-1 1-2 3-2l17-3c4-1 8-2 11 0 3 2 5 5 9 6l8 2c3 1 6 0 8-2l5-4c2-2 4-3 7-3l6 1c3 1 5 3 7 5l4 5c1 2 2 4 4 5l5 3c2 1 4 1 6 0l4-2c2-1 4-1 6 0l5 2c2 1 4 3 5 5l2 4c1 2 1 4 0 6l-2 4c-1 2-3 4-5 5l-4 2c-2 1-4 1-6 0l-5-3c-2-1-3-3-4-5l-2-4c-1-2-1-4 0-6l1-3c0-1 0-2-1-3l-2-2c-1-1-3-1-4 0l-3 2c-1 1-2 3-2 5l0 4c0 2-1 4-3 5l-4 2c-2 1-4 0-6-1l-4-3c-1-1-2-3-2-5l0-4c0-2 1-4 3-5l2-1z" 
                  stroke="#64748b" 
                  strokeWidth="1.5" 
                  fill="rgba(100, 116, 139, 0.1)"
                />
                <path 
                  d="M480 190c4-1 8-1 12 0l9 3c4 1 7 4 9 7l5 7c2 3 3 7 3 11l0 10c0 4-1 8-3 11l-5 7c-2 3-5 6-9 7l-9 3c-4 1-8 1-12 0l-9-3c-4-1-7-4-9-7l-5-7c-2-3-3-7-3-11l0-10c0-4 1-8 3-11l5-7c2-3 5-6 9-7l9-3z" 
                  stroke="#64748b" 
                  strokeWidth="1.5" 
                  fill="rgba(100, 116, 139, 0.1)"
                />
                <path 
                  d="M580 120c6-2 12-2 18 0l14 4c5 2 10 5 13 9l8 10c3 4 5 9 5 14l0 12c0 5-2 10-5 14l-8 10c-3 4-8 7-13 9l-14 4c-6 2-12 2-18 0l-14-4c-5-2-10-5-13-9l-8-10c-3-4-5-9-5-14l0-12c0-5 2-10 5-14l8-10c3-4 8-7 13-9l14-4z" 
                  stroke="#64748b" 
                  strokeWidth="1.5" 
                  fill="rgba(100, 116, 139, 0.1)"
                />
                
                {/* Connection Lines */}
                <line x1="730" y1="160" x2="200" y2="150" stroke="#06b6d4" strokeWidth="2" strokeDasharray="15,5" opacity="0.6"/>
                <line x1="730" y1="160" x2="120" y2="180" stroke="#10b981" strokeWidth="2" strokeDasharray="10,10" opacity="0.6"/>
                <line x1="730" y1="160" x2="160" y2="170" stroke="#f59e0b" strokeWidth="2" strokeDasharray="12,3" opacity="0.6"/>
                
                {/* Cities */}
                <circle cx="730" cy="160" r="6" fill="#10b981"/>
                <circle cx="200" cy="150" r="6" fill="#3b82f6"/>
                <circle cx="120" cy="180" r="6" fill="#f59e0b"/>
                <circle cx="160" cy="170" r="6" fill="#ef4444"/>
                
                {/* City Labels */}
                <text x="735" y="145" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600" textAnchor="start">Seoul</text>
                <text x="205" y="135" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600" textAnchor="start">New York</text>
                <text x="75" y="195" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600" textAnchor="start">Los Angeles</text>
                <text x="125" y="155" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600" textAnchor="start">Las Vegas</text>
              </svg>
            </div>

            {/* Content */}
            <div style={{ position: "relative", zIndex: "10", textAlign: "center" }}>
              <h1 
                style={{
                  fontSize: "3.5rem",
                  fontWeight: "300",
                  letterSpacing: "0.1em",
                  marginBottom: "0.5rem",
                  background: "linear-gradient(90deg, #06b6d4, #3b82f6, #10b981)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
                data-testid="tech-overview-title"
              >
                Airet Corp.
              </h1>
              <h2 
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "400",
                  color: "#cbd5e1",
                  marginBottom: "3rem",
                  letterSpacing: "0.05em"
                }}
                data-testid="tech-overview-subtitle"
              >
                Technology Overview
              </h2>
              
              {/* Technology Cards */}
              <div 
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "2rem",
                  flexWrap: "wrap",
                  maxWidth: "64rem",
                  margin: "0 auto"
                }}
                data-testid="technology-cards"
              >
                <div 
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "2rem",
                    width: "200px",
                    height: "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.08)";
                  }}
                  data-testid="card-ai-solutions"
                >
                  <div style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.5rem", color: "#e2e8f0" }}>
                    AI Solutions
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#94a3b8", textAlign: "center", lineHeight: "1.4" }}>
                    Advanced machine learning and artificial intelligence platforms
                  </div>
                </div>

                <div 
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "2rem",
                    width: "200px",
                    height: "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.08)";
                  }}
                  data-testid="card-cloud-infrastructure"
                >
                  <div style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.5rem", color: "#e2e8f0" }}>
                    Cloud Infrastructure
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#94a3b8", textAlign: "center", lineHeight: "1.4" }}>
                    Scalable and secure cloud computing services
                  </div>
                </div>

                <div 
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "12px",
                    padding: "2rem",
                    width: "200px",
                    height: "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255, 255, 255, 0.08)";
                  }}
                  data-testid="card-data-analytics"
                >
                  <div style={{ fontSize: "1.1rem", fontWeight: "600", marginBottom: "0.5rem", color: "#e2e8f0" }}>
                    Data Analytics
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#94a3b8", textAlign: "center", lineHeight: "1.4" }}>
                    Real-time data processing and business intelligence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (White) */}
      <section className="section section--white">
        <div className="container">
          <SectionHeader
            title="Leadership Team"
            subtitle="The experts behind AIRET innovation"
            theme="white"
          />
          
          {/* Founder Section - Emphasized */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div
              style={{
                width: "12rem",
                height: "12rem",
                margin: "0 auto 2rem auto",
                background: "#f3f4f6",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#9ca3af",
                border: "4px solid #e5e7eb",
              }}
              data-testid="founder-avatar"
            >
              <span style={{ fontSize: "3rem" }}>👤</span>
            </div>
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
              data-testid="founder-name"
            >
              {team.founder.name}
            </h3>
            <p
              style={{
                fontSize: "1.25rem",
                opacity: "0.8",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#4f46e5"
              }}
              data-testid="founder-title"
            >
              {team.founder.title}
            </p>
            <p
              style={{
                opacity: "0.7",
                fontSize: "1rem",
                maxWidth: "32rem",
                margin: "0 auto"
              }}
              data-testid="founder-bio"
            >
              {team.founder.bio}
            </p>
          </div>

          {/* Team Members Grid */}
          <TeamGrid members={team.members} theme="white" />
        </div>
      </section>

      {/* Interactive Timeline Section (Black) */}
      <section className="section section--black">
        <div className="container">
          <SectionHeader
            title="Our Journey"
            subtitle="Milestones in innovation and excellence"
            theme="black"
          />
          
          <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
            {/* Two-column layout */}
            <div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "200px 1fr", 
                gap: "3rem",
                alignItems: "flex-start"
              }}
              className="journey-grid"
            >
              {/* Left Column - Year Selector */}
              <div 
                role="tablist"
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "1rem",
                  position: "sticky",
                  top: "2rem"
                }}
                data-testid="year-selector"
              >
                {([2025, 2024, 2023] as Year[]).map((year) => (
                  <button
                    key={year}
                    role="tab"
                    aria-selected={activeYear === year}
                    aria-controls="milestones-panel"
                    onClick={() => setActiveYear(year)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      fontSize: activeYear === year ? "1.5rem" : "1rem",
                      fontWeight: activeYear === year ? "700" : "600",
                      color: "var(--b-fg)",
                      transition: "all 0.3s ease",
                      padding: "0.5rem 0",
                      textAlign: "left"
                    }}
                    data-testid={`button-year-${year}`}
                  >
                    <span
                      style={{
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        border: "2px solid #4f46e5",
                        background: activeYear === year ? "#4f46e5" : "transparent",
                        transition: "all 0.3s ease"
                      }}
                      data-testid={`icon-year-${year}`}
                    />
                    {year}
                  </button>
                ))}
              </div>

              {/* Right Column - Milestones */}
              <div 
                id="milestones-panel"
                role="tabpanel"
                style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "1.5rem" 
                }}
                data-testid="milestones-panel"
              >
                {milestonesByYear[activeYear].map((milestone, index) => (
                  <div
                    key={`${activeYear}-${index}`}
                    style={{ 
                      padding: "1.5rem", 
                      background: "var(--b-surface)", 
                      borderRadius: "var(--radius)", 
                      border: "1px solid var(--b-line)" 
                    }}
                    data-testid={`milestone-${activeYear}-${index}`}
                  >
                    <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                      {milestone.date}
                    </h4>
                    <p style={{ opacity: "0.8" }}>
                      {milestone.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile-responsive CSS */}
          <style>{`
            @media (max-width: 768px) {
              .journey-grid {
                grid-template-columns: 1fr !important;
                gap: 2rem !important;
              }
            }
          `}</style>
        </div>
      </section>
    </main>
  );
}
