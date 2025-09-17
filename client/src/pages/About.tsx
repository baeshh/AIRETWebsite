import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import TeamGrid from "../components/TeamGrid";
import WorldMap from "../components/WorldMap";
import team from "../content/team";
import visionImage from "@assets/main_1757842353489.png";
import austinKooImage from "@assets/Austin Koo_1758106273468.jpg";
import seunghwanBaeImage from "@assets/Seunghwan bae_1758112313093.png";
import anidiptaPalImage from "@assets/anidipta pal_1758106273470.png";
import pulusuKarthikImage from "@assets/Pulusu Karthik_1758106273469.png";
import aarushiMishraImage from "@assets/Aarushi Mishra_1758106273470.png";

type Year = 2023 | 2024 | 2025;

interface Milestone {
  date: string;
  description: string;
}

export default function About() {
  const [activeYear, setActiveYear] = useState<Year>(2025);

  // 팀 멤버 이미지 매핑 함수
  const getTeamMemberImage = (name: string): string | undefined => {
    const nameMap: Record<string, string> = {
      "Seunghwan Bae": seunghwanBaeImage,
      "Anidipta Pal": anidiptaPalImage,
      "PULUSU KARTHIK": pulusuKarthikImage,
      "Aarushi Mishra": aarushiMishraImage
    };
    return nameMap[name];
  };

  // 이미지가 있는 팀 멤버들을 위해 이미지 속성 추가
  const membersWithImages = team.members.map((member: any) => ({
    ...member,
    image: getTeamMemberImage(member.name)
  }));

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

      {/* Technology Overview Section (Gray/Blue) */}
      <section className="section section--white" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)" }}>
        <div className="container">
          <SectionHeader
            title="Technology Overview"
            subtitle="Innovation that connects Seoul to the world"
            theme="white"
          />
          
          <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
            {/* World Map with Animation */}
            <div style={{ marginBottom: "4rem" }}>
              <WorldMap />
            </div>
            
            {/* Technology Cards */}
            <motion.div 
              style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
                gap: "2rem" 
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {/* Vision AI Card */}
              <motion.div 
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  cursor: "pointer"
                }}
                data-testid="card-vision-ai"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem"
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <span style={{ fontSize: "24px", color: "white" }}>🤖</span>
                </motion.div>
                <h3 style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "bold", 
                  marginBottom: "1rem",
                  color: "#4f46e5"
                }}>
                  Vision AI Shoe Recognition
                </h3>
                <p style={{ 
                  opacity: "0.8", 
                  lineHeight: "1.6",
                  color: "#374151"
                }}>
                  On-device vision AI auto-recognizes shoes and runs the optimal care instantly
                </p>
              </motion.div>
              
              {/* Smart Shoe-Care Card */}
              <motion.div 
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  cursor: "pointer"
                }}
                data-testid="card-smart-care"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #059669, #10b981)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem"
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <span style={{ fontSize: "24px", color: "white" }}>👟</span>
                </motion.div>
                <h3 style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "bold", 
                  marginBottom: "1rem",
                  color: "#059669"
                }}>
                  Smart Shoe-Care System
                </h3>
                <p style={{ 
                  opacity: "0.8", 
                  lineHeight: "1.6",
                  color: "#374151"
                }}>
                  Premium built-in plus Showtree/Shoetree for surface-to-interior sterilizing, deodorizing, and gentle drying
                </p>
              </motion.div>
              
              {/* Data & Personalization Card */}
              <motion.div 
                style={{
                  background: "white",
                  padding: "2rem",
                  borderRadius: "16px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  cursor: "pointer"
                }}
                data-testid="card-data-platform"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #dc2626, #f87171)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem"
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <span style={{ fontSize: "24px", color: "white" }}>📱</span>
                </motion.div>
                <h3 style={{ 
                  fontSize: "1.5rem", 
                  fontWeight: "bold", 
                  marginBottom: "1rem",
                  color: "#dc2626"
                }}>
                  App reports and predictive alerts
                </h3>
                <p style={{ 
                  opacity: "0.8", 
                  lineHeight: "1.6",
                  color: "#374151"
                }}>
                  personalize care; edge-first, anonymized design protects privacy
                </p>
              </motion.div>
            </motion.div>
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
                width: "20rem",
                height: "20rem",
                margin: "0 auto 2rem auto",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #e5e7eb",
              }}
              data-testid="founder-avatar"
            >
              <img 
                src={austinKooImage} 
                alt={team.founder.name}
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover",
                  display: "block" 
                }}
              />
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
          <TeamGrid members={membersWithImages} theme="white" />
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
