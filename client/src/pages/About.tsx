import SectionHeader from "../components/SectionHeader";
import TeamGrid from "../components/TeamGrid";
import team from "../content/team";
import visionImage from "@assets/main_1757842353489.png";

export default function About() {
  const allMembers = [
    {
      name: team.founder.name,
      role: team.founder.title,
      note: team.founder.bio,
    },
    ...team.members,
  ];

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
          <TeamGrid members={allMembers} theme="white" />
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
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-1">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>2024 - Foundation</h4>
                <p style={{ opacity: "0.8" }}>일대기</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-2">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>2025 - First Prototype</h4>
                <p style={{ opacity: "0.8" }}>일대기</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-3">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>2025 - Patent Applications</h4>
                <p style={{ opacity: "0.8" }}>일대기</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
