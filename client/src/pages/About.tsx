import { useState, useEffect } from "react";
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
  
  // Create floating particles effect
  useEffect(() => {
    const createParticles = () => {
      const container = document.getElementById('particles-container');
      if (!container) return;
      
      // Clear existing particles
      container.innerHTML = '';
      
      const particleCount = 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
      }
    };

    createParticles();
    
    // Clean up function
    return () => {
      const container = document.getElementById('particles-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

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
      <section className="section section--black" style={{ position: "relative", overflow: "hidden" }}>
        <style>
          {`
            @keyframes continentPulse {
              0% { 
                stroke: #64748b; 
                fill: rgba(100, 116, 139, 0.1);
                filter: drop-shadow(0 0 5px rgba(100, 116, 139, 0.3));
              }
              100% { 
                stroke: #94a3b8; 
                fill: rgba(148, 163, 184, 0.15);
                filter: drop-shadow(0 0 15px rgba(148, 163, 184, 0.5));
              }
            }
            
            @keyframes flowingLine {
              0% { 
                stroke-dashoffset: 0; 
                opacity: 0.3;
              }
              50% { 
                opacity: 0.8;
              }
              100% { 
                stroke-dashoffset: -200; 
                opacity: 0.3;
              }
            }
            
            @keyframes cityPulse {
              0%, 100% { 
                r: 6; 
                opacity: 1; 
              }
              50% { 
                r: 10; 
                opacity: 0.7; 
              }
            }
            
            @keyframes labelGlow {
              0% { opacity: 0.8; }
              100% { opacity: 1; }
            }
            
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
            @keyframes float {
              0% {
                transform: translateY(100vh) translateX(0);
                opacity: 0;
              }
              10% {
                opacity: 1;
              }
              90% {
                opacity: 1;
              }
              100% {
                transform: translateY(-10px) translateX(100px);
                opacity: 0;
              }
            }
            
            .world-map .continent-outline,
            .world-map .map-inner path,
            .world-map .map-inner polygon {
              stroke: #64748b;
              stroke-width: 1.2;
              fill: rgba(100, 116, 139, 0.08);
              opacity: 0.85;
              animation: continentPulse 6s ease-in-out infinite alternate;
            }
            
            .connection-line {
              opacity: 0.6;
              animation: flowingLine 4s linear infinite;
            }
            
            .line-seoul-ny { animation-delay: 0s; }
            .line-seoul-la { animation-delay: 0.7s; }
            .line-seoul-vegas { animation-delay: 1.4s; }
            .line-ny-la { animation-delay: 2.1s; }
            .line-ny-vegas { animation-delay: 2.8s; }
            .line-la-vegas { animation-delay: 3.5s; }
            
            .city-dot {
              animation: cityPulse 2s ease-in-out infinite;
              filter: drop-shadow(0 0 8px currentColor);
            }
            
            .seoul-dot { animation-delay: 0s; }
            .newyork-dot { animation-delay: 0.5s; }
            .la-dot { animation-delay: 1s; }
            .vegas-dot { animation-delay: 1.5s; }
            
            .city-labels text {
              animation: labelGlow 3s ease-in-out infinite alternate;
              text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
            }
            
            .tech-overview-title {
              animation: fadeInUp 1s ease-out;
            }
            
            .tech-overview-subtitle {
              animation: fadeInUp 1s ease-out 0.5s both;
            }
            
            .tech-cards-container {
              animation: fadeInUp 1s ease-out 1s both;
            }
            
            .floating-particles {
              position: absolute;
              width: 100%;
              height: 100%;
              overflow: hidden;
              pointer-events: none;
              z-index: 2;
            }
            
            .particle {
              position: absolute;
              width: 2px;
              height: 2px;
              background: rgba(6, 182, 212, 0.5);
              border-radius: 50%;
              animation: float 15s linear infinite;
            }
            
            .table-card {
              background: rgba(255, 255, 255, 0.08);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.1);
              border-radius: 12px;
              padding: 2rem;
              width: 300px;
              height: 180px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              transition: all 0.3s ease;
              position: relative;
              overflow: hidden;
              cursor: pointer;
            }
            
            .table-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
              transition: left 0.6s;
            }
            
            .table-card:hover::before {
              left: 100%;
            }
            
            .table-card:hover {
              transform: translateY(-8px) scale(1.02);
              background: rgba(255, 255, 255, 0.12);
              border-color: rgba(255, 255, 255, 0.2);
            }
            
            .table-title {
              font-size: 1.1rem;
              font-weight: 600;
              margin-bottom: 0.5rem;
              color: #e2e8f0;
              text-align: center;
            }
            
            .table-description {
              font-size: 0.9rem;
              color: #94a3b8;
              text-align: center;
              line-height: 1.4;
            }
          `}
        </style>
        
        {/* Floating Particles */}
        <div className="floating-particles" id="particles-container"></div>
        
        <div className="container">
          <div style={{ position: "relative", padding: "4rem 0", minHeight: "100vh" }}>
            {/* Background Map */}
            <div style={{ 
              position: "absolute", 
              top: "50%", 
              left: "50%", 
              transform: "translate(-50%, -50%)",
              width: "900px",
              height: "500px",
              opacity: "0.4",
              zIndex: "1"
            }}>
              <svg 
                className="world-map"
                style={{ width: "100%", height: "100%" }} 
                viewBox="0 0 900 500" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* North America */}
                <path className="continent-outline" d="M158 206c0-1 1-2 3-2l17-3c4-1 8-2 11 0 3 2 5 5 9 6l8 2c3 1 6 0 8-2l5-4c2-2 4-3 7-3l6 1c3 1 5 3 7 5l4 5c1 2 2 4 4 5l5 3c2 1 4 1 6 0l4-2c2-1 4-1 6 0l5 2c2 1 4 3 5 5l2 4c1 2 1 4 0 6l-2 4c-1 2-3 4-5 5l-4 2c-2 1-4 1-6 0l-5-3c-2-1-3-3-4-5l-2-4c-1-2-1-4 0-6l1-3c0-1 0-2-1-3l-2-2c-1-1-3-1-4 0l-3 2c-1 1-2 3-2 5l0 4c0 2-1 4-3 5l-4 2c-2 1-4 0-6-1l-4-3c-1-1-2-3-2-5l0-4c0-2 1-4 3-5l2-1z"/>
                
                {/* South America */}
                <path className="continent-outline" d="M245 280c2-1 4-1 6 0l4 2c2 1 3 3 4 5l2 4c1 2 1 4 0 6l-1 3c0 1 0 2 1 3l2 2c1 1 3 1 4 0l3-2c1-1 2-3 2-5l0-4c0-2 1-4 3-5l4-2c2-1 4 0 6 1l4 3c1 1 2 3 2 5l0 4c0 2-1 4-3 5l-2 1c-1 0-2 1-2 2l0 17c0 4 1 8-1 11-2 3-5 5-6 9l-2 8c-1 3 0 6 2 8l4 5c2 2 3 4 3 7l-1 6c-1 3-3 5-5 7l-5 4c-2 2-4 3-7 3l-6-1c-3-1-5-3-7-5l-4-5c-1-2-2-4-4-5l-5-3c-2-1-4-1-6 0l-4 2c-2 1-4 1-6 0l-5-2c-2-1-4-3-5-5l-2-4c-1-2-1-4 0-6l2-4c1-2 3-4 5-5l4-2c2-1 4-1 6 0l5 3c2 1 3 3 4 5l2 4c1 2 1 4 0 6l-1 3z"/>
                
                {/* Europe */}
                <path className="continent-outline" d="M458 142c3-1 6-1 9 0l7 2c3 1 5 3 7 5l4 4c2 2 3 4 3 7l0 5c0 3-1 5-3 7l-4 4c-2 2-4 3-7 3l-5 0c-3 0-5-1-7-3l-4-4c-2-2-3-4-3-7l0-5c0-3 1-5 3-7l4-4c2-2 4-3 7-3z"/>
                
                {/* Africa */}
                <path className="continent-outline" d="M480 190c4-1 8-1 12 0l9 3c4 1 7 4 9 7l5 7c2 3 3 7 3 11l0 10c0 4-1 8-3 11l-5 7c-2 3-5 6-9 7l-9 3c-4 1-8 1-12 0l-9-3c-4-1-7-4-9-7l-5-7c-2-3-3-7-3-11l0-10c0-4 1-8 3-11l5-7c2-3 5-6 9-7l9-3z"/>
                
                {/* Asia */}
                <path className="continent-outline" d="M580 120c6-2 12-2 18 0l14 4c5 2 10 5 13 9l8 10c3 4 5 9 5 14l0 12c0 5-2 10-5 14l-8 10c-3 4-8 7-13 9l-14 4c-6 2-12 2-18 0l-14-4c-5-2-10-5-13-9l-8-10c-3-4-5-9-5-14l0-12c0-5 2-10 5-14l8-10c3-4 8-7 13-9l14-4z"/>
                
                {/* Australia */}
                <path className="continent-outline" d="M750 350c3-1 6-1 9 0l7 2c3 1 5 3 7 5l4 4c2 2 3 4 3 7l0 5c0 3-1 5-3 7l-4 4c-2 2-4 3-7 3l-5 0c-3 0-5-1-7-3l-4-4c-2-2-3-4-3-7l0-5c0-3 1-5 3-7l4-4c2-2 4-3 7-3z"/>
                
                {/* Connection Lines */}
                <g>
                  <line className="connection-line line-seoul-ny" x1="730" y1="160" x2="200" y2="150" stroke="#06b6d4" strokeWidth="2" strokeDasharray="15,5"/>
                  <line className="connection-line line-seoul-la" x1="730" y1="160" x2="120" y2="180" stroke="#10b981" strokeWidth="2" strokeDasharray="10,10"/>
                  <line className="connection-line line-seoul-vegas" x1="730" y1="160" x2="160" y2="170" stroke="#f59e0b" strokeWidth="2" strokeDasharray="12,3"/>
                  <line className="connection-line line-ny-la" x1="200" y1="150" x2="120" y2="180" stroke="#ef4444" strokeWidth="2" strokeDasharray="8,8"/>
                  <line className="connection-line line-ny-vegas" x1="200" y1="150" x2="160" y2="170" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="6,12"/>
                  <line className="connection-line line-la-vegas" x1="120" y1="180" x2="160" y2="170" stroke="#ec4899" strokeWidth="2" strokeDasharray="20,5"/>
                </g>
                
                {/* Cities */}
                <g>
                  <circle className="city-dot seoul-dot" cx="730" cy="160" r="6" fill="#10b981"/>
                  <circle className="city-dot newyork-dot" cx="200" cy="150" r="6" fill="#3b82f6"/>
                  <circle className="city-dot la-dot" cx="120" cy="180" r="6" fill="#f59e0b"/>
                  <circle className="city-dot vegas-dot" cx="160" cy="170" r="6" fill="#ef4444"/>
                </g>
                
                {/* City Labels */}
                <g className="city-labels">
                  <text x="735" y="145" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600" textAnchor="start">Seoul</text>
                  <text x="205" y="135" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600" textAnchor="start">New York</text>
                  <text x="75" y="195" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600" textAnchor="start">Los Angeles</text>
                  <text x="125" y="155" fill="rgba(255,255,255,0.9)" fontSize="12" fontWeight="600" textAnchor="start">Las Vegas</text>
                </g>
              </svg>
            </div>

            {/* Content */}
            <div style={{ position: "relative", zIndex: "10", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
              <h1 
                className="tech-overview-title"
                style={{
                  fontSize: "4rem",
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
                className="tech-overview-subtitle"
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
                className="tech-cards-container"
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
                  className="table-card"
                  data-testid="card-vision-ai"
                >
                  <div className="table-title">Vision AI Shoe Recognition</div>
                  <div className="table-description">On-device vision AI auto-recognizes shoes and runs the optimal care instantly</div>
                </div>

                <div 
                  className="table-card"
                  data-testid="card-smart-system"
                >
                  <div className="table-title">Smart Shoe-Care System</div>
                  <div className="table-description">Premium built-in plus Showtree/Shoetree for surface-to-interior sterilizing, deodorizing, and gentle drying</div>
                </div>

                <div 
                  className="table-card"
                  data-testid="card-data-platform"
                >
                  <div className="table-title">Data & Personalization Platform</div>
                  <div className="table-description">App reports and predictive alerts personalize care; edge-first, anonymized design protects privacy</div>
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
