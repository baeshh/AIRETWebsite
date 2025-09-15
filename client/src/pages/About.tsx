import SectionHeader from "../components/SectionHeader";
import TeamGrid from "../components/TeamGrid";
import team from "../content/team";
import visionImage from "@assets/main_1757842353489.png";

export default function About() {

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
                  AIRET is not just a shoe care device it is a smart built-in system equipped with UV-C sterilization, humidity control, and display features.
                </p>
                <p style={{ opacity: "0.8" }} data-testid="text-vision-paragraph-2">
                  We transform the entrance from a simple passageway into the starting point of the smart home and the first experience of a luxury lifestyle.
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

      {/* Company Intro Section (Black) */}
      <section className="section section--black">
        <div className="container">
          <SectionHeader
            title="Our Journey"
            subtitle="Milestones in innovation and excellence"
            theme="black"
          />
          
          <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-1">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Feb 2023</h4>
                <p style={{ opacity: "0.8" }}>Patent granted (KR No. 10-2499846).</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-2">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Dec 2023</h4>
                <p style={{ opacity: "0.8" }}>Patent application filed: Smart sterilizing shoe cabinet (KR 10-2023-0175107).</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-3">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Jan 2024</h4>
                <p style={{ opacity: "0.8" }}>MOU with MDI to install shoe cabinets in model homes.</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-4">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Feb 2024</h4>
                <p style={{ opacity: "0.8" }}>Patent application filed: AI smart shoe cabinet using image analysis (KR 10-2024-0165413).</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-5">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Sep 2024</h4>
                <p style={{ opacity: "0.8" }}>LOI signed with SM Gyeongnam (Gyeongnam Honorsville Gwangju Station Taejeon).</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-6">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Sep 2024</h4>
                <p style={{ opacity: "0.8" }}>MOU signed with Buildhada, a SaaS construction platform.</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-7">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Sep 2024</h4>
                <p style={{ opacity: "0.8" }}>MOU signed with MoDef (custom furniture installation & manufacturing).</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-8">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Oct 2024</h4>
                <p style={{ opacity: "0.8" }}>Patent application filed: Smart shoe automatic re-care system and method (KR 10-2024-0147477).</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-9">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Oct 2024</h4>
                <p style={{ opacity: "0.8" }}>MOU signed with Andrew L. Pettit Architects (New York).</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-10">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Dec 2024</h4>
                <p style={{ opacity: "0.8" }}>Product validation testing underway with HOBAN Construction (product adoption under discussion).</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-11">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Jan 2025</h4>
                <p style={{ opacity: "0.8" }}>MOU signed with Jeongrok Co., Ltd. for plasma technology development.</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-12">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Mar 2025</h4>
                <p style={{ opacity: "0.8" }}>LOI executed with HDC Hyundai Development Company.</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-13">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Apr 2025</h4>
                <p style={{ opacity: "0.8" }}>LOI executed with Yangwoo Construction for the Yangwoo Naean-Ae project.</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-14">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>Apr 2025</h4>
                <p style={{ opacity: "0.8" }}>Purchase commitment contract executed for Jeju City Residence, Unit 140.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
