import { useEffect, useRef, useState } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  theme?: "white" | "black";
}

export default function SectionHeader({ title, subtitle, theme = "white" }: SectionHeaderProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={isVisible ? "fade-up" : ""}
      style={{
        textAlign: "center",
        marginBottom: "4rem",
        color: theme === "black" ? "var(--b-fg)" : "var(--w-fg)",
      }}
      data-testid="section-header"
    >
      <h2
        style={{
          fontSize: "clamp(2.5rem, 5vw, 3rem)",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
        data-testid="text-section-title"
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: "1.25rem",
          opacity: "0.8",
          maxWidth: "600px",
          margin: "0 auto",
        }}
        data-testid="text-section-subtitle"
      >
        {subtitle}
      </p>
    </div>
  );
}
