import { Link } from "react-router-dom";

interface Product {
  key: string;
  name: string;
  summary: string;
  specs: string[];
  icon?: string;
}

interface ProductCardProps {
  product: Product;
  theme?: "white" | "black";
}

export default function ProductCard({ product, theme = "black" }: ProductCardProps) {
  const cardClass = theme === "white" ? "card--white" : "card--black";
  const buttonStyle = theme === "black" 
    ? { background: "var(--w-bg)", color: "var(--w-fg)" }
    : { background: "var(--b-bg)", color: "var(--b-fg)" };

  return (
    <div className={`card ${cardClass}`} data-testid={`product-card-${product.key}`}>
      {/* Product image placeholder */}
      <div
        style={{
          aspectRatio: "4/3",
          background: theme === "white" ? "#f3f4f6" : "#374151",
          position: "relative",
          overflow: "hidden",
        }}
        data-testid={`product-image-${product.key}`}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme === "white" ? "#9ca3af" : "#6b7280",
          }}
        >
          <span style={{ fontSize: "2.5rem" }}>{product.icon || "📦"}</span>
        </div>
      </div>
      <div style={{ padding: "1.5rem" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
          }}
          data-testid={`product-name-${product.key}`}
        >
          {product.name}
        </h3>
        <p
          style={{
            opacity: "0.8",
            marginBottom: "1rem",
          }}
          data-testid={`product-summary-${product.key}`}
        >
          {product.summary}
        </p>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            marginBottom: "1.5rem",
          }}
          data-testid={`product-specs-${product.key}`}
        >
          {product.specs.map((spec, index) => (
            <li
              key={index}
              style={{
                fontSize: "0.875rem",
                opacity: "0.7",
              }}
              data-testid={`product-spec-${product.key}-${index}`}
            >
              • {spec}
            </li>
          ))}
        </ul>
        <Link
          to="/product"
          style={{
            display: "inline-block",
            padding: "0.5rem 1.5rem",
            borderRadius: "var(--radius)",
            fontWeight: "500",
            transition: "all 0.2s ease",
            ...buttonStyle,
          }}
          data-testid={`button-learn-more-${product.key}`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
