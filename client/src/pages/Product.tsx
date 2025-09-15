import SectionHeader from "../components/SectionHeader";
import ProductCard from "../components/ProductCard";
import products from "../content/products";

export default function Product() {
  const features = [
    {
      id: "uv-sterilization",
      icon: "🔬",
      title: "UV-C Sterilization System",
      subtitle: "Advanced UV-C for shoe sterilization and odor removal",
      features: [
        "UV-C LED Array",
        "Safety Interlock",
        "Automated Cycles"
      ]
    },
    {
      id: "smart-display",
      icon: "📱",
      title: "Smart Display Interface",
      subtitle: "Intuitive touchscreen control with real-time monitoring and care customization",
      features: [
        "Touch Display",
        "Weather Integration",
        "Care Tracking"
      ]
    },
    {
      id: "ai-vision",
      icon: "👁️",
      title: "AI Vision System",
      subtitle: "Intelligent shoe recognition and automatic care selection using advanced image analysis",
      features: [
        "Auto Recognition",
        "Material Detection",
        "Care Optimization"
      ]
    },
    {
      id: "smart-control",
      icon: "🎛️",
      title: "Smart Control Unit",
      subtitle: "Powerful processing unit orchestrating all system functions with precision and reliability",
      features: [
        "IoT Connectivity",
        "Cloud Sync",
        "Remote Control"
      ]
    }
  ];

  return (
    <main>
      {/* Product Line Section (White) */}
      <section className="section section--white" style={{ paddingTop: "6rem" }}>
        <div className="container">
          <SectionHeader
            title="Smart Living Starts at the Doorstep"
            subtitle="Every feature has been meticulously designed to provide unparalleled shoe care and presentation in luxury environments."
            theme="white"
          />
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.key} product={product} theme="white" />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section (Black) */}
      <section className="section section--black">
        <div className="container">
          <SectionHeader
            title="Technical Features"
            subtitle="Advanced technology components powering AIRET innovation"
            theme="black"
          />
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "2rem", 
            maxWidth: "80rem", 
            margin: "0 auto" 
          }}>
            {features.map((feature) => (
              <div
                key={feature.id}
                style={{
                  padding: "2rem",
                  background: "var(--b-surface)",
                  borderRadius: "var(--radius)",
                  border: "1px solid var(--b-line)",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  cursor: "pointer"
                }}
                data-testid={`feature-card-${feature.id}`}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 25px -3px rgb(0 0 0 / 0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1.5rem",
                    display: "block"
                  }}
                  data-testid={`feature-icon-${feature.id}`}
                >
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "0.75rem",
                    color: "var(--b-fg)"
                  }}
                  data-testid={`feature-title-${feature.id}`}
                >
                  {feature.title}
                </h3>
                
                {/* Subtitle */}
                <p
                  style={{
                    fontSize: "0.95rem",
                    opacity: "0.8",
                    marginBottom: "1.5rem",
                    lineHeight: "1.5"
                  }}
                  data-testid={`feature-subtitle-${feature.id}`}
                >
                  {feature.subtitle}
                </p>
                
                {/* Feature List */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0 0 1.5rem 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem"
                  }}
                  data-testid={`feature-list-${feature.id}`}
                >
                  {feature.features.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        fontSize: "0.9rem",
                        opacity: "0.9",
                        padding: "0.5rem 1rem",
                        background: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "0.5rem",
                        border: "1px solid rgba(255, 255, 255, 0.1)"
                      }}
                      data-testid={`feature-item-${feature.id}-${index}`}
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
