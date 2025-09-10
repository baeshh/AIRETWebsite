import SectionHeader from "../components/SectionHeader";
import ProductCard from "../components/ProductCard";
import SpecTable from "../components/SpecTable";
import products from "../content/products";

export default function Product() {
  const specifications = [
    {
      "Specification": "Dimensions (W×D×H)",
      "Built-in": "Custom fit",
      "Stand-alone": "80×60×200cm",
      "Lite": "40×30×50cm",
      "Pro": "120×80×220cm"
    },
    {
      "Specification": "Capacity",
      "Built-in": "8-48 pairs",
      "Stand-alone": "12-24 pairs",
      "Lite": "1-2 pairs",
      "Pro": "48-96 pairs"
    },
    {
      "Specification": "Power Consumption",
      "Built-in": "45-80W",
      "Stand-alone": "60W",
      "Lite": "25W",
      "Pro": "120W"
    },
    {
      "Specification": "Noise Level",
      "Built-in": "< 30dB",
      "Stand-alone": "< 35dB",
      "Lite": "< 25dB",
      "Pro": "< 40dB"
    },
    {
      "Specification": "Materials",
      "Built-in": "Aluminum/Glass",
      "Stand-alone": "Steel/Glass",
      "Lite": "ABS/Acrylic",
      "Pro": "Steel/Glass"
    },
    {
      "Specification": "UV-C System",
      "Built-in": "Integrated",
      "Stand-alone": "Integrated",
      "Lite": "Optional",
      "Pro": "Advanced"
    },
    {
      "Specification": "Networking",
      "Built-in": "Wi-Fi/Ethernet",
      "Stand-alone": "Wi-Fi",
      "Lite": "Bluetooth",
      "Pro": "Wi-Fi/Ethernet/LTE"
    },
    {
      "Specification": "Warranty",
      "Built-in": "3 years",
      "Stand-alone": "2 years",
      "Lite": "1 year",
      "Pro": "5 years"
    }
  ];

  const headers = ["Specification", "Built-in", "Stand-alone", "Lite", "Pro"];

  return (
    <main>
      {/* Product Line Section (White) */}
      <section className="section section--white" style={{ paddingTop: "8rem" }}>
        <div className="container">
          <SectionHeader
            title="Product Line"
            subtitle="Museum-grade solutions for every need"
            theme="white"
          />
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.key} product={product} theme="white" />
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section (Black) */}
      <section className="section section--black">
        <div className="container">
          <SectionHeader
            title="Technical Specifications"
            subtitle="Detailed comparison of all AIRET models"
            theme="black"
          />
          <SpecTable
            specifications={specifications}
            headers={headers}
            theme="black"
          />
        </div>
      </section>
    </main>
  );
}
