import SectionHeader from "../components/SectionHeader";
import TeamGrid from "../components/TeamGrid";
import team from "../content/team";

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
            subtitle="Protecting and presenting collections with science-grade care"
            theme="black"
          />
          
          <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center", marginBottom: "4rem" }}>
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1.5rem" }} data-testid="text-vision-title">
                  Our Vision
                </h3>
                <p style={{ opacity: "0.8", marginBottom: "1rem" }} data-testid="text-vision-paragraph-1">
                  AIRET revolutionizes luxury item preservation by combining museum-grade conservation techniques with modern display technology.
                </p>
                <p style={{ opacity: "0.8" }} data-testid="text-vision-paragraph-2">
                  We believe that valuable collections deserve the same level of care and presentation found in the world's finest museums.
                </p>
              </div>
              <div
                style={{
                  aspectRatio: "1",
                  background: "#374151",
                  borderRadius: "var(--radius)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                data-testid="img-vision-placeholder"
              >
                <span style={{ fontSize: "3.75rem" }}>🏛️</span>
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
                <p style={{ opacity: "0.8" }}>AIRET founded with a mission to revolutionize luxury item preservation through scientific innovation.</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-2">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>2025 - First Prototype</h4>
                <p style={{ opacity: "0.8" }}>Successful development and testing of our first UV-C integrated preservation system.</p>
              </div>
              <div style={{ padding: "1.5rem", background: "var(--b-surface)", borderRadius: "var(--radius)", border: "1px solid var(--b-line)" }} data-testid="milestone-3">
                <h4 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>2025 - Patent Applications</h4>
                <p style={{ opacity: "0.8" }}>Filed key patents for our proprietary UV-C shielding and humidity control technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
