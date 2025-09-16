import { useMemo } from "react";

type Particle = { left: number; delay: number; duration: number };

interface WorldMapHeroProps {
  theme?: "white" | "black";
}

const WorldMapHero: React.FC<WorldMapHeroProps> = ({ theme = "white" }) => {
  // React로 파티클(기포) 렌더
  const particles: Particle[] = useMemo(
    () =>
      Array.from({ length: 60 }, () => ({
        left: Math.random() * 100,         // 0~100%
        delay: Math.random() * 15,         // 0~15s
        duration: 10 + Math.random() * 10, // 10~20s
      })),
    []
  );

  const containerStyle: React.CSSProperties = {
    position: "relative",
    display: "grid",
    placeItems: "center",
    width: "min(1280px, 95vw)",
    margin: "0 auto",
    height: "500px",
    overflow: "hidden"
  };

  const particlesStyle: React.CSSProperties = {
    position: "absolute",
    inset: "0",
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: 0
  };

  const particleBaseStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "-5vh",
    width: "2.4px",
    height: "2.4px",
    background: "rgba(6, 182, 212, 0.5)",
    borderRadius: "50%",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite"
  };

  const worldMapStyle: React.CSSProperties = {
    width: "100%",
    height: "auto",
    aspectRatio: "18 / 10",
    overflow: "visible",
    zIndex: 1
  };

  return (
    <div style={containerStyle} data-testid="world-map-hero">
      {/* 기포 */}
      <div style={particlesStyle}>
        {particles.map((p, i) => (
          <span
            key={i}
            style={{
              ...particleBaseStyle,
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              animationName: "float"
            }}
          />
        ))}
      </div>

      {/* 월드맵 + 오버레이 */}
      <svg 
        style={worldMapStyle} 
        viewBox="0 0 900 500" 
        aria-hidden="true"
        data-testid="world-map-svg"
      >
        {/* 간단한 세계지도 형태 */}
        <g>
          {/* 대륙들을 간단한 형태로 표현 */}
          <path 
            d="M50,200 Q150,180 250,200 L300,250 Q200,280 100,260 Z" 
            fill={theme === "white" ? "rgba(100, 116, 139, 0.1)" : "rgba(148, 163, 184, 0.1)"}
            stroke={theme === "white" ? "#64748b" : "#94a3b8"}
            strokeWidth="1.2"
            opacity="0.85"
            style={{
              animation: "continentPulse 6s ease-in-out infinite alternate"
            }}
          />
          <path 
            d="M400,150 Q500,130 600,150 L650,200 Q550,230 450,210 Z" 
            fill={theme === "white" ? "rgba(100, 116, 139, 0.1)" : "rgba(148, 163, 184, 0.1)"}
            stroke={theme === "white" ? "#64748b" : "#94a3b8"}
            strokeWidth="1.2"
            opacity="0.85"
            style={{
              animation: "continentPulse 6s ease-in-out infinite alternate"
            }}
          />
          <path 
            d="M700,120 Q780,100 850,120 L870,170 Q800,190 720,175 Z" 
            fill={theme === "white" ? "rgba(100, 116, 139, 0.1)" : "rgba(148, 163, 184, 0.1)"}
            stroke={theme === "white" ? "#64748b" : "#94a3b8"}
            strokeWidth="1.2"
            opacity="0.85"
            style={{
              animation: "continentPulse 6s ease-in-out infinite alternate"
            }}
          />
        </g>

        {/* 연결 라인 */}
        <g>
          <path 
            d="M200,150 C300,120 600,140 730,160" 
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.9"
            style={{
              animation: "flowingLine 4s ease-in-out infinite",
              strokeDasharray: "0 400",
              strokeDashoffset: "0"
            }}
          />
        </g>

        {/* 도시 점 */}
        <g>
          <circle 
            cx="730" 
            cy="160" 
            r="7.2" 
            fill="#10b981"
            style={{
              filter: "drop-shadow(0 0 8px currentColor)",
              animation: "cityPulse 2s ease-in-out infinite"
            }}
            data-city="seoul"
          />
          <circle 
            cx="200" 
            cy="150" 
            r="7.2" 
            fill="#10b981"
            style={{
              filter: "drop-shadow(0 0 8px currentColor)",
              animation: "cityPulse 2s ease-in-out infinite"
            }}
            data-city="newyork"
          />
          <circle 
            cx="120" 
            cy="180" 
            r="7.2" 
            fill="#10b981"
            style={{
              filter: "drop-shadow(0 0 8px currentColor)",
              animation: "cityPulse 2s ease-in-out infinite"
            }}
            data-city="la"
          />
          <circle 
            cx="160" 
            cy="170" 
            r="7.2" 
            fill="#10b981"
            style={{
              filter: "drop-shadow(0 0 8px currentColor)",
              animation: "cityPulse 2s ease-in-out infinite"
            }}
            data-city="vegas"
          />
        </g>

        {/* 라벨 */}
        <g>
          <text 
            x="735" 
            y="145" 
            style={{
              font: `600 12px/1.2 "Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif`,
              fill: theme === "white" ? "#1e293b" : "#e2e8f0",
              textShadow: "0 0 8px rgba(15, 23, 42, 0.9)",
              animation: "labelGlow 3s ease-in-out infinite alternate"
            }}
          >
            Seoul
          </text>
          <text 
            x="205" 
            y="135" 
            style={{
              font: `600 12px/1.2 "Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif`,
              fill: theme === "white" ? "#1e293b" : "#e2e8f0",
              textShadow: "0 0 8px rgba(15, 23, 42, 0.9)",
              animation: "labelGlow 3s ease-in-out infinite alternate"
            }}
          >
            New York
          </text>
          <text 
            x="125" 
            y="165" 
            style={{
              font: `600 12px/1.2 "Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif`,
              fill: theme === "white" ? "#1e293b" : "#e2e8f0",
              textShadow: "0 0 8px rgba(15, 23, 42, 0.9)",
              animation: "labelGlow 3s ease-in-out infinite alternate"
            }}
          >
            Los Angeles
          </text>
          <text 
            x="165" 
            y="155" 
            style={{
              font: `600 12px/1.2 "Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif`,
              fill: theme === "white" ? "#1e293b" : "#e2e8f0",
              textShadow: "0 0 8px rgba(15, 23, 42, 0.9)",
              animation: "labelGlow 3s ease-in-out infinite alternate"
            }}
          >
            Las Vegas
          </text>
        </g>
      </svg>

      {/* CSS 애니메이션 */}
      <style>{`
        @keyframes continentPulse {
          from { opacity: 0.75; transform: translateY(0px); }
          to   { opacity: 0.95; transform: translateY(-1.5px); }
        }
        @keyframes flowingLine {
          0%   { stroke-dasharray: 0 400; stroke-dashoffset: 0; }
          60%  { stroke-dasharray: 120 400; stroke-dashoffset: -40; }
          100% { stroke-dasharray: 0 400; stroke-dashoffset: -80; }
        }
        @keyframes cityPulse {
          0%, 100% { r: 7.2; opacity: 1; }
          50%      { r: 8.2; opacity: 0.85; }
        }
        @keyframes labelGlow {
          from { letter-spacing: 0.1px; opacity: 0.85; }
          to   { letter-spacing: 0.7px; opacity: 1; }
        }
        @keyframes float {
          0%   { transform: translateY(100vh) translateX(0); opacity: 0; }
          10%  { opacity: 0.8; }
          100% { transform: translateY(-10vh) translateX(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default WorldMapHero;