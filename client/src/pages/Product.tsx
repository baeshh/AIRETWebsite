import SectionHeader from "../components/SectionHeader";
import ProductCard from "../components/ProductCard";
import SpecTable from "../components/SpecTable";
import products from "../content/products";

export default function Product() {
  const specifications = [
    {
      "1": "2",
      "3": "4",
      "5": "6",
      "7": "-",
      "-": "-"
    },
    {
      "-": "-",
      "-": "-",
      "-": "-",
      "-": "-",
      "-": "-"
    },
    {
      "-": "-n",
      "-": "-",
      "-": "-",
      "-": "-",
      "-": "-"
    },
    {
      "-": "-",
      "-": "-",
      "-": "-",
      "-": "-",
      "-": "-"
    },
    {
      "-": "-",
      "-": "-",
      "-": "-",
      "-": "-",
      "-": "-"
    },
    {
      "-": "-",
      "-": "-",
      "-": "-",
      "-": "-",
      "-": "-"
    },
    {
      "-": "-",
      "-": "-",
      "-": "-",
      "-": "-",
      "-": "-"
    },
    {
      "-": "-",
      "-": "-",
      "-": "-",
      "-": "-",
      "-": "-"
    }
  ];

  const headers = ["제품사양1", "제품사양2", "제품사양3", "제품사양3", "제품사양4"];

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

      {/* Specifications Section (Black) */}
      <section className="section section--black">
        <div className="container">
          <SectionHeader
            title="Technical Specifications"
            subtitle="Detailed comparison of AIRET models"
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
