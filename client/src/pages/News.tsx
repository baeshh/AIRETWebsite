import SectionHeader from "../components/SectionHeader";
import NewsCard from "../components/NewsCard";
import news from "../content/news";

export default function News() {
  const updates = [
    {
      date: "2025-08-25",
      title: "Lab Testing Phase Complete",
      description: "Successfully completed comprehensive UV-C efficacy testing with 99.9% sterilization rate confirmed."
    },
    {
      date: "2025-08-15",
      title: "Partnership Agreement",
      description: "Signed strategic partnership with leading luxury furniture manufacturer for Built-in model integration."
    },
    {
      date: "2025-08-05",
      title: "Patent Filing Update",
      description: "Additional patent applications submitted for advanced humidity sensor technology."
    }
  ];

  return (
    <main>
      {/* News Feed Section (White) */}
      <section className="section section--white" style={{ paddingTop: "6rem" }}>
        <div className="container">
          <SectionHeader
            title="Latest News"
            subtitle="Stay informed about AIRET developments and innovations"
            theme="white"
          />
          <div className="news-grid">
            {news.map((item, index) => (
              <NewsCard key={index} news={item} theme="white" />
            ))}
          </div>
        </div>
      </section>

      {/* Updates Section (Black) */}
      <section className="section section--black">
        <div className="container">
          <SectionHeader
            title="Recent Updates"
            subtitle="Timeline of our latest activities and milestones"
            theme="black"
          />
          <div style={{ maxWidth: "48rem", margin: "0 auto" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {updates.map((update, index) => (
                <div
                  key={index}
                  style={{
                    padding: "1.5rem",
                    background: "var(--b-surface)",
                    borderRadius: "var(--radius)",
                    border: "1px solid var(--b-line)",
                  }}
                  data-testid={`update-${index}`}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <time
                      style={{
                        fontSize: "0.875rem",
                        opacity: "0.7",
                      }}
                      data-testid={`update-date-${index}`}
                    >
                      {update.date}
                    </time>
                    <h3
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "600",
                      }}
                      data-testid={`update-title-${index}`}
                    >
                      {update.title}
                    </h3>
                    <p
                      style={{
                        opacity: "0.8",
                      }}
                      data-testid={`update-description-${index}`}
                    >
                      {update.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
