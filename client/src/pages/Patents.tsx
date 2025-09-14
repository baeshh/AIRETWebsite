import SectionHeader from "../components/SectionHeader";
import PatentCard from "../components/PatentCard";
import patents from "../content/patents";

export default function Patents() {
  return (
    <main>
      {/* Patent List Section (White) */}
      <section className="section section--white" style={{ paddingTop: "6rem" }}>
        <div className="container">
          <SectionHeader
            title="Patents & Innovation"
            subtitle="Patented. Protected. Ahead."
            theme="white"
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2rem" }}>
            {patents.map((patent, index) => (
              <PatentCard key={index} patent={patent} theme="white" />
            ))}
          </div>
        </div>
      </section>

      {/* Diagrams Section (Black) */}
      <section className="section section--black">
        <div className="container">
          <SectionHeader
            title="Technical Diagrams"
            subtitle="Detailed engineering schematics"
            theme="black"
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            <div
              style={{
                aspectRatio: "4/3",
                background: "#374151",
                borderRadius: "var(--radius)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              data-testid="diagram-uv-module"
            >
              <div style={{ textAlign: "center", color: "#9ca3af" }}>
                <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "0.5rem" }}>📐</span>
                <p>UV-C Module Assembly</p>
              </div>
            </div>
            <div
              style={{
                aspectRatio: "4/3",
                background: "#374151",
                borderRadius: "var(--radius)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              data-testid="diagram-airflow"
            >
              <div style={{ textAlign: "center", color: "#9ca3af" }}>
                <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "0.5rem" }}>🌀</span>
                <p>Airflow Distribution System</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
